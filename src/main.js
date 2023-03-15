import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import ThreeMeshUI from 'three-mesh-ui'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { TWEEN } from 'three/addons/libs/tween.module.min.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import {Text} from 'troika-three-text';
import FontJSON from './fonts/Roboto-msdf.json';
import FontImage from './fonts/Roboto-msdf.png';
import ViteImage from './vite.svg';
import space from './textures/space-galaxy.jpg';
import earth from './textures/earth.jpg';
import ImgContent1 from './textures/0001.png'
import ImgContent2 from './textures/0002.png'
import ImgContent3 from './textures/0003.png'
import ImgContent4 from './textures/0004.png'
import ImgContent5 from './textures/0005.png'
import ImgContent6 from './textures/0006.png'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(0.5);


const CardTexture = new THREE.TextureLoader().load(ImgContent4);

const Card = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5, 80),
    new THREE.MeshBasicMaterial( { map: CardTexture } )
);
Card.position.set(-5, -2, -3);
scene.add(Card);

const textureFront = new THREE.TextureLoader().load(ImgContent1);
const textureBack = new THREE.TextureLoader().load(ImgContent2);
const textureTop = new THREE.TextureLoader().load(ImgContent3);
const textureBottom = new THREE.TextureLoader().load(ImgContent4);
const textureLeft = new THREE.TextureLoader().load(ImgContent5);
const textureRight = new THREE.TextureLoader().load(ImgContent6);

const materialFront = new THREE.MeshStandardMaterial({map: textureFront});
const materialBack = new THREE.MeshStandardMaterial({map: textureBack});
const materialTop = new THREE.MeshStandardMaterial({map: textureTop});
const materialBottom = new THREE.MeshStandardMaterial({map: textureBottom});
const materialLeft = new THREE.MeshStandardMaterial({map: textureLeft});
const materialRight = new THREE.MeshStandardMaterial({map: textureRight});

const materialArray = [
  materialFront,
  materialBack,
  materialTop,
  materialBottom,
  materialLeft,
  materialRight
];

    const geometry = new THREE.BoxGeometry(15, 15, 15, 80);
    const material = materialArray;
    const Vite = new THREE.Mesh(geometry, material);

scene.add(Vite);

function Stars() {
  const geometry = new THREE.SphereGeometry(0.15, 20, 18);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star)

}

Array(200).fill().forEach(Stars)

const Header = new Text()

Header.text = 'Wellcome World!'
Header.fontSize = 1
Header.position.z = -5
Header.position.x = -2
Header.color = 0xFFFFFF

scene.add(Header)
Header.sync()

const Description = new Text()

Description.text = 'Get started your desired.'
Description.fontSize = 0.3
Description.position.z = 0
Description.position.x = 0
Description.position.y = -0.5
Description.color = 0xFF0000

scene.add(Description)
Description.sync()

/*
const geometry = new THREE.PlaneGeometry( 14, 20, 32, 80 )
const material = new THREE.MeshBasicMaterial( { color: 0x33C3F0 } );
const card = new THREE.Mesh( geometry, material );

scene.add(card)
*/
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(25,25,25)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);
/*
const bgTexture = new THREE.TextureLoader().load(space);
scene.background = bgTexture;
*/

function animete() {
  requestAnimationFrame( animete );

  Vite.rotation.x += 0.01;
  Vite.rotation.y += 0.005;
  Vite.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

animete()

