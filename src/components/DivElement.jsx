import * as THREE from 'three';

function DivElement() {
  const component = new THREE.Object3D();
  
  // membuat mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  component.add(mesh);

  // membuat elemen div
  const div = document.createElement('div');
  div.innerText = 'Scroll Down';
  div.style.position = 'absolute';
  div.style.top = '50px';
  div.style.left = '50px';
  div.style.zIndex = '1';
  div.style.transform = 'translateZ(-50px)'
  document.body.appendChild(div);

  return component;
}

export default DivElement;

