import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){
    
    // const $result= document.getElementById('result');


    // 1. scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    
    
    // 2. camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(3, 3, 3);
    camera.lookAt(0, 0 , 0);


    // 3.renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(renderer);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 4, 3);
    scene.add(light);


    const geometry = new THREE.ConeGeometry(0.5, 1, 4);
    const meterial = new THREE.MeshStandardMaterial({
        color: 0x3eff3f
    });
    const mesh = new THREE.Mesh(geometry, meterial);

    scene.add(mesh);

    // 1. 위치
    // mesh.position.x = 2;
    // mesh.position.y = 1;
    // mesh.position.z = 0;
    mesh.position.set(-1,0,0.5);

    // 2. 회전
    // mesh.rotation.y = 300;
    mesh.rotation.y = THREE.MathUtils.degToRad(360);

    // 3. 크기
    mesh.scale.x = -1;
    mesh.scale.y = 1;
    mesh.scale.z = 1.5;

    // axesHelper
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    // 애니메이션
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

