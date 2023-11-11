import * as THREE from "three";

export default function printPanda(){

    const panda = new THREE.Group();

    // texture
    const loader = new THREE.TextureLoader();
    const basecolor = loader.load("../common/textures/animal/Abstract_Organic_basecolor.jpg");
    const normal = loader.load("../common/textures/animal/Abstract_Organic_normal.jpg");
    const roughness = loader.load("../common/textures/animal/Abstract_Organic_roughness.jpg");
    const height = loader.load("../common/textures/animal/Abstract_Organic_height.png");
    
    // material
    const panda_material = new THREE.MeshStandardMaterial({
        color : 0xffffff,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.3
    });
    const panda_material2 = new THREE.MeshStandardMaterial({
        color : 0x00000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.6
    });
    const panda_ear_material = new THREE.MeshStandardMaterial({
        color : 0x00000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0
    });
    const panda_eyes_pur_material = new THREE.MeshStandardMaterial({
        color : 0x00000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.15
    });

    const panda_eyes_pur_material2 = new THREE.MeshStandardMaterial({
        color : 0xff0000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.1
    });

    // head
    const panda_head_geo = new THREE.SphereGeometry(1, 64, 32);

    const panda_head = new THREE.Mesh(panda_head_geo, panda_material);
    panda_head.scale.x = 1.2;
    panda_head.scale.y = 1.1;
    panda_head.scale.z = 1.2;
    panda.add(panda_head);

    const panda_head_geo2 = new THREE.SphereGeometry(1, 16, 8);

    const panda_head2 = new THREE.Mesh(panda_head_geo2, panda_material);
    panda_head2.position.set(0,0,0)
    panda_head2.rotation.x = Math.PI/2;
    panda_head2.scale.z = 1.1;
    panda.add(panda_head2);

    // ear
    const panda_ear_geo = new THREE.CylinderGeometry(0.3,0.3,0.1,24);
    const panda_ear = new THREE.Mesh(panda_ear_geo, panda_ear_material);
    panda_ear.position.set(-0.6,1.3,0.6);
    panda_ear.rotation.x = THREE.MathUtils.degToRad(100);
    panda_ear.rotation.y = THREE.MathUtils.degToRad(10);
    panda_ear.rotation.z = THREE.MathUtils.degToRad(-45);
    panda_ear.scale.x = 1.2;
    panda.add(panda_ear);

    const panda_ear2 = new THREE.Mesh(panda_ear_geo, panda_ear_material);
    panda_ear2.position.set(0.6,1.3,-0.6);
    panda_ear2.rotation.x = THREE.MathUtils.degToRad(-100);
    panda_ear2.rotation.y = THREE.MathUtils.degToRad(10);
    panda_ear2.rotation.z = THREE.MathUtils.degToRad(45);
    panda_ear2.scale.x = 1.2;
    panda.add(panda_ear2);

    // mouse
    const mouse_geo = new THREE.TetrahedronGeometry(0.4,7);
    const mouse = new THREE.Mesh(mouse_geo,panda_material);
    mouse.position.set(0.8,0,0.8);
    mouse.scale.x = 1.3;
    mouse.rotation.y = THREE.MathUtils.degToRad(-45);
    mouse.rotation.z = THREE.MathUtils.degToRad(-10);
    panda.add(mouse);

    // nose
    const nose_loader = new THREE.TextureLoader();
    const nose_normal = nose_loader.load("../common/textures/nose/nose_normal.jpg");
    const nose_height = nose_loader.load("../common/textures/nose/nose_diplay.jpg");
    
    const nose_material = new THREE.MeshStandardMaterial({
        color : 0x000000,
        normalMap : nose_normal,
        roughness : 0.4,
        displacementMap : nose_height,
        displacementScale : 0.4
    });

    const nose_geo = new THREE.ConeGeometry(0.3,0.04,5);
    const nose = new THREE.Mesh(nose_geo,nose_material);
    nose.position.set(1.317,0,1.317);
    nose.scale.set(1,1,0.4);
    nose.rotation.x = THREE.MathUtils.degToRad(90);
    nose.rotation.z = THREE.MathUtils.degToRad(-45);
    panda.add(nose);

    const nose_geo2 = new THREE.CylinderGeometry(0.3, 0.3, 0.1,5);
    const nose2 = new THREE.Mesh(nose_geo2,nose_material);
    nose2.position.set(1.268,0,1.268);
    nose2.scale.set(1,1,0.4);
    nose2.rotation.x = THREE.MathUtils.degToRad(90);
    nose2.rotation.z = THREE.MathUtils.degToRad(-45);
    panda.add(nose2);

    // eyes

    const eyes_pur = new THREE.Group();

    const eyes_pur_geo = new THREE.SphereGeometry(0.1, 32, 16, 0, Math.PI/2);
    const eyes_pur_obj = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj.position.set(0.3,0.3,1.2);
    eyes_pur_obj.scale.y = 2;
    eyes_pur_obj.scale.x = 1;
    eyes_pur_obj.rotation.y = THREE.MathUtils.degToRad(50);
    eyes_pur_obj.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj);

    const eyes_pur_obj2 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2.position.set(0.4,0.3,1.18);
    eyes_pur_obj2.scale.y = 2;
    eyes_pur_obj2.rotation.y = THREE.MathUtils.degToRad(50);
    eyes_pur_obj2.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj2);

    const eyes_pur_obj3 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj3.position.set(0.44,0.25,1.18);
    eyes_pur_obj3.scale.y = 2;
    eyes_pur_obj3.rotation.y = THREE.MathUtils.degToRad(50);
    eyes_pur_obj3.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj3);

    const eyes_pur_obj4 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj4.position.set(0.48,0.25,1.18);
    eyes_pur_obj4.scale.y = 1.5;
    eyes_pur_obj4.rotation.y = THREE.MathUtils.degToRad(100);
    eyes_pur_obj4.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj4);

    panda.add(eyes_pur);

    const eyes_pur_geo2 = new THREE.SphereGeometry(0.1, 32, 16, 0, Math.PI/2, 0, Math.PI/3);
    const eyes_pur_obj5 = new THREE.Mesh(eyes_pur_geo2, panda_eyes_pur_material2);
    eyes_pur_obj5.position.set(0.2,0.4,1.235);
    eyes_pur_obj5.scale.y = 3;
    eyes_pur_obj5.scale.x = 2.5;
    eyes_pur_obj5.rotation.reorder('YZX');
    eyes_pur_obj5.rotation.y = THREE.MathUtils.degToRad(-5); 
    eyes_pur_obj5.rotation.z = THREE.MathUtils.degToRad(-180);
    eyes_pur_obj5.rotation.x = THREE.MathUtils.degToRad(10);


    // const axesHelper2 = new THREE.AxesHelper(3);
    // eyes_pur4.add(axesHelper2);

    // const axesHelper1 = new THREE.AxesHelper(3);
    // panda.add(axesHelper1);

    return panda;
}