import * as THREE from "three";

export default function printPanda(){

    const panda_body_group = new THREE.Group();

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
        color : 0x000000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.3
    });

    const red = new THREE.MeshStandardMaterial({
        color : 0xff0000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0.3
    });


    // body
    const body_geo = new THREE.SphereGeometry(2.22,64,32,0,Math.PI*2,0,Math.PI/2.5);
    const body_geo2 = new THREE.SphereGeometry(2.2,64,32);


    const body = new THREE.Mesh(body_geo, panda_material2);
    body.position.set(0,0,0);
    body.scale.set(0.9,1,0.9);
    // panda_body_group.add(body);

    const body2 = new THREE.Mesh(body_geo2, panda_material);
    body2.position.set(0,0,0);
    body2.scale.set(0.9,1,0.9);
    panda_body_group.add(body2);





    const neck_geo = new THREE.CylinderGeometry(0.6,1.45,3, 48);
    const neck = new THREE.Mesh(neck_geo, panda_material2);
    neck.position.set(0.3,2.2,0.3);
    neck.rotation.x = THREE.MathUtils.degToRad(15); 
    neck.rotation.z = THREE.MathUtils.degToRad(-15); 
    panda_body_group.add(neck);


    //arm
    const arm = new THREE.Group();

    const arm_geo = new THREE.TorusGeometry(2.2, 0.4, 16, 8, Math.PI/3); 
    const arm_part = new THREE.Mesh(arm_geo, panda_material2);
    arm_part.position.set(0.6,2.3,3);
    arm_part.rotation.reorder('XZY')
    arm_part.rotation.x = THREE.MathUtils.degToRad(90);
    arm_part.rotation.y = THREE.MathUtils.degToRad(-90);
    arm_part.rotation.z = THREE.MathUtils.degToRad(130);
    arm.add(arm_part);







    const hand_geo = new THREE.SphereGeometry(0.4);
    const hand = new THREE.Mesh(hand_geo,panda_material2);
    hand.position.set(0.6,0.13,3);
    arm.add(hand);

    const hand2 = new THREE.Mesh(hand_geo,panda_material2);
    hand2.position.set(-0.9,1.32,1.8);
    arm.add(hand2);

    arm.position.set(0,-1,0.4);
    arm.rotation.x = THREE.MathUtils.degToRad(-20)
    arm.rotation.y = THREE.MathUtils.degToRad(-5)
    panda_body_group.add(arm);


    const eyes_pur_geo = new THREE.SphereGeometry(0.4, 32, 16, 0, Math.PI/2);

    // const eyes_pur_obj1_1 = new THREE.Mesh(eyes_pur_geo, panda_material2);
    // eyes_pur_obj1_1.position.set(-0.45,1.8,1.51);
    // eyes_pur_obj1_1.scale.set(1.5,1.5,1);
    // eyes_pur_obj1_1.rotation.reorder('YZX');
    // eyes_pur_obj1_1.rotation.x = THREE.MathUtils.degToRad(20);
    // eyes_pur_obj1_1.rotation.y = THREE.MathUtils.degToRad(20);
    // eyes_pur_obj1_1.rotation.z = THREE.MathUtils.degToRad(-40);
    // arm.add(eyes_pur_obj1_1);

    // const eyes_pur_obj1_2 = new THREE.Mesh(eyes_pur_geo, panda_material2);
    // eyes_pur_obj1_2.position.set(-0.9,1.7,1.5);
    // eyes_pur_obj1_2.scale.set(1,1.5,1);
    // eyes_pur_obj1_2.rotation.reorder('YZX');
    // eyes_pur_obj1_2.rotation.x = THREE.MathUtils.degToRad(15);
    // eyes_pur_obj1_2.rotation.z = THREE.MathUtils.degToRad(-20);
    // arm.add(eyes_pur_obj1_2);


    // const eyes_pur_obj1_3 = new THREE.Mesh(eyes_pur_geo, panda_material2);
    // eyes_pur_obj1_3.position.set(-1,1.87,1.5);
    // eyes_pur_obj1_3.scale.set(1,1.5,1);
    // eyes_pur_obj1_3.rotation.reorder('YZX');
    // eyes_pur_obj1_3.rotation.z = THREE.MathUtils.degToRad(-20);
    // arm.add(eyes_pur_obj1_3);

    // const eyes_pur_obj1_4 = new THREE.Mesh(eyes_pur_geo, panda_material2);
    // eyes_pur_obj1_4.position.set(-1.2,2.3,1.18);
    // eyes_pur_obj1_4.scale.set(1,1.6,1);
    // eyes_pur_obj1_4.rotation.reorder('YZX');
    // eyes_pur_obj1_4.rotation.x = THREE.MathUtils.degToRad(-30);
    // eyes_pur_obj1_4.rotation.z = THREE.MathUtils.degToRad(-20);
    // arm.add(eyes_pur_obj1_4);



    const axesHelper2 = new THREE.AxesHelper(4);
    // arm_part2.add(axesHelper2);





    // const axesHelper1 = new THREE.AxesHelper(3);
    // panda.add(axesHelper1);

    return panda_body_group;
}