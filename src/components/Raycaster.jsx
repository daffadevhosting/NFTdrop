import * as THREE from 'three';

function RayCaster() {
  const component = new THREE.Object3D();

  const buttonGeometry = new THREE.BoxGeometry(1, 1, 1);
  const buttonMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const buttonMesh = new THREE.Mesh(buttonGeometry, buttonMaterial);
  buttonMesh.position.set(0, 0, -5);
  buttonMesh.userData.action = () => console.log('Button clicked!');
  component.add(buttonMesh);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const onDocumentMouseDown = (event) => {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;

      if (intersectedObject.userData.action) {
        intersectedObject.userData.action();
      }
    }
  };

  renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);

  return component;
}

export default RayCaster;

