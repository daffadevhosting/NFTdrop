import * as THREE from 'three';
import ImgContent1 from '/textures/0001.png'
import ImgContent2 from '/textures/0002.png'
import ImgContent3 from '/textures/0003.png'
import ImgContent4 from '/textures/0004.png'
import ImgContent5 from '/textures/0005.png'
import ImgContent6 from '/textures/0006.png'

function CardTexture() {
  const component = new THREE.Object3D();

const CardTexture = new THREE.TextureLoader().load(ImgContent4);

const Card = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial( { map: CardTexture } )
);
Card.position.set(-6, -2, -3);
Card.rotation.set(0, 1, 0);
component.add(Card);

const CardTexture1 = new THREE.TextureLoader().load(ImgContent1);

const Card1 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5, 80),
    new THREE.MeshBasicMaterial( { map: CardTexture1 } )
);
Card1.position.set(5, -2, 3);
Card1.rotation.set(0, -1, 0);
component.add(Card1);

  return component;
}

export default CardTexture;
