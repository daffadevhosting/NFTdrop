import * as THREE from 'three';

function BoxScene() {
  const component = new THREE.Object3D();
  
  const box1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  box1.position.set(0, -4, -6);
  component.add(box1);
  
  const box2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
  box2.position.set(5, 0, 0);
  component.add(box2);

  return component;
}

export default BoxScene;

