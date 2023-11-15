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

    const eyes_pur_obj1_1 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj1_1.position.set(0.4,0.3,1.18);
    eyes_pur_obj1_1.scale.y = 2;
    eyes_pur_obj1_1.rotation.y = THREE.MathUtils.degToRad(50);
    eyes_pur_obj1_1.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj1_1);

    const eyes_pur_obj1_2 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj1_2.position.set(0.44,0.25,1.18);
    eyes_pur_obj1_2.scale.y = 2;
    eyes_pur_obj1_2.rotation.y = THREE.MathUtils.degToRad(50);
    eyes_pur_obj1_2.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj1_2);

    const eyes_pur_obj1_3 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj1_3.position.set(0.48,0.25,1.18);
    eyes_pur_obj1_3.scale.y = 1.5;
    eyes_pur_obj1_3.rotation.y = THREE.MathUtils.degToRad(100);
    eyes_pur_obj1_3.rotation.z = THREE.MathUtils.degToRad(-20); 
    eyes_pur.add(eyes_pur_obj1_3);

    const eyes_pur_obj1_4 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj1_4.position.set(0.42,0.4,1.1);
    eyes_pur_obj1_4.scale.y = 1.5;
    eyes_pur_obj1_4.rotation.y = THREE.MathUtils.degToRad(15);
    eyes_pur_obj1_4.rotation.z = THREE.MathUtils.degToRad(-10); 
    eyes_pur.add(eyes_pur_obj1_4);

    eyes_pur.position.set(-0.08,0.0,0.29);
    eyes_pur.rotation.x = THREE.MathUtils.degToRad(25);
    eyes_pur.rotation.y = THREE.MathUtils.degToRad(70);
    eyes_pur.rotation.z = THREE.MathUtils.degToRad(3);
    panda.add(eyes_pur);


    const eyes_pur2 = new THREE.Group();

    const eyes_pur_obj2_1 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_1.position.set(1.16,0.3,0.38);
    eyes_pur_obj2_1.scale.y = 2;
    eyes_pur_obj2_1.rotation.x = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_1.rotation.y = THREE.MathUtils.degToRad(130);
    eyes_pur_obj2_1.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_1);
    
    const eyes_pur_obj2_2 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_2.position.set(1.13,0.3,0.38);
    eyes_pur_obj2_2.scale.y = 2;
    eyes_pur_obj2_2.rotation.x = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_2.rotation.y = THREE.MathUtils.degToRad(130);
    eyes_pur_obj2_2.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_2);

    const eyes_pur_obj2_3 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_3.position.set(1.15,0.25,0.41);
    eyes_pur_obj2_3.scale.y = 2;
    eyes_pur_obj2_3.rotation.x = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_3.rotation.y = THREE.MathUtils.degToRad(140);
    eyes_pur_obj2_3.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_3);

    const eyes_pur_obj2_4 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_4.position.set(1.16,0.25,0.45);
    eyes_pur_obj2_4.scale.y = 1.5;
    eyes_pur_obj2_4.rotation.x = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_4.rotation.y = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_4.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_4);

    const eyes_pur_obj2_5 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_5.position.set(1.165,0.255,0.455);
    eyes_pur_obj2_5.scale.y = 1.5;
    eyes_pur_obj2_5.rotation.x = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_5.rotation.y = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_5.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_5);

    const eyes_pur_obj2_6 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_6.position.set(1.12,0.4,0.46);
    eyes_pur_obj2_6.scale.y = 1.5;
    eyes_pur_obj2_6.rotation.x = THREE.MathUtils.degToRad(185);
    eyes_pur_obj2_6.rotation.y = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_6.rotation.z = THREE.MathUtils.degToRad(20); 
    eyes_pur2.add(eyes_pur_obj2_6);

    const eyes_pur_obj2_7 = new THREE.Mesh(eyes_pur_geo, panda_eyes_pur_material);
    eyes_pur_obj2_7.position.set(1.1,0.39,0.35);
    eyes_pur_obj2_7.scale.y = 1.5;
    eyes_pur.rotation.reorder('YXZ');
    eyes_pur_obj2_7.rotation.x = THREE.MathUtils.degToRad(30);
    eyes_pur_obj2_7.rotation.y = THREE.MathUtils.degToRad(180);
    eyes_pur_obj2_7.rotation.z = THREE.MathUtils.degToRad(-10); 
    eyes_pur2.add(eyes_pur_obj2_7);

    eyes_pur2.position.set(0.29,-0.1,0);
    eyes_pur2.rotation.reorder('YXZ');
    eyes_pur2.rotation.x = THREE.MathUtils.degToRad(-30);
    eyes_pur2.rotation.y = THREE.MathUtils.degToRad(-70);
    eyes_pur2.rotation.z = THREE.MathUtils.degToRad(-5);
    panda.add(eyes_pur2);


    const eye_geo = new THREE.SphereGeometry(0.1,64,32);
    const eye_material = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2 
    });


    const eye1 = new THREE.Mesh(eye_geo, eye_material);
    eye1.position.set(0.54,0.4,1.26);
    panda.add(eye1);

    const eye2 = new THREE.Mesh(eye_geo, eye_material);
    eye2.position.set(1.23,0.4,0.53);
    panda.add(eye2);

    const axesHelper2 = new THREE.AxesHelper(3);
    // eyes_pur_obj2_7.add(axesHelper2);

    // const axesHelper1 = new THREE.AxesHelper(3);
    // panda.add(axesHelper1);

    return panda;
}