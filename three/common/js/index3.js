import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if(WebGL.isWebGLAvailable()){
  const $result = document.getElementById('result');

  //1. Scene: 화면에서 보여주려는 객체를 담는 공간
  const scene = new THREE.Scene();
  //scene.add(요소);
  scene.background = new THREE.Color(0xbbd0ff);
  
  //2. Camera: Scene을 바라볼 시점을 결정
  const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 1000);
  camera.position.set(2,2,2);
  camera.lookAt(0,0,0);
  
  //3. Renderer: Scene+Camera, 화면을 그려주는 역할
  const renderer = new THREE.WebGLRenderer({
      canvas: $result, antialias: true
  });
  renderer.setSize($result.clientWidth, $result.clientHeight);
  //console.log(renderer);
  // document.body.appendChild(renderer.domElement);
  
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(2,4,3);
  scene.add(light);
  
  const geometry = new THREE.BoxGeometry(1,1,1);
  const meterial = new THREE.MeshStandardMaterial({
      color : 0xffd6ff
  });
  const box = new THREE.Mesh(geometry, meterial);
  scene.add(box);
  renderer.render(scene, camera);
}else{
  const warning = WebGL.getWebGLErrorMessage();
  const canvas_box = document.getElementById('result');

  canvas_box.remove();
  document.getElementById("container").appendChild(warning);
}