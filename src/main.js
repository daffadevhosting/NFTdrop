import './styles/style.css';
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
import BoxScene from './components/BoxScene';
import BoxGallery from './components/BoxGallery';
import DevComponent from './components/Dev';
import sources from "./components/sources";
import {Text} from 'troika-three-text';
import ImgContent1 from '/textures/0001.png'
import ImgContent2 from '/textures/0002.png'
import ImgContent3 from '/textures/0003.png'
import ImgContent4 from '/textures/0004.png'
import ImgContent5 from '/textures/0005.png'
import ImgContent6 from '/textures/0006.png'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
render();
}

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(0.5);

const urls = [
  ImgContent1, ImgContent2,
  ImgContent3, ImgContent4,
  ImgContent5, ImgContent6
];

const cubeTexture = new THREE.CubeTextureLoader().load(urls);
cubeTexture.mapping = THREE.CubeReflectionMapping;

scene.background = cubeTexture;

const myDev = new DevComponent();
scene.add(myDev);

const myCompo = new BoxScene();
scene.add(myCompo);

const myGallery = new BoxGallery();
scene.add(myGallery);

const urlImg = [
  '/textures/0001.png', '/textures/0002.png', '/textures/0003.png', '/textures/0004.png', '/textures/0005.png', '/textures/0006.png',
];

const cardTextures = urlImg.map(url => new THREE.TextureLoader().load(urlImg));
const CardGeometry = new THREE.PlaneGeometry(5, 5, 5);

let currentTextureCard = 0;
let animating = false;

const animateSlide = (mesh, toPosition, duration) => {
  animating = true;
  const fromPosition = mesh.position.clone();
  const direction = toPosition.clone().sub(fromPosition);
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    mesh.position.copy(fromPosition).add(direction.clone().multiplyScalar(progress));
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      animating = false;
    }
  }
  animate();
}

const animCard = new THREE.Mesh(CardGeometry, new THREE.MeshBasicMaterial({ map: cardTextures[currentTextureCard] }));
animCard.position.set(-2, -5, -3);
animCard.rotation.set(0, 0.1, 0);
scene.add(animCard);

const changeTextureCard = () => {
  if (!animating) {
    currentTextureCard = (currentTextureCard + 1) % cardTextures.length;
    animateSlide(animCard, new THREE.Vector3(-3, -5, -3), 1000);
    setTimeout(() => {
      animCard.material.map = cardTextures[currentTextureCard];
      animateSlide(animCard, new THREE.Vector3(3, -5, -3), 1000);
    }, 1000);
  }
}

setInterval(changeTextureCard, 5000);

const CardTexture2 = new THREE.TextureLoader().load(ImgContent2);

const Card2 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial( { map: CardTexture2 } )
);
Card2.position.set(5, 3, -3);
Card2.rotation.set(0, -1, 0);
scene.add(Card2);

const CardTexture = new THREE.TextureLoader().load(ImgContent4);

const Card = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial( { map: CardTexture } )
);
Card.position.set(-6, -2, -3);
Card.rotation.set(0, 1, 0);
scene.add(Card);

const CardTexture1 = new THREE.TextureLoader().load(ImgContent1);

const Card1 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5, 80),
    new THREE.MeshBasicMaterial( { map: CardTexture1 } )
);
Card1.position.set(5, -2, 3);
Card1.rotation.set(0, -1, 0);
scene.add(Card1);

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

const geometry = new THREE.BoxGeometry(20, 20, 20);
const Vite = new THREE.Mesh(geometry, materialArray);

scene.add(Vite);

let currentTexture = 0;

function changeTexture() {
  currentTexture++;
  if (currentTexture >= materialArray.length) {
    currentTexture = 0;
  }
  Vite.material = materialArray[currentTexture];
}

setInterval(changeTexture, 3000);

function Stars() {
  const geometry = new THREE.SphereGeometry(0.15, 20, 18);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star)

}

Array(200).fill().forEach(Stars)

const TextMaterial = new THREE.MeshStandardMaterial( );
const Header = new Text()
Header.text = 'Wellcome World!'
Header.material = TextMaterial
Header.fontSize = 1
Header.position.z = -5
Header.position.x = -2
Header.color = 0xFFFFFF

scene.add(Header)
Header.sync()

const SubTitle = new Text()

SubTitle.text = 'Ini Sub Title'
SubTitle.material = TextMaterial
SubTitle.fontSize = 1
SubTitle.position.z = 5
SubTitle.position.x = -6
SubTitle.rotation.set(0, 1, 0);
SubTitle.color = 0xFFFFFF

scene.add(SubTitle)
SubTitle.sync()

const Description = new Text()

Description.text = 'Get started your desired.'
Description.material = TextMaterial
Description.fontSize = 0.3
Description.position.z = 0
Description.position.x = 0
Description.position.y = -0.5
Description.color = 0xFF0000

scene.add(Description)
Description.sync()

const Dev = new Text()

Dev.text = 'Masih Tahap Pengembangan'
Dev.material = TextMaterial
Dev.fontSize = 1
Dev.textAlign= 'center'
Dev.position.z = 15
Dev.position.x = 0
Dev.position.y = 0
Dev.rotation.set(0, 0, 0);
Dev.color = 0xFFFFFF

scene.add(Dev)
Dev.sync()


const buttonMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const buttonGeometry = new THREE.BoxGeometry(2, 1, 0.05);
const buttonMesh = new THREE.Mesh(buttonGeometry, buttonMaterial);
buttonMesh.position.set(0, 5, -5);

buttonMesh.addEventListener('click', function() {
  window.scrollBy(0, 1250);
});

scene.add(buttonMesh);

/*
const geometry = new THREE.PlaneGeometry( 14, 20, 32, 80 )
const material = new THREE.MeshBasicMaterial( { color: 0x33C3F0 } );
const card = new THREE.Mesh( geometry, material );

scene.add(card)
*/

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);

function animete() {
  requestAnimationFrame( animete );

  Vite.rotation.x += 0.005;
  Vite.rotation.y += 0.005;
  Vite.rotation.z += 0.001;

  controls.update();

  renderer.render( scene, camera );
}

animete()

