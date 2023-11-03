import * as THREE from "three";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

if(WebGL.isWebGLAvailable()){

    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1faee);

    // camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(5,1,0);
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
    // const apple_meterial = new THREE.MeshStandardMaterial({
    //     color : 0xe63946
    // });
    // const apple_geo = new THREE.SphereGeometry(1.2, 64, 32);
    // const apple = new THREE.Mesh(apple_geo, apple_meterial);
    // scene.add(apple);
    // // 나무
    // const wood_meterial = new THREE.MeshStandardMaterial({
    //     color : 0x99582a
    // });
    // const wood_geo = new THREE.CylinderGeometry(0.15,0.1,0.5,13);
    // const wood = new THREE.Mesh(wood_geo, wood_meterial);
    // scene.add(wood);
    // wood.position.set(0,1.4,0);
    // // 나뭇잎
    // const leaf_meterial = new THREE.MeshStandardMaterial({
    //     color : 0xa7c957,
    //     side : THREE.DoubleSide
    // });
    // const leaf_geo = new THREE.SphereGeometry(0.6,32,16,0,Math.PI/3);
    // const leaf = new THREE.Mesh(leaf_geo, leaf_meterial);
    // scene.add(leaf);
    // leaf.position.set(0.25,1,-0.6);
    // leaf.rotation.x = THREE.MathUtils.degToRad(50);
    // leaf.rotation.y = THREE.MathUtils.degToRad(230);
    // leaf.rotation.z = THREE.MathUtils.degToRad(-30);
    // --------------------사과 fin--------------------//

    // --------------------대나무--------------------//

    const bamboo = new THREE.Group();

    const bamboo_meterial = new THREE.MeshStandardMaterial({
        color : 0x6a994e
    });

    // bamboo1
    const bamboo_geo1 = new THREE.CylinderGeometry(0.2,0.23,1,32);
    const bamboo1 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo1.position.set(0,0,0);
    bamboo.add(bamboo1);

    // bamboo2
    const bamboo_geo2 = new THREE.CylinderGeometry(0.23,0.2,1,32);
    const bamboo2 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo2.position.set(0,1,0);
    bamboo.add(bamboo2);

    // bamboo3
    const bamboo3 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo3.position.set(0,2,0);
    bamboo.add(bamboo3);

    // bamboo4
    const bamboo4 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo4.position.set(0,3,0);
    bamboo.add(bamboo4);

    // bamboo5
    const bamboo5 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo5.position.set(0,4,0);
    bamboo.add(bamboo5);

    // bamboo6
    const bamboo6 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo6.position.set(0,5,0);
    bamboo.add(bamboo6);

    // bamboo stem
    const bamboo_meterial2 = new THREE.MeshStandardMaterial({
        color : 0xdde5b6
    });
    const bamboo_stem = new THREE.CylinderGeometry(0.24,0.24,0.05,32);
    
    const bamboo_stem1 = new THREE.Mesh(bamboo_stem, bamboo_meterial2);
    bamboo_stem1.position.set(0,1.5,0);
    bamboo.add(bamboo_stem1);
    
    const bamboo_stem2 = new THREE.Mesh(bamboo_stem, bamboo_meterial2);
    bamboo_stem2.position.set(0,3.5,0);
    bamboo.add(bamboo_stem2);


    // bamboo leaf
    const bamboo_meterial3 = new THREE.MeshStandardMaterial({
        color : 0x90a955
    });
    const bamboo_branch = new THREE.CylinderGeometry(0.02,0.02,0.5,8);

    const bamboo_branch1 = new THREE.Mesh(bamboo_branch, bamboo_meterial3);
    bamboo_branch1.position.set(2,1,0.45);
    bamboo_branch1.rotation.x = THREE.MathUtils.radToDeg(-10);
    bamboo.add(bamboo_branch1);

    const bamboo_branch2 = new THREE.Mesh(bamboo_branch, bamboo_meterial3);
    bamboo_branch2.position.set(2,1,0);
    bamboo_branch2.rotation.x = THREE.MathUtils.radToDeg(10);
    bamboo.add(bamboo_branch2);

    const bamboo_meterial4 = new THREE.MeshStandardMaterial({
        color : 0x007200,
        side : THREE.DoubleSide
    });
    const bamboo_leaf = new THREE.SphereGeometry( 0.3,24,12,0,Math.PI/3); 
    const bamboo_leaf1 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf1.position.set(1.9,0.72,0.85);
    bamboo_leaf1.scale.x = -0.5;
    bamboo_leaf1.scale.z = -0.5;
    // bamboo_leaf1.rotation.reorder('XYZ');
    bamboo_leaf1.rotation.x = Math.PI/2;
    bamboo_leaf1.rotation.y = Math.PI/3;
    bamboo_leaf1.rotation.z = Math.PI/4;
    // bamboo_leaf1.rotation.z =  THREE.MathUtils.radToDeg(90);
    // bamboo_leaf1.rotation.x = THREE.MathUtils.radToDeg(90);
    
    bamboo.add(bamboo_leaf1);
    




    scene.add(bamboo);


    // axesHelper
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);
    const axesHelper1 = new THREE.AxesHelper(1);
    bamboo_leaf1.add(axesHelper1);

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
