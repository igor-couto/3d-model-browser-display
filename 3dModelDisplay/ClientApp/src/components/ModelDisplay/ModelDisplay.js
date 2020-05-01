import React, { Component } from 'react';
import styles from './ModelDisplay.module.css'
import * as THREE from './three.module';

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


        const manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };
        const textureLoader = new THREE.TextureLoader( manager );
        const texture = textureLoader.load( this.props.texture );
        

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
        console.log('modeldisplay render');
        console.log(this.props.name);
        return(
            <div className={styles.ModelDisplay}>
                <div className={styles.container}>
                    <div id="3dContainer" className={styles.sceneContainer}></div>
                    <p>{this.props.name}</p>
                </div>
            </div>);
    };
}