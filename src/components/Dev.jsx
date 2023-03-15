import * as THREE from 'three';
import * as ThreeMeshUI from "three-mesh-ui";
import FontJSON from '../fonts/MSDF/Roboto-msdf.json';
import FontImage from '../fonts/MSDF/Roboto-msdf.png';

function Dev() {
  const component = new THREE.Object3D();

const fontName = 'Roboto';

const containerText = new ThreeMeshUI.Block({
 width: 1.2,
 height: 0.7,
 padding: 0.2,
 borderRadius: 0.08,
 fontFamily: fontName,
 fontTexture: fontName,
});
containerText.position.set( 0, 0, 0 );
//

const text = new ThreeMeshUI.Text({
 content: "Some text to be displayed"
});

containerText.add( text );

component.add( containerText );

ThreeMeshUI.update();


  return component;
}

export default Dev;
