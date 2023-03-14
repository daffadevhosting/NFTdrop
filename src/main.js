import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import ThreeMeshUI from 'three-mesh-ui'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import FontJSON from './fonts/Roboto-msdf.json';
import FontImage from './fonts/Roboto-msdf.png';
import ViteImage from './vite.svg';
import space from './space.webp';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(25);

const container = new ThreeMeshUI.Block({
 width: 14,
 height:20,
 padding: 0.2,
 borderRadius: 0.8,
});

scene.add( container );

ThreeMeshUI.update();

const geometry = new THREE.PlaneGeometry( 14, 20, 32, 80 )
const material = new THREE.MeshBasicMaterial( { color: 0x33C3F0 } );
const card = new THREE.Mesh( geometry, material );

scene.add(card)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(25,25,25)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.15, 20, 18);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star)

}

Array(200).fill().forEach(addStar)

const bgTexture = new THREE.TextureLoader().load(space);
scene.background = bgTexture;

function animete() {
  requestAnimationFrame( animete );

  card.rotation.x += 0.01;
  card.rotation.y += 0.005;
  card.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

animete()

const ViteTexture = new THREE.TextureLoader().load(ViteImage);

const Vite = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: ViteTexture } )
);

scene.add(Vite);
