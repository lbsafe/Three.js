import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(3,3,3);
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
    // scene.add(dlLight);
    dlLight.castShadow = true;

    const amLight = new THREE.AmbientLight(0xffffff);

    scene.add(amLight);

    // 텍스쳐
    const loader = new THREE.TextureLoader();
    const basecolor = loader.load("../common/textures/bark/Bark_06_basecolor.jpg");
    const normal = loader.load("../common/textures/bark/Bark_06_normal.jpg");
    const roughness = loader.load("../common/textures/bark/Bark_06_roughness.jpg");
    const height = loader.load("../common/textures/bark/Bark_06_height.png");


    // 도형
    const geo = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({
        color : 0xeeffee
    });

    const materials = [
        new THREE.MeshStandardMaterial({color: 0xccffee}),
        new THREE.MeshStandardMaterial({color: 0x0000ff}),
        new THREE.MeshStandardMaterial({color: 0x00ffaa}),
        new THREE.MeshStandardMaterial({color: 0xff0000}),
        new THREE.MeshStandardMaterial({color: 0xeff00e}),
        new THREE.MeshStandardMaterial({color: 0xee30fe})
    ]


    const box = new THREE.Mesh(geo, materials);
    scene.add(box);

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