import * as THREE from "three";

export default function printApple(){
    const apple_obj = new THREE.Group();

    // 사과 몸통
    const apple_loader = new THREE.TextureLoader();
    const apple_basecolor = apple_loader.load("../common/textures/apple/apple_color.jpg");
    const apple_normal = apple_loader.load("../common/textures/apple/apple_normal.png");
    const apple_roughness = apple_loader.load("../common/textures/apple/apple_roughness.jpg");
    const apple_height = apple_loader.load("../common/textures/apple/apple_height.png");

    const apple_meterial = new THREE.MeshStandardMaterial({
        map : apple_basecolor,
        normalMap : apple_normal,
        roughness : 0.5,
        roughnessMap : apple_roughness,
        displacementMap : apple_height,
        displacementScale : 0.1
    });
    const apple_geo = new THREE.SphereGeometry(1.2, 64, 32);
    const apple = new THREE.Mesh(apple_geo, apple_meterial);
    apple_obj.add(apple);

    // 나무
    const branch_loader = new THREE.TextureLoader();
    const branch_basecolor = branch_loader.load("../common/textures/bark/Bark_06_basecolor.jpg");
    const branch_normal = branch_loader.load("../common/textures/bark/Bark_06_normal.jpg");
    const branch_roughness = branch_loader.load("../common/textures/bark/Bark_06_roughness.jpg");

    const wood_meterial = new THREE.MeshStandardMaterial({
        map : branch_basecolor,
        normalMap : branch_normal,
        roughness : 0.1,
        roughnessMap : branch_roughness,
    });
    const wood_geo = new THREE.CylinderGeometry(0.08,0.06,0.5,13);
    const wood = new THREE.Mesh(wood_geo, wood_meterial);
    apple_obj.add(wood);
    wood.position.set(0,1.4,0);

    // 나뭇잎
    const leaf_loader = new THREE.TextureLoader();
    const leaf_basecolor = leaf_loader.load("../common/textures/apple_leaf/plants.png");

    const leaf_meterial = new THREE.MeshStandardMaterial({
        color : 0xa7c957,
        side : THREE.DoubleSide,
        map : leaf_basecolor,
        transparent : true,
        roughness : 0.6
    });
    const leaf_geo = new THREE.SphereGeometry(0.6,32,16,0,Math.PI/2);
    // const leaf_geo = new THREE.PlaneGeometry(2,1)
    const leaf = new THREE.Mesh(leaf_geo, leaf_meterial);;
    leaf.position.set(0.2,1.1,-0.6);
    leaf.rotation.x = THREE.MathUtils.degToRad(50);
    leaf.rotation.y = THREE.MathUtils.degToRad(230);
    leaf.rotation.z = THREE.MathUtils.degToRad(-30);
    apple_obj.add(leaf)

    // scene.add(apple_obj);
    return apple_obj;
}