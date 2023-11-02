import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){

    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1faee);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(5,5,5);
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
    // 사과 몸통
    const apple_meterial = new THREE.MeshStandardMaterial({
        color : 0xe63946
    });
    const apple_geo = new THREE.SphereGeometry(1.2, 64, 32);
    const apple = new THREE.Mesh(apple_geo, apple_meterial);
    scene.add(apple);
    // 나무
    const wood_meterial = new THREE.MeshStandardMaterial({
        color : 0x99582a
    });
    const wood_geo = new THREE.CylinderGeometry(0.15,0.1,0.5,13);
    const wood = new THREE.Mesh(wood_geo, wood_meterial);
    scene.add(wood);
    wood.position.set(0,1.4,0);
    // 나뭇잎
    const leaf_meterial = new THREE.MeshStandardMaterial({
        color : 0xa7c957,
        side : THREE.DoubleSide
    });
    const leaf_geo = new THREE.SphereGeometry(0.6,32,16,0,Math.PI/3);
    const leaf = new THREE.Mesh(leaf_geo, leaf_meterial);
    scene.add(leaf);
    leaf.position.set(0.25,1,-0.6);
    leaf.rotation.x = THREE.MathUtils.degToRad(50);
    leaf.rotation.y = THREE.MathUtils.degToRad(230);
    leaf.rotation.z = THREE.MathUtils.degToRad(-30);

    // --------------------사과 fin--------------------//


    // axesHelper
    const axesHelper = new THREE.AxesHelper(3);
    // scene.add(axesHelper);
    // leaf.add(axesHelper);

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
