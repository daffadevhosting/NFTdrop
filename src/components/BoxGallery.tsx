import * as THREE from 'three';
import ImgContent1 from '/textures/0001.png'
import ImgContent2 from '/textures/0002.png'
import ImgContent3 from '/textures/0003.png'
import ImgContent4 from '/textures/0004.png'
import ImgContent5 from '/textures/0005.png'
import ImgContent6 from '/textures/0006.png'

function BoxGallery() {
  const component = new THREE.Object3D();
  
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

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = materialArray;
    const Gallery = new THREE.Mesh(geometry, material);
    Gallery.position.set(-5, 2, 0);

component.add(Gallery);

function animete() {
  requestAnimationFrame( animete );

  //Gallery.rotation.x += 0.005;
  Gallery.rotation.y += 0.005;
  //Gallery.rotation.z += 0.001;

}

animete()

  return component;
}

export default BoxGallery;
