import * as THREE from 'three';
import ImgContent1 from '/textures/0001.png'
import ImgContent2 from '/textures/0002.png'
import ImgContent3 from '/textures/0003.png'
import ImgContent4 from '/textures/0004.png'
import ImgContent5 from '/textures/0005.png'
import ImgContent6 from '/textures/0006.png'

function CardTexture_2() {
  const component = new THREE.Object3D();


const CardTexture2 = new THREE.TextureLoader().load(ImgContent2);

const Card2 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial( { map: CardTexture2 } )
);
Card2.position.set(5, 3, -3);
Card2.rotation.set(0, -1, 0);
component.add(Card2);

  return component;
}

export default CardTexture_2;
