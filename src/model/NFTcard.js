import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

    let camera, scene, renderer;

        init();
        render();

function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
    camera.position.set( 2.5, 0, 3.0 );

    scene = new THREE.Scene();

    new RGBELoader()
        .setPath( 'textures/equirectangular/' )
        .load( 'quarry_01_1k.hdr', function ( texture ) {

    texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.background = texture;
        scene.environment = texture;

render();

// model

    const loader = new GLTFLoader().setPath( 'models/gltf/' );
    loader.load( 'buster_drone/drone.glb', function ( gltf ) {

scene.add( gltf.scene );

render();

    } );

} );

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render ); // use if there is no animation loop
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set( 0, 0, 0);
controls.update();

    window.addEventListener( 'resize', onWindowResize );

			}

function onWindowResize() {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );

render();

    }

			//

function render() {

    renderer.render( scene, camera );

}
