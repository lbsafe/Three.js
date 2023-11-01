import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";


if(WebGL.isWebGLAvailable()){
    
    // 1. scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    
    
    // 2. camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0 , 0);


    // 3.renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 4, 3);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x2e6ff2
    });
    const box = new THREE.Mesh(geometry,material);
    scene.add(box);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    // 조작 설정
    // controls.enableZoom = false;
    // controls.enableRotate = false;
    // controls.enablePan = false;
    // 조작 범위
    // controls.minDistance = 5;
    // controls.maxDistance = 10;
    // controls.maxPolarAngle = Math.PI / 3;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    controls.enableDamping = true;

    function animate(){
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }
    animate();

    // 리사이즈
    window.addEventListener('resize',()=>{
        // 1. 카메라의 종횡비
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix(); // 카메라 업데이트

        // 2. 렌더러의 크기
        renderer.setSize(window.innerWidth, window.innerHeight);
    });



}else{
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}

