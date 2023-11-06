import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import printTree from "../mesh/bamboo.js";
import printApple from "../mesh/apple.js";

if(WebGL.isWebGLAvailable()){

    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1faee);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(10,12,10);
    camera.lookAt(0,0,0);

    // randerer
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //  light
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(4, 6, 3);
    scene.add(light);

    // --------------------사과--------------------//
    const apple_obj1 = printApple();
    apple_obj1.position.set(3,0,-3);
    apple_obj1.scale.set(0.5,0.5,0.5);
    scene.add(apple_obj1);
    // --------------------사과 fin--------------------//

    // --------------------대나무--------------------//
    const bamboo_tree1 = printTree();
    const bamboo_tree2 = printTree();
    bamboo_tree2.position.set(1,0,-1);
    bamboo_tree2.rotation.y = Math.PI/3;
    scene.add(bamboo_tree1, bamboo_tree2);
// --------------------fin--------------------//


    // axesHelper
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);

    // orbitcontrols
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // animation
    function animate(){
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }
    animate();


    // reszie
    window.addEventListener('resize', ()=>{
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });



}else{
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}
