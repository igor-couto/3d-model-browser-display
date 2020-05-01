import React, { Component } from 'react';
import styles from './ModelDisplay.module.css'
import * as THREE from './three.module';
//import * as LOADER from './OBJLoader';

export default class ModelDisplay extends Component {

    componentDidUpdate() {

        if(this.props.model !== undefined){
            this.loadScene();
        }
    }

    loadScene = () => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setClearColor('#171717');

        // TODO: delete webgl context. The dom element is being erased but the context didn't
        let fatherElement = document.getElementById('3dContainer');
        renderer.setSize( fatherElement.offsetWidth, fatherElement.offsetHeight );
        if(fatherElement.childNodes[0] !== undefined){
            fatherElement.removeChild(fatherElement.childNodes[0]);
        }
        fatherElement.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        scene.add( ambientLight );
        const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );

        scene.add( camera );

        var material = new THREE.MeshPhongMaterial( { color: 0x829FBE } ); 
        var loader = new THREE.ObjectLoader();


        //var loader2 = new LOADER.OBJLoader();
        //console.log(this.props.model);
        //var jsonObject = JSON.stringify( loader.parse( this.props.model ).toJSON(), this.parseNumber );

        
        const manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };
        const textureLoader = new THREE.TextureLoader( manager );
        const texture = textureLoader.load( this.props.texture );

        // const onProgress = function ( xhr ) {
        //     if ( xhr.lengthComputable ) {
        //         let percentComplete = xhr.loaded / xhr.total * 100;
        //         console.log( Math.round(percentComplete, 2) + '% downloaded' );
        //     }
        // };
        // const onError = function ( xhr ) {
        // };

        // loader.load ( this.props.model, function ( model ) {
        //     let object = model;
        //     object.traverse( function ( child ) {
        //         // if ( child instanceof THREE.Mesh ) {
        //         //     child.material.map = texture;
        //         // }
        //         if ( child instanceof THREE.Mesh ) {
        //             child.material = material;
        //         }
        //     } );
        //     object.position.x = 0;
        //     object.position.y = 0;
        //     object.position.z = 0;
        //     scene.add( object );
        // }, onProgress, onError );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 6;
        camera.position.y = 1
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();
        
        // // // texture
        // const manager = new THREE.LoadingManager();
        // manager.onProgress = function ( item, loaded, total ) {
        //     console.log( item, loaded, total );
        // };
        // const textureLoader = new THREE.TextureLoader( manager );
        // const texture = textureLoader.load( 'display/files/' + textureName );
        // // model
        // const onProgress = function ( xhr ) {
        //     if ( xhr.lengthComputable ) {
        //         let percentComplete = xhr.loaded / xhr.total * 100;
        //         console.log( Math.round(percentComplete, 2) + '% downloaded' );
        //     }
        // };
        // const onError = function ( xhr ) {
        // };
        // const loader = new THREE.OBJLoader( manager );
        // loader.load( 'display/files/' + modelName, function ( model ) {
        //     object = model;
        //     object.traverse( function ( child ) {
        //         if ( child instanceof THREE.Mesh ) {
        //             child.material.map = texture;
        //         }
        //     } );
        //     object.position.x = 0;
        //     object.position.y = 0;
        //     object.position.z = 0;
        //     scene.add( object );
        // }, onProgress, onError );
    
        window.addEventListener( 'resize', this.onWindowResize, false );
    };

    parseNumber ( key, value ) {
        var PRECISION = 6;
        return typeof value === 'number' ? parseFloat( value.toFixed( PRECISION ) ) : value;  
    }

    onWindowResize = () => {
        //TODO: Not ideal. Should resize renderer instead.
        this.loadScene();
    }

    render() {
        return(
            <div className={styles.ModelDisplay}>
                <div className={styles.container}>
                    <div id="3dContainer" className={styles.sceneContainer}></div>
                    <p>Name</p>
                </div>
            </div>);
    };
}