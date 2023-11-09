import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(5,5,5);
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
    dlLight.position.set(2,2,0);
    dlLight.target.position.set(0,0,0);
    scene.add(dlLight);
    dlLight.castShadow = true;
    // 해상도
    dlLight.shadow.mapSize.width = 1024;
    dlLight.shadow.mapSize.height = 1024;
    // 블러
    dlLight.shadow.radius = 5;


    // 텍스쳐
    const loader = new THREE.TextureLoader();
    const basecolor = loader.load("../common/textures/bark/Bark_06_basecolor.jpg");
    const normal = loader.load("../common/textures/bark/Bark_06_normal.jpg");
    const roughness = loader.load("../common/textures/bark/Bark_06_roughness.jpg");
    const height = loader.load("../common/textures/bark/Bark_06_height.png");


    // 도형
    const geo = new THREE.SphereGeometry(1);
    const meterial = new THREE.MeshStandardMaterial({
        map : basecolor,
        normalMap : normal,
        // normalScale : new THREE.Vector2(0,0),
        roughness : 0.4,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.5
    });

    const cube = new THREE.Mesh(geo, meterial);
    cube.position.set(0,1,0);
    scene.add(cube);
    cube.castShadow = true;

    const geo2 = new THREE.PlaneGeometry(10,10);
    const meterial2 = new THREE.MeshStandardMaterial({
        color: 0x81a8f7,
        side : THREE.DoubleSide
    })
    const plane = new THREE.Mesh(geo2, meterial2);
    plane.rotation.x = Math.PI/2;
    plane.position.y = -1;
    scene.add(plane);
    plane.receiveShadow = true;

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