import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

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
    document.body.appendChild(renderer.domElement);

    // ---------- 빛 ----------- //

    // AmbientLight
    const ambientLight = new THREE.AmbientLight(0xfffff,1); 
    // scene.add(ambientLight);

    
    // directionalLight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-2,2,0);
    directionalLight.target.position.set(0,2,0);
    // scene.add(directionalLight);
    const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xff0000);
    // scene.add(dlHelper);
    

    // pointLight
    const pointLight = new THREE.PointLight(0xff0000);
    pointLight.position.set(1,1,0);
    // scene.add(pointLight);
    const plHelper = new THREE.PointLightHelper(pointLight, 1, 0x00ff00);
    // scene.add(plHelper);


    // spotLight
    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 6, 0.5);
    spotLight.position.set(0,2,0);
    // scene.add(spotLight);
    const slHelper = new THREE.SpotLightHelper(spotLight, 0xff0000);
    // scene.add(slHelper);


    // hemisphereLight
    const hemisphereLight = new THREE.HemisphereLight(0xffaaaa, 0x00ff00);
    // scene.add(hemisphereLight);

    
    // rectAreaLight
    RectAreaLightUniformsLib.init(); //메서드 호출
    const rectAreaLight = new THREE.RectAreaLight(0xfffff, 1, 5, 5);
    rectAreaLight.position.set(0,0.1,0);
    rectAreaLight.rotation.x = Math.PI / -2;
    scene.add(rectAreaLight);

    const rlHelper = new RectAreaLightHelper(rectAreaLight, 0xff0000);
    scene.add(rlHelper);

    // ---------- 빛 ----------- //


    // 도형
    const geo = new THREE.SphereGeometry(1);
    const meterial = new THREE.MeshStandardMaterial({
        color : 0x2e6ff2
    });
    const cube = new THREE.Mesh(geo, meterial);
    scene.add(cube);

    const geo2 = new THREE.PlaneGeometry(10,10);
    const meterial2 = new THREE.MeshStandardMaterial({
        color: 0x81a8f7,
        side : THREE.DoubleSide
    })
    const plane = new THREE.Mesh(geo2, meterial2);
    plane.rotation.x = Math.PI/2;
    plane.position.y = -1;
    scene.add(plane);

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