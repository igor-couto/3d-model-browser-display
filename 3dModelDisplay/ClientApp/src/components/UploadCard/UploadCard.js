import React, {Component} from 'react';
import DropZone from '../DropZone/DropZone';
import styles from './UploadCard.module.css';
import {ReactComponent as CloseIcon} from './close-icon.svg';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
var THREE = require('three');


export default class UploadCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    } 


    onFilesAdded(files) {
        this.setState(prevState => ({
          files: prevState.files.concat(files)
        }));
      }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
        });
        try {
            await Promise.all(promises);
        
            this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
            // Not Production ready! Do some error handling here instead...
            this.setState({ successfullUploaded: true, uploading: false });
        }
    }

    sendRequest = async (file) =>  {

        let fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1);
        let formData = new FormData();
        let fileName = file.name.split('.').slice(0, -1).join('.');
        let content = file;

        if(fileExtension === 'glFT'){

            //formData.append("file", file, file.name);

            formData.append('file', file, `${fileName}.${fileExtension}`);

            const response = await fetch("https://localhost:44355/Model/Upload", {
                method: 'POST',
                body: formData
            });


        } else {

            let gltfExporter = new GLTFExporter();
            
            let options = {
                trs: true,
                onlyVisible: true,
                truncateDrawRange: true,
                binary: false,
                forcePowerOfTwoTextures: true,
                maxTextureSize: Infinity
            };
            gltfExporter.parse(file, function (result) {
                if (result instanceof ArrayBuffer) {
                    fileExtension = 'glb';
                    content = new Blob([result]);
                    header = { 'content-type': 'application/octet-stream' };
                }
                else {
                    let output = JSON.stringify(result, null, 2);
                    let newFileExtension = 'gltf';
                    content = new Blob( [ output ]);
                    header = { 'content-type': 'text/plain' };

                    formData.append('file', content, `${fileName}.${newFileExtension}`);

                    const response = fetch("https://localhost:44355/Model/Upload", {
                        method: 'POST',
                        body: formData
                    });
                }
            }, options);
        }

        // formData.append('file', parameters.content, `${fileName}.${parameters.fileExtension}`);

        // const response = await fetch("https://localhost:44355/Model/Upload", {
        //     method: 'POST',
        //     body: formData
        // });



        // return new Promise((resolve, reject) => {
        //  const req = new XMLHttpRequest();
       
        //  req.upload.addEventListener("progress", event => {
        //   if (event.lengthComputable) {
        //    const copy = { ...this.state.uploadProgress };
        //    copy[file.name] = {
        //     state: "pending",
        //     percentage: (event.loaded / event.total) * 100
        //    };
        //    this.setState({ uploadProgress: copy });
        //   }
        //  });
          
        //  req.upload.addEventListener("load", event => {
        //   const copy = { ...this.state.uploadProgress };
        //   copy[file.name] = { state: "done", percentage: 100 };
        //   this.setState({ uploadProgress: copy });
        //   resolve(req.response);
        //  });
          
        //  req.upload.addEventListener("error", event => {
        //   const copy = { ...this.state.uploadProgress };
        //   copy[file.name] = { state: "error", percentage: 0 };
        //   this.setState({ uploadProgress: copy });
        //   reject(req.response);
        //  });
        // });
    }

    // exportGLTF = ( input ) => {

    //     var gltfExporter = new GLTFExporter();

    //     var options = {
    //         trs: true,
    //         onlyVisible: true,
    //         truncateDrawRange: true,
    //         binary: false,
    //         forcePowerOfTwoTextures: true,
    //         maxTextureSize: Infinity
    //     };

    //     return gltfExporter.parse( input, function ( result ) {

    //         if ( result instanceof ArrayBuffer ) {
    //             this.saveArrayBuffer( result, 'scene.glb' );

    //         } else {

    //             var output = JSON.stringify( result, null, 2 );
    //             console.log( output );
    //             this.saveString( output, 'scene.gltf' );
    //         }
    //     }, options );
    // }

    // saveString = ( text, filename ) => {
    //     console.log('saveString');
    //     //save( new Blob( [ text ], { type: 'text/plain' } ), filename );
    // }

    // saveArrayBuffer = ( buffer, filename ) => {
    //     console.log('saveArrayBuffer');
    //     //save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );
    // }

    CloseCard = () => {
        this.props.openNewModelCard(false);
    }

    render() {
        if(this.props.isNewModelCardOpen){
            return(
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <CloseIcon className={styles.close} onClick={this.CloseCard}/>
                        </div>
                        <div className={styles.body}>
                            <DropZone onFilesAdded={this.onFilesAdded} disabled={this.state.uploading || this.state.successfullUploaded}/>
                            <div className={styles.info}>
                                <input className={styles.textInput} placeholder="Model Name ..."/>
                                <button className={styles.button} onClick={this.uploadFiles}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else {
            return(<div hidden></div>);
        }
    }
}