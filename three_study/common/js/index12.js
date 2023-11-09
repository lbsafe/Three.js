import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import printApple from "../mesh/apple.js"
import printTree from "../mesh/bamboo.js";

if(WebGL.isWebGLAvailable()){
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(7,7,7);
    camera.lookAt(0,0,0);

    // randerer
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // 빛
    const dlLight = new THREE.DirectionalLight(0xffffff, 1);
    dlLight.position.set(3,4,5);
    dlLight.target.position.set(0,0,0);
    scene.add(dlLight);
    dlLight.castShadow = true;

    /* 사과 */
    const apple = printApple();
    apple.position.set(1.5,0,-2);
    apple.scale.set(0.5,0.5,0.5);
    scene.add(apple);

    /* 대나무 */
    const bamboo = printTree();
    scene.add(bamboo);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // animation
    function animate(){
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }
    animate();

    // resize
    window.addEventListener('resize', ()=> {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

}else{
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}