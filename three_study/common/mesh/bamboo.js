import * as THREE from "three";

export default function printTree(){
    // --------------------대나무--------------------//
    const bamboo_tree = new THREE.Group();

    /* -----나무 줄기----- */ 
    const bamboo_trunk = new THREE.Group();

    const bamboo_meterial = new THREE.MeshStandardMaterial({
        color : 0x6a994e
    });

    // bamboo1
    const bamboo_geo1 = new THREE.CylinderGeometry(0.2,0.23,1,32);
    const bamboo1 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo1.position.set(0,0,0);
    bamboo_trunk.add(bamboo1);

    // bamboo2
    const bamboo_geo2 = new THREE.CylinderGeometry(0.23,0.2,1,32);
    const bamboo2 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo2.position.set(0,1,0);
    bamboo_trunk.add(bamboo2);

    // bamboo3
    const bamboo3 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo3.position.set(0,2,0);
    bamboo_trunk.add(bamboo3);

    // bamboo4
    const bamboo4 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo4.position.set(0,3,0);
    bamboo_trunk.add(bamboo4);

    // bamboo5
    const bamboo5 = new THREE.Mesh(bamboo_geo1, bamboo_meterial);
    bamboo5.position.set(0,4,0);
    bamboo_trunk.add(bamboo5);

    // bamboo6
    const bamboo6 = new THREE.Mesh(bamboo_geo2, bamboo_meterial);
    bamboo6.position.set(0,5,0);
    bamboo_trunk.add(bamboo6);

    // bamboo stem
    const bamboo_meterial2 = new THREE.MeshStandardMaterial({
        color : 0xdde5b6
    });
    const bamboo_stem = new THREE.CylinderGeometry(0.24,0.24,0.05,32);
    
    const bamboo_stem1 = new THREE.Mesh(bamboo_stem, bamboo_meterial2);
    bamboo_stem1.position.set(0,1.5,0);
    bamboo_trunk.add(bamboo_stem1);
    
    const bamboo_stem2 = new THREE.Mesh(bamboo_stem, bamboo_meterial2);
    bamboo_stem2.position.set(0,3.5,0);
    bamboo_trunk.add(bamboo_stem2);

    /* ----- 나뭇가지 ----- */
    const bamboo_obj = new THREE.Group();

    // bamboo leaf
    const bamboo_meterial3 = new THREE.MeshStandardMaterial({
        color : 0x90a955
    });
    const bamboo_branch = new THREE.CylinderGeometry(0.02,0.02,0.5,8);

    const bamboo_branch1 = new THREE.Mesh(bamboo_branch, bamboo_meterial3);
    bamboo_branch1.position.set(0,1,0.45);
    bamboo_branch1.rotation.x = THREE.MathUtils.radToDeg(-10);
    bamboo_obj.add(bamboo_branch1);

    const bamboo_branch2 = new THREE.Mesh(bamboo_branch, bamboo_meterial3);
    bamboo_branch2.position.set(0,1,0);
    bamboo_branch2.rotation.x = THREE.MathUtils.radToDeg(10);
    bamboo_obj.add(bamboo_branch2);

    const bamboo_meterial4 = new THREE.MeshStandardMaterial({
        color : 0x007200,
        side : THREE.DoubleSide
    });
    const bamboo_leaf = new THREE.SphereGeometry(0.3,24,12,0,Math.PI/3); 
    const bamboo_leaf1 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf1.position.set(-0.1,0.72,0.85);
    bamboo_leaf1.scale.x = -0.5;
    bamboo_leaf1.scale.z = -0.5;
    bamboo_leaf1.rotation.x = Math.PI/2;
    bamboo_leaf1.rotation.y = Math.PI/3;
    bamboo_leaf1.rotation.z = Math.PI/4;
    bamboo_obj.add(bamboo_leaf1);

    const bamboo_leaf2 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf2.position.set(0.15,0.75,0.85);
    bamboo_leaf2.scale.x = -0.5;
    bamboo_leaf2.scale.z = -0.5;    
    bamboo_leaf2.rotation.x = Math.PI/5;
    bamboo_leaf2.rotation.y = Math.PI/-3;
    bamboo_leaf2.rotation.z = Math.PI/2;
    bamboo_obj.add(bamboo_leaf2);

    const bamboo_leaf3 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf3.position.set(0.08,0.85,0.94);
    bamboo_leaf3.scale.x = 0.5;
    bamboo_leaf3.scale.z = 0.5;
    bamboo_leaf3.rotation.reorder('YZX');
    bamboo_leaf3.rotation.y = Math.PI/4;
    bamboo_leaf3.rotation.z = Math.PI/-3;
    bamboo_leaf3.rotation.x = Math.PI/-3;
    bamboo_obj.add(bamboo_leaf3);

    
    /* ---- 나뭇가지 2 ---- */
    const bamboo_obj2 = new THREE.Group();

    const bamboo_branch_2_2 = new THREE.Mesh(bamboo_branch, bamboo_meterial3);
    bamboo_branch_2_2.position.set(0,1,0);
    bamboo_branch_2_2.rotation.x = THREE.MathUtils.radToDeg(10);
    bamboo_obj2.add(bamboo_branch_2_2);

    const bamboo_leaf_2_1 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf_2_1.position.set(-0.1,0.9,0.42);
    bamboo_leaf_2_1.scale.x = -0.5;
    bamboo_leaf_2_1.scale.z = -0.5;
    bamboo_leaf_2_1.rotation.x = Math.PI/2;
    bamboo_leaf_2_1.rotation.y = Math.PI/3;
    bamboo_leaf_2_1.rotation.z = Math.PI/4;
    bamboo_obj2.add(bamboo_leaf_2_1);

    const bamboo_leaf_2_2 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf_2_2.position.set(0.15,0.92,0.42);
    bamboo_leaf_2_2.scale.x = -0.5;
    bamboo_leaf_2_2.scale.z = -0.5;    
    bamboo_leaf_2_2.rotation.x = Math.PI/5;
    bamboo_leaf_2_2.rotation.y = Math.PI/-3;
    bamboo_leaf_2_2.rotation.z = Math.PI/2;
    bamboo_obj2.add(bamboo_leaf_2_2);

    const bamboo_leaf_2_3 = new THREE.Mesh(bamboo_leaf, bamboo_meterial4);
    bamboo_leaf_2_3.position.set(0.08,1,0.48);
    bamboo_leaf_2_3.scale.x = 0.5;
    bamboo_leaf_2_3.scale.z = 0.5;
    bamboo_leaf_2_3.rotation.reorder('YZX');
    bamboo_leaf_2_3.rotation.y = Math.PI/4;
    bamboo_leaf_2_3.rotation.z = Math.PI/-3;
    bamboo_leaf_2_3.rotation.x = Math.PI/-3;
    bamboo_obj2.add(bamboo_leaf_2_3);

    bamboo_obj.position.set(0,0.6,0.4);
    bamboo_obj2.rotation.y = Math.PI/2;
    bamboo_obj2.position.set(0.4,2.6,0);

    bamboo_tree.add(bamboo_trunk, bamboo_obj, bamboo_obj2);

    // scene.add(bamboo_tree);
    return bamboo_tree;
}