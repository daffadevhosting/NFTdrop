import * as THREE from 'three';

function Preload() {
  const component = new THREE.Object3D();
  

const loaderContainer = document.createElement('div');
loaderContainer.style.position = 'absolute';
loaderContainer.style.top = '0';
loaderContainer.style.left = '0';
loaderContainer.style.width = '100%';
loaderContainer.style.height = '100%';
loaderContainer.style.backgroundColor = '#000000';
document.body.appendChild(loaderContainer);

const loaderAnimation = document.createElement('div');
loaderAnimation.style.position = 'absolute';
loaderAnimation.style.top = '50%';
loaderAnimation.style.left = '50%';
loaderAnimation.style.transform = 'translate(-50%, -50%)';
loaderAnimation.style.borderRadius = '50%';
loaderAnimation.style.border = '5px solid #fff';
loaderAnimation.style.borderTopColor = '#333';
loaderAnimation.style.width = '50px';
loaderAnimation.style.height = '50px';
loaderContainer.appendChild(loaderAnimation);

let loadingProgress = 0;

function updateLoadingProgress(progress) {
  loadingProgress = progress;
}

function removeLoader() {
  loaderContainer.remove();
}

setTimeout(removeLoader, 5000);

function animate() {
  requestAnimationFrame(animate);

  loaderAnimation.style.transform = `translate(-50%, -50%) rotate(${loadingProgress * 360}deg)`;

}

animate();

  return component;
}

export default Preload;

