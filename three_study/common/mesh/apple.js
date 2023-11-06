import * as THREE from "three";

export default function printApple(){
    const apple_obj = new THREE.Group();

    // 사과 몸통
    const apple_meterial = new THREE.MeshStandardMaterial({
        color : 0xe63946
    });
    const apple_geo = new THREE.SphereGeometry(1.2, 64, 32);
    const apple = new THREE.Mesh(apple_geo, apple_meterial);
    apple_obj.add(apple);
    // 나무
    const wood_meterial = new THREE.MeshStandardMaterial({
        color : 0x99582a
    });
    const wood_geo = new THREE.CylinderGeometry(0.15,0.1,0.5,13);
    const wood = new THREE.Mesh(wood_geo, wood_meterial);
    apple_obj.add(wood);
    wood.position.set(0,1.4,0);
    // 나뭇잎
    const leaf_meterial = new THREE.MeshStandardMaterial({
        color : 0xa7c957,
        side : THREE.DoubleSide
    });
    const leaf_geo = new THREE.SphereGeometry(0.6,32,16,0,Math.PI/3);
    const leaf = new THREE.Mesh(leaf_geo, leaf_meterial);
    apple_obj.add(leaf);
    leaf.position.set(0.25,1,-0.6);
    leaf.rotation.x = THREE.MathUtils.degToRad(50);
    leaf.rotation.y = THREE.MathUtils.degToRad(230);
    leaf.rotation.z = THREE.MathUtils.degToRad(-30);

    // scene.add(apple_obj);
    return apple_obj;
}