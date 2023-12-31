import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";
import {OrbitControls} from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){
    
    // const $result= document.getElementById('result');


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
    // console.log(renderer);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 4, 3);
    scene.add(light);


    // 스텐다드
    const material_standard = new THREE.MeshStandardMaterial({
        color: 0x2e6ff2,
        // wireframe: true,
        // transparent: true,
        // opacity: 0.5,
        roughness: 0.2,
        metalness: 0.6,
        // map:,
        // side: THREE.FrontSide
    });

    // 베이직
    const material_basic = new THREE.MeshBasicMaterial({
        color: 0x2e6ff2
    });

    // 피지컬
    const material_physical = new THREE.MeshPhysicalMaterial({
        color: 0x2e6ff2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2
    });

    // 퐁
    const material_phong = new THREE.MeshPhongMaterial({
        color: 0x2e6ff2,
        shininess: 100,
        specular: 0xffaaaa
    });

    const geo1 = new THREE.BoxGeometry(1,1,1);
    const obj1 = new THREE.Mesh(geo1, material_standard); 
    scene.add(obj1);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 애니메이션
    function animate(){
        // box.rotation.y += 0.01;
        // box.rotation.z += 0.01;
        // box.rotation.x += 0.01;
        // console.log(box.rotation.y);
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

