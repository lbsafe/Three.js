import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js"

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

    const meterial = new THREE.MeshStandardMaterial({
        color: 0x2e6ff2
    });

    // 육면체
    const geo1 = new THREE.BoxGeometry(1,1,1);
    const obj1 = new THREE.Mesh(geo1, meterial); 
    // scene.add(obj1);

    // 원뿔
    const geo2 = new THREE.ConeGeometry(0.5,1,20);
    const obj2 = new THREE.Mesh(geo2, meterial);
    // scene.add(obj2);

    // 원기동
    const geo3 = new THREE.CylinderGeometry(0.5,0.7,1);
    const obj3 = new THREE.Mesh(geo3, meterial);
    // scene.add(obj3);

    // 구
    const geo4 = new THREE.SphereGeometry(1);
    const obj4 = new THREE.Mesh(geo4, meterial);
    // scene.add(obj4);

    // 평면
    const geo5 = new THREE.PlaneGeometry(1,1);
    const obj5 = new THREE.Mesh(geo5, meterial);
    // scene.add(obj5);

    // 원
    const geo6 = new THREE.CircleGeometry(1,32);
    const obj6 = new THREE.Mesh(geo6, meterial);
    // scene.add(obj6);

    // 튜브
    const geo7 = new THREE.TorusGeometry(0.5,0.1);
    const obj7 = new THREE.Mesh(geo7, meterial);
    scene.add(obj7)

    // 애니메이션
    function animate(){
        // box.rotation.y += 0.01;
        // box.rotation.z += 0.01;
        // box.rotation.x += 0.01;
        // console.log(box.rotation.y);
        renderer.render(scene, camera);
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

