import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js"

if(WebGL.isWebGLAvailable()){
    
    const $result= document.getElementById('result');


    // 1. scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    
    
    // 2. camera
    const camera = new THREE.PerspectiveCamera(50, $result.clientWidth/$result.clientHeight, 0.1, 1000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0 , 0);


    // 3.renderer
    const renderer = new THREE.WebGLRenderer({canvas: $result, antialias: true});
    renderer.setSize($result.clientWidth, $result.clientHeight);
    // console.log(renderer);
    // document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 4, 3);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const meterial = new THREE.MeshStandardMaterial({
        color: 0x2e6ff2
    });
    const box = new THREE.Mesh(geometry,meterial);
    scene.add(box);


    renderer.render(scene, camera);






}else{
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}

