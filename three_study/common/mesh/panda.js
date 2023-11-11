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

    // head
    const panda_head_geo = new THREE.SphereGeometry(1, 64, 32);

    const panda_head = new THREE.Mesh(panda_head_geo, panda_material);
    panda_head.scale.x = 1.2;
    panda_head.scale.y = 1.1;
    panda_head.scale.z = 1.2;
    // panda.add(panda_head);

    const panda_head_geo2 = new THREE.SphereGeometry(1, 16, 8);

    const panda_head2 = new THREE.Mesh(panda_head_geo2, panda_material);
    panda_head2.position.set(0,0,0)
    panda_head2.rotation.x = Math.PI/2;
    panda_head2.scale.z = 1.1;
    // panda.add(panda_head2);


    const panda_ear_material = new THREE.MeshStandardMaterial({
        color : 0x00000,
        normalMap : normal,
        roughness : 1.2,
        roughnessMap : roughness,
        displacementMap : height,
        displacementScale : 0
    });    


  

    return panda;
}