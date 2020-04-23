import React, { Component } from 'react';
import styles from './ModelDisplay.module.css'
import * as THREE from './three.module';

export default class ModelDisplay extends Component {

    componentDidMount(){

        // const script = document.createElement("script");
        // script.src = "./three.js";
        // script.async = true;
        // document.body.appendChild(script);

        // const script2 = document.createElement("script");
        // script2.src = "./three.min.js";
        // script2.async = true;
        // document.body.appendChild(script2);

        // const script3 = document.createElement("script");
        // script3.src = "./loaders/OBJLoader.js";
        // script3.async = true;
        // document.body.appendChild(script3);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );


        this.loadScene();
    }

    loadScene = () => {
        const container = document.createElement( 'div' );
        document.body.appendChild( container );
        //const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        // camera.position.z = 250;
        // // scene
        // const scene = new THREE.Scene();
        // const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        // scene.add( ambientLight );
        // const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        // camera.add( pointLight );
        // scene.add( camera );
        // // texture
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
    
        // const renderer = new THREE.WebGLRenderer();
        // renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setSize( window.innerWidth, window.innerHeight );
        // container.appendChild( renderer.domElement );
    
        // window.addEventListener( 'resize', onWindowResize, false );
    
        // this.setState({
        //     container = document.getElementById('3dContainer'),
        //     camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 ),
        //     scene = new THREE.Scene(),
        //     renderer = new THREE.WebGLRenderer(),
        //     windowHalfX = window.innerWidth / 2,
        //     windowHalfY = window.innerHeight / 2,
        //     rotationspeed = 0.03,
        //     object = null
        // });

        //renderScene();
    };

    // onWindowResize = () => {
    //     windowHalfX = window.innerWidth / 2;
    //     windowHalfY = window.innerHeight / 2;
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    // }

    // renderScene() {
    //     requestAnimationFrame( animate );
    //     object.rotateY(rotationspeed);
    //     camera.lookAt( scene.position );
    //     renderer.render( scene, camera );
    // }


    render() {
        return(
            <div className={styles.ModelDisplay}>
                <div className={styles.container}>
                    <div className={styles.sceneContainer}></div>
                    <p>Name</p>
                </div>
            </div>);
    };
}
