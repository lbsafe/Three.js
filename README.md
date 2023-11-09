# Three.js

<p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/4425315d-3ede-4984-a649-c282447c313d" alt="three" width="300px"></p>

## Three.js 에 대하여
>**Three.js는 웹 브라우저에서 3D 그래픽을 렌더링하는 자바스크립트 라이브러리**이다. WebGL을 기반으로 동작하며 3D 모델링과 렌더링, 애니메이션 등을 구현할 수 있다. 스크롤, 클릭, 키보드 입력 등의 이벤트를 통해 오브젝트와 인터랙션을 표현할 수 있으며, 뿐만 아니라 블렌더, Cinema 4D 등의 3D 모델링 툴을 이용하여 생성한 오브젝트를 import하여 작업을 진행할 수 있다.

**:question: WebGL이란**
* 웹 브라우저 상에 2D 및 3D 그래픽을 표현하기 위한 JavaScript API
* 점, 선, 삼각형을 이용하는 그래픽 엔진으로, 3D 모델을 생성하기 위해서는 상당히 많은 양의 코드가 필요
* Three.js는 WebGL을 보다 쉽게 사용할 수 있도록 다양한 기능을 제공
***

## 설치 및 경로 설정
**:one: NPM 설치 방식**   
1. npm 명령어를 이용하여 Three.js를 설치한다. (node.js 설치 필요)

    ```js
    npm install three
    ```
    1. 특정 버전의 Three.js 설치 방법

        ```js
        npm install three@0.152.2
        ```

    2. Three.js 삭제 방법

        ```js
        npm uninstall three
        ```

2. three.js 모듈을 import 한다.

    ```html
    <script type="module" defer>
        import * as THREE from "./node_modules/three/build/three.module.js";
    </script>
    ```

    **:warning:경로 재정의**
    >Three.js를 불러오기 위해서는 폴더의 경로를 지정해주어야 한다. 하지만 Three.js의 다양한 모듈(controls, loaders 등)을 사용할 때도, 모듈 파일마다 three의 경로를 재정의 해주어야 한다. 그렇지 않으면 three의 위치를 찾지 못해 아래와 같은 오류가 발생하게 된다.   
    -> 오류를 방지하고, 경로를 용이하게 관리하기 위해서 **importmap**을 사용한다.

    <p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/e89e586c-0166-427a-863b-b1d6aacd9b8c" alt="three err" width="100%"></p>

    1. index.html head 내부에 경로에 대한 정보를 json 형식으로 작성

        ```html
        <script type="importmap">
        {
            "imports": {
            "three": "../node_modules/three/build/three.module.js",
            "three/examples/jsm/controls/OrbitControls": "../node_modules/three/examples/jsm/controls/OrbitControls.js",
            }
        }
        </script>
        ```

    2. es-modules-shims 폴리필 추가   
    일부 브라우저에서 importmap 을 지원하기 위하여 폴리필을 추가

        ```html
        <!-- es-modules-shims -->
        <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
        ```

    3. 모듈 경로 수정
        ```html
        // import * as THREE from "../node_modules/three/build/three.module.js"

        import * as THREE from "three";
        ```

**:two: CDN 설치 방식**   
    
* 간단하게 아래의 코드를 index.html의 head 내부에 복사 붙여넣기 하여 Three.js를 불러온다.   
(study 자료 기준 0.152.2 버전을 사용)

    ```html
    <!-- es-modules-shims -->
    <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

    <script type="importmap">
    {
        "imports": {
        "three": "https://unpkg.com/three@<version>/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@<version>/examples/jsm/"
        }
    }
    </script>

    <script type="module">
        import * as THREE from 'three';
        // 이곳에 Three.js 코드를 작성

    </script>
    ```
   
    :link:[Three-version][Three-version] : Three.js 버전 정보

    [Three-version]: https://www.npmjs.com/package/three?activeTab=versions "Three-version"

**:three: 다운로드 방식**  

* Three.js 공식 웹사이트에서 코드를 직접 다운로드 받아 추가 한다.   
build 폴더 내부의 three.module.js 파일을 프로젝트 폴더 내부로 가져온다.

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Document</title>
            <script src="./파일경로/three.module.js"></script>
        </head>
        <body>
            <script type="module" defer>
                import * as THREE from './src/js/three.module.js';
            </script>
        </body>
    </html>
    ```

    :link:[Three-Js][Three-Js] : Three.js 공식 웹사이트

    [Three-Js]: https://threejs.org/ "Three-Js"

***

**:pushpin: three.module.js 만 있으면 될까?**

* Three.js는 'examples/jsm' 에 모듈화된 기능을 제공한다.
* Controls, Loaders와 같은 jsm을 사용하기 위해서는 해당 모듈을 import 해주어야 한다.

```js
// NPM
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
```
```html
// CDN
<script src="https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/controls/OrbitControls.js"></script>
```
```html
// 다운로드
// 해당 파일을 프로젝트 폴더 내로 복사 붙여넣기 후
<script src="./three.js/examples/jsm/controls/OrbitControls.js"></script>
```

***

**:heavy_exclamation_mark: 작업 환경과 WebGL 호환성 검사**

>Three.js는 WebGL을 기반으로 동작하기 때문에, 실행 환경이 WebGL을 지원하지 않는 경우 코드가 올바르게 동작하지 않을 수 있다.

```js
// NPM
import WebGL from '../../node_modules/three/examples/jsm/capabilities/WebGL.js'
```
```js
// CDN
import WebGL from 'three/addons/capabilities/WebGL.js';
```
```js
// 사용법
import * as THREE from 'three'
import WebGL from '<파일 경로>/WebGL.js';

if (WebGL.isWebGLAvailable()) {
  // 실행하려는 Three.js 코드를 작성한다.
  
} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
```
:link:[WebGL][WebGL] : WebGL 지원 브라우저

[WebGL]: https://caniuse.com/?search=WebGL "WebGL"
***

## 기본 구성 요소
**:one: Scene**   
>Three.js의 가장 기본이 되는 객체로, 모든 3D 개체가 배치되는 공간이다.    
화면에 보여질 모든 요소들은 Scene에 추가되어야 한다.

```js
const scene = new THREE.Scene();

// scene.add() 로 요소 추가
scene.add(element);
```

* :pushpin: scene 백그라운드 컬러 추가
    
    ```js
    scene.background = new THREE.Color(0xffe287);
    ```

**:two: Camera**
>Scene을 보는 시점을 정의한다. Three.js에서는 여러 카메라를 제공하며,   
대표적으로 **PerspectiveCamera**와 **OrthographicCamera**를 사용한다.

* **PerspectiveCamera**

    원근감을 적용하여 객체를 투영하는 카메라로, 3D 공간감을 표현

    ```js
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    ```

    * **fov**: 시야각, 커질 수록 화면에  많은 영역을 출력   
        기본값은 50, 사람의 시야와 유사한 45~75 사이 값 사용
    
    * **aspect**: 카메라의 종횡비, 가로와 세로의 비율   
    보통 `window.innerWidth / window.innerHeight` 사용

    * **near, far**: 카메라로 볼 수 있는 최소, 최대의 거리   
    범위 밖은 렌더링 되지 않는다.

* **OrthographicCamera**

    원근감 없이 평면적인 투영을 적용하는 카메라

    ```js
    const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
    ```

    * **left**, **right**, **top**, **bottom**: 카메라가 볼 수 있는 영역의 좌표
    * **near**, **far**: 카메라로 볼 수 있는 최소, 최대 거리

**:three: Renderer**
>Scene과 Camera를 연결하여 실제 화면에 보여지는 이미지를 생성한다. canvas 요소를 생성하며, HTML 문서에 추가한 후, render 메서드를 이용하여 scene과 camera를 연결하여 3D 그래픽을 출력한다.

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 화면 렌더링
renderer.render(scene, camera);
```

* :pushpin: 특정 캔버스 요소에 화면을 렌더링 하기 위해서 렌더러의 속성값으로 해당 캔버스 요소를 전달해야 한다.

    ```js
    <canvas id="canvasBox"></canvas>

    const $canvas = document.getElementById('canvasBox');

    const renderer = new THREE.WebGLRenderer({
        canvas: $canvas, antialias: true
    });
    ```
    * **canvas**: 특정 캔버스를 설정
    * **antialias**: 계단현상 방지

* :pushpin: 캔버스의 스타일 속성을 주어 화면의 크기를 조정할 수 있다. 화면의 깨짐 현상을 방지하고 비율을 유지하기 위하여 카메라와 렌더러의 속성값을 캔버스의 크기에 맞추어 변경해주어야 한다.

    ```js
    // 캔버스 스타일 속성 부여
    <canvas id="canvasBox" style="border: 1px solid red; width: 500px; height: 800px;"></canvas>

    // 카메라 사이즈
    const camera = new THREE.PerspectiveCamera(50, $canvas.clientWidth / $canvas.clientHeight, 0.1, 1000);

    // 렌더러 사이즈
    renderer.setSize($canvas.clientWidth, $canvas.clientHeight);
    ```
***

## 애니메이션

>애니메이션을 사용하기 위해서는 자바스크립트에서 제공하는 **requestAnimationFrame** 을 사용한다.

**:one:** requestAnimationFrame 을 사용할 콜백함수를 선언한다.
    
* 브라우저가 다음 프레임을 렌더링하기 전에 반복적으로 animate를 호출한다.

    ```js
    function animate(){
        requestAnimationFrame(animate);
    }
    animate();
    ```

**:two:** 애니메이션에 필요한 함수는 animate 내부에 작성해준다.

* 동작할 애니메이션 추가
    
    ```js
    function animate(){
        box.rotation.y += 0.01; // y축 기준으로 회전
        console.log(box.rotation.y); // 변하는 값 확인
        requestAnimationFrame(animate);
    }
    animate();
    ```

**:three:** animate 내부에 화면을 출력해주는 렌더링 함수 호출

* animate 함수 내에 랜더링 함수 호출
    
    ```js
    function animate(){
        box.rotation.y += 0.01;
        console.log(box.rotation.y);
        renderer.render(scene, camera); // 화면 출력 함수
        requestAnimationFrame(animate);
    }
    animate();
    ```
***

## 반응형 업데이트

>화면이 리사이즈 되었을 때 카메라의 종횡비와 렌더러의 크기를 업데이트하여 반응형으로 만들어준다.

**:one:** 카메라의 종횡비는 **aspect** 속성을 이용해서 업데이트 할 수 있다.
```js
window.addEventListener('resize',()=>{
    // 1. 카메라의 종횡비
    camera.aspect = window.innerWidth/window.innerHeight; // 카메라 속성 변경
    camera.updateProjectionMatrix(); // 카메라 업데이트
});
```

**:two:** 렌더러의 크기 속성을 변경 해준다.
```js
window.addEventListener('resize',()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    // 2. 렌더러의 크기 변경
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```

**:star: 반응형 업데이트 코드**
```js
// 리사이즈
window.addEventListener('resize',()=>{
    // 1. 카메라의 종횡비
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix(); // 카메라 업데이트

    // 2. 렌더러의 크기
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```
***
## Mesh

> Mesh란? Three.js에서 3차원의 객체 이다.

* Mesh의 기본형태

    ```js
    const box = new THREE.Mesh(geometry, meterial);
    ```
* Mesh의 조작법

    - :pushpin: AxesHelper 을 이용하여 좌표축 추가
        ```js
        const axesHelper = new THREE.AxesHelper(3); // 인자값은 좌표축의 크기
        scene.add(axesHelper);
        ```
        <p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/f74e927e-54ec-42e7-a4d6-88572cf495cc" alt="three" width="200px"></p>
        <p align="center">(X축 = 빨강, Y축 = 초록, Z축 = 파랑)</p>

    1. 위치

        ```js
        mesh.position.x = 2; // x축 이동
        mesh.position.y = 1; // y축 이동
        mesh.position.z = 0; // z축 이동
        mesh.position.set(-1,0,0.5);  // 각 x,y,z 값을 인자로 갖는다.
        ```

    2. 회전

        ```js
        mesh.rotation.reorder('YXZ'); // 축의 회전을 지정해 줄 수 있다. 기본 XYZ
        mesh.rotation.y = 360; // Three.js 회전은 도가 아닌 라디안 값이다.

        // 아래와 같이 MathUtils.degToRad을 이용하여 원하는 각도를 넣어준다.
        mesh.rotation.y = THREE.MathUtils.degToRad(360);
        ```

    3. 크기
        ```js
        mesh.scale.x = -1; // x축 김소
        mesh.scale.y = 1; // y축 기본값
        mesh.scale.z = 1.5; // z축 확대
        ```
***
### :mag: Mesh를 구성하는 2가지 인자

**:one: Geometry - 형태**

* 육면체
    ```js
    const geo1 = new THREE.BoxGeometry(1,1,1);
    // x, y, z의 평행 변의 길이
    const obj1 = new THREE.Mesh(geo1, material); 
    scene.add(obj1);
    ```
* 원뿔
    ```js
    const geo2 = new THREE.ConeGeometry(0.5,1,20);
    // 반지름, 높이, 분할면 갯수(기본 32)
    const obj2 = new THREE.Mesh(geo2, material);
    scene.add(obj2);
    ```
* 원기둥
    ```js
    const geo3 = new THREE.CylinderGeometry(0.5,0.7,1, 10);
    // 윗면 반지름, 아랫면 반지름, 높이, 분할면 갯수
    const obj3 = new THREE.Mesh(geo3, material);
    scene.add(obj3);
    ```
* 구
    ```js
    const geo4 = new THREE.SphereGeometry(1);
    // 반지름
    const obj4 = new THREE.Mesh(geo4, material);
    scene.add(obj4);
    ```
* 평면
    ```js
    const geo5 = new THREE.PlaneGeometry(1,1);
    // 넓이, 높이
    const obj5 = new THREE.Mesh(geo5, material);
    scene.add(obj5);
    ```
* 원
    ```js
    const geo6 = new THREE.CircleGeometry(1,32);
    // 반지름, 분할면 갯수
    const obj6 = new THREE.Mesh(geo6, material);
    scene.add(obj6);
    ```
* 튜브
    ```js
    const geo7 = new THREE.TorusGeometry(0.5,0.1);
    // 중심부분 부터의 반지름, 튜브의 반경
    const obj7 = new THREE.Mesh(geo7, material);
    scene.add(obj7);
    ```
:link:[Three-Geometry][Three-Geometry] : Three.js Geometry 더보기

[Three-Geometry]: https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry "Three-Geometry"

***

**:two: Material - 재질**

* 스텐다드 메테리얼 (MeshStandardMaterial)
    > Unity나 Unreal 등 3D 어플리케이션에서 표준으로 채택하여 사용,   
    물리 기반의 렌더링을 사용하여 빛에 의한 명암이 표현되고 다양한 질감을 나타내기 좋다.
    ```js
    const material_standard = new THREE.MeshStandardMaterial({
        /* 일반적인 속성 */
        color: 0x2e6ff2,
        wireframe: true, // geometry의 형태 확인 가능
        transparent: true, // 투명도
        opacity: 0.5, // 투명도 조절
        roughness: 0.2, // 거칠기
        metalness: 0.7, // 금속성 표현
        map:, // 텍스처 적용
        side: THREE.FrontSide // 렌더링할 면을 결정 FrontSide(앞면-기본), BackSide(뒷면), DoubleSide(양면)
    });
    ```
* 베이직 메테리얼 (MeshBasicMaterial)
    >빛의 영향을 받지 않아서, Mesh의 출력을 확인하는 용도로 주로 쓰인다.
    ```js
    const material_basic = new THREE.MeshBasicMaterial({
        color: 0x2e6ff2
    });
    ```
* 피지컬 메테리얼 (MeshPhysicalMaterial)
    >StandardMaterial의 확장 버전으로 고급 물리 기반의 렌더링을 제공   
    -> 더 많은 물리적 특성 이용 가능
    ```js
    const material_physical = new THREE.MeshPhysicalMaterial({
        /* 피지컬 메테리얼 속성 */
        color: 0x2e6ff2,
        clearcoat: 0.8, // 반투명 레이어 생성
        clearcoatRoughness: 0.2 // 반투명 레이어 강도
    });
    ```
* 퐁 메테리얼 (MeshPhongMaterial)
    > 빛의 반사율 계산 단위로 인해 이름이 만들어짐,   
    -> 광택 있는 표면을 표현 시 사용 (금속, 보석 등)
    ```js
    const material_phong = new THREE.MeshPhongMaterial({
        /* 퐁 메테리얼 속성 */
        color: 0x2e6ff2,
        shininess: 100, // 물체의 광택의 정도 조정
        specular: 0xffaaaa // 물체가 반사하는 빛의 색상 지정 가능
    });
    ```
***

## OrbitControls 조작법
> 마우스를 이용해 카메라를 조작할 수 있는 자바스크립트 모듈

**:one: OrbitControls 모듈을 불러오기**

```js
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
```

**:two: 컨트롤 만들기**

```js
// OrbitControls는 카메라 속성과 렌더러의 돔 요소를 전달해주어야 한다.
const controls = new OrbitControls(camera, renderer.domElement);
```

**:three: 애니메이션 함수 안에 controls 업데이트 시켜주기**

```js
function animate(){
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}
animate();
```

**:star: OrbitControls 사용법**

```js
// 조작 설정
controls.enableZoom = false; // 스크롤 확대 축소 조작여부
controls.enableRotate = false; // 드래그 시 카메라 조작여부
controls.enablePan = false; // 커맨드(ctrl)를 통한 카메라 이동 조작여부

// 조작 범위
controls.minDistance = 5; // 최대 축소 거리
controls.maxDistance = 10; // 최대 확대 거리
controls.maxPolarAngle = Math.PI / 3; // 회전 각도 지정

// 자동 조작
controls.autoRotate = true; // 카메라 자동 회전 여부
controls.autoRotateSpeed = 1; // 자동 회전 속도 - 시 반대로 움직임

// 부드러운 조작
controls.enableDamping = true; // 조작 시 관성이 적용되어 부드러운 움직임 적용
```
***

## 빛 추가

> 여러 빛을 조합해서 다양한 효과를 낼 수 있다.    
AmbientLight를 제외한 빛은 각각의 Helper를 통해 시각화 하여 확인할 수 있다.

**기본 사용법**
```js
const light = new THREE.DirectionalLight(0xffffff); // 빛 추가 및 컬러 지정
light.position.set(4, 6, 3); // 빛의 위치 변경
scene.add(light); // scene에 추가
```

### 빛의 종류

* **AmbientLight**

    - 특징
        - 모든 Mesh를 대상으로 전역적으로 빛을 발산하고 빛에 방향이 없기 때문에 그림자가 생기지 않는다.
        - 객체의 출력이나 재질을 확인할 때 용이하다.

    ```js
    //인자 값 - new THREE.AmbientLight(색상, 강도);
    const ambientLight = new THREE.AmbientLight(0xfffff, 1); 
    scene.add(ambientLight);
    ```

* **DirectionalLight**

    - 특징
        - 햇빛과 같은 방향성 광원, 모든 점에서 일정한 방향으로 광을 발산한다.
        - 빛과 물체 간의 거리에 상관없이 동일한 빛의 효과를 준다.
        - 그림자가 생기며, 기본 위치는 (0, 1, 0)에 생성 된다.

    ```js
    // 인자 값 - new THREE.DirectionalLight(색상, 강도);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-2,2,0);
    directionalLight.target.position.set(0,2,0);
    scene.add(directionalLight);

    // 인자 값 - new THREE.DirectionalLightHelper(적용할 빛, 크기, 색상);
    const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xff0000);
    scene.add(dlHelper);
    ```

* **PointLight**

    - 특징
        - 한 점에서 방출되는 점 광원
        - 전구와 같이 모든 방향으로 빛을 발산한다.

    ```js
    // 인자 값 - new THREE.PointLight(색상, 크기, 빛의 최대 범위);
    const pointLight = new THREE.PointLight(0xff0000, 1, 2);
    pointLight.position.set(1,1,0);
    scene.add(pointLight);
    
    // 인자 값 - THREE.PointLightHelper(적용할 빛, 크기, 색상);
    const plHelper = new THREE.PointLightHelper(pointLight, 1, 0x00ff00);
    scene.add(plHelper);
    ```

* **SpotLight**

    - 특징
        - 한 점에서 원뿔 형태로 빛을 발산한다.
        - 그림자가 생기며, 기본 위치는 (0, 1, 0)에 생성 된다.

    ```js
    // 인자 값 - new THREE.SpotLight(색상, 강도, 거리, 각도, 반음영-흐림효과);
    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 6, 0.5);
    spotLight.position.set(0,2,0);
    scene.add(spotLight);
    
    // 인자 값 - new THREE.SpotLightHelper(적용할 빛, 색상);
    const slHelper = new THREE.SpotLightHelper(spotLight, 0xff0000);
    scene.add(slHelper);

    // slHelper는 크기를 결정하는 매개변수가 없어서 대상을 이동하고 나서 update 메서드를 호출해주어야 한다.
    function animate(){
        slHelper.update();
        requestAnimationFrame(animate);
    }
    animate();
    ```

* **HemisphereLight**

    - 특징
        - skyColor와 groundColor 두 가지 색상을 받아 위아래로 빛을 비춘다.
        - 그림자를 사용할 수 없다.
    
    ```js
    // 인자 값 - new THREE.HemisphereLight(윗 색상, 밑 색상);
    const hemisphereLight = new THREE.HemisphereLight(0xffaaaa, 0x00ff00);
    scene.add(hemisphereLight);
    ```
* **RectAreaLight**
    - 특징
        - 사각형 모양의 광원으로, 평면에 균일하게 빛을 발산한다.
        - 물리기반렌더링(MeshStandardMaterial 또는 MeshPhysicalMaterial)만 지원
        - 모듈을 import 해주어야 한다.

    ```js
    // RectAreaLight 모듈 import
    import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

    // 인자 값 - new THREE.RectAreaLight(색상, 강도, 직사각형 넓이, 직사각형 높이);
    RectAreaLightUniformsLib.init(); //메서드 호출
    const rectAreaLight = new THREE.RectAreaLight(0xfffff, 1, 5, 5);
    rectAreaLight.position.set(0,0.1,0);
    rectAreaLight.rotation.x = Math.PI / -2;
    scene.add(rectAreaLight);

    // RectAreaLightHelper 모듈 import
    import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

    // 인자 값 - new THREE.HemisphereLight(적용할 빛, 색상);
    const rlHelper = new RectAreaLightHelper(rectAreaLight, 0xff0000);
    scene.add(rlHelper);
    ```
***
## 그림자 추가

**:one:** Renderer 그림자 속성 활성화

```js
renderer.shadowMap.enabled = true;
```

**:two:** 빛에 그림자 속성 적용
- DirectinalLight, PointLight, SpotLight만 그림자 효과가 적용

```js
dlLight.castShadow = true;
```

**:three:** Mesh에 그림자 속성 적용

```js
obj.castShadow = true; // 그림자를 만드는 Mesh
plane.receiveShadow = true; // 그림자가 생기는 Mesh
```
**:star: 그림자의 해상도와 블러효과**

- 그림자 해상도
    - 값이 클수록 해상도가 높아지지만, 렌더링에 필요한 리소스가 증가한다.
    - 해상도와 렌더링 속도 간의 균형을 고려한 값을 설정할 필요가 있다.
    ```js
    // 기본값 512

    dlLight.shadow.mapSize.width = 1024;
    dlLight.shadow.mapSize.height = 1024;    
    ```

- 그림자 블러효과
    - 그림자의 흐려지는 정도를 조절하여 부드러운 그림자 효과를 낼 수 있다.
    - 블러 효과가 강할수록 렌더링 속도가 느려진다.
    ```js
    dlLight.shadow.radius = 5;
    ```
***

## 텍스쳐 입히기

>TextureLoader를 이용해 불러온 텍스쳐 객체를 Material 속성에 할당하면 Mesh에 원하는 텍스쳐를 적용할 수 있다.

**:one:** TextureLoader 생성

```js
const loader = new THREE.TextureLoader();
```

**:two:** 이미지를 텍스쳐 객체로 변환

- TextureLoader를 이용하여 이미지를 불러오면 자동으로 텍스쳐 객체로 변환 된다.

```js
const basecolor = loader.load("../common/textures/bark/Bark_06_basecolor.jpg");
const normal = loader.load("../common/textures/bark/Bark_06_normal.jpg");
const roughness = loader.load("../common/textures/bark/Bark_06_roughness.jpg");
const height = loader.load("../common/textures/bark/Bark_06_height.png");
```

**:three:** material 속성에 불러와준다.

```js
const meterial = new THREE.MeshStandardMaterial({
    map : basecolor,
    normalMap : normal,
    normalScale : new THREE.Vector2(0,0),
    roughness : 0.4,
    roughnessMap : roughness,
    displacementMap : height,
    displacementScale : 0.5
});

```

### Texture 재질 속성

* **map**

    - 재질의 색상 표현

    ```js
    const material = new THREE.MeshStandardMaterial({
        map: basecolor
    });
    ```

* **normal**

    - 실제로 형체가 변하지 않지만, 표면의 빛을 왜곡시켜 입체감 있는 표현이 가능
    - 2차원 벡터 값을 갖는 normalScale을 조절하여 명암을 조절할 수 있다.

    ```js
    const material = new THREE.MeshStandardMaterial({
        normal: normal,
        //normalScale : new THREE.Vector2(0,0), // 기본값 1,1
        roughness : 0.4 // 반사 정도 조절
    });
    ```

* **roughnessMap**

    - 거칠기 또는 광택 등의 질감에 따른 빛의 굴곡을 표현한다.
    - 밝은 부분은 매끈하게, 어두운 부분은 거칠게 표현한다.
    - roughness 속성을 조절하여 표면에 반사되는 빛의 세기를 조절한다.

    ```js
    const material = new THREE.MeshStandardMaterial({
        roughnessMap : roughness
    });
    ```

* **displacementMap**

    - 텍스쳐의 명암에 따라 표면의 높낮이를 조절한다.
    - 밝을수록 높고, 어두울수록 낮게 표현한다.
    - displacementScale 을 조절하여 높낮이의 정도를 설정할 수 있다.

    ```js
    const meterial = new THREE.MeshStandardMaterial({
        displacementMap : height,
        displacementScale : 0.5
    });
    ```
***

## Group 사용 방법

**:one:** Three.js 의 Group 메소드를 이용해서 관리할 그룹을 생성한다.
```js
const bamboo_tree = new THREE.Group();
```

**:two:** 생성한 그룹으로 관리할 요소들을 그룹에 추가한다.
```js
Before)
    scene.add(bamboo1);
    scene.add(bamboo2);

After)
    bamboo_trunk.add(bamboo1);
    bamboo_trunk.add(bamboo2);
```

**:three:** 그룹을 scene 에 추가해준다.
```js
scene.add(bamboo_trunk);
```

**:star: Group을 통한 Mesh 조작하기**

* Group은 묶인 요소를 다 같이 조작이 가능하다.

    ```js
    bamboo_trunk.position.set(1,1,1); // 그룹 전체 이동
    bamboo_trunk.scale.set(0.5,0.5,0.5); // 그룹 전체 크기 조정
    bamboo_trunk_rotation.y = Math.PI/2; // 그룹 전체 회전
    ```

* Group은 자식 요소로 Mesh 뿐만이 아니라 Group을 가질 수 있다.

    ```js
    const bamboo_tree = new THREE.Group();
    bamboo_tree.add(bamboo_trunk, bamboo_leaf);

    scene.add(bamboo_tree);
    ```
***

## Object 파일 분리하기

**:one: 따로 관리할 폴더 및 파일 생성**

<p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/17a16948-a5d8-421f-a948-93065ba569c8" alt="file" width="220px"></p>

**:two: Object 를 반환하는 함수 선언 및 해당 코드 넣기**
    
1. 작성할 파일에도 Three.js 라이브러리를 불러온다.
2. export default 를 사용하여 반환 할 함수를 내보내 준다.
3. scene에 apple_obj를 추가 하는 대신 apple_obj 반환해준다.

```js
import * as THREE from "three"; // Three.js 라이브러리를 불러온다.

export default function printApple(){ // export default를 사용해서 함수를 내보내 줌.
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
    return apple_obj; // scene 대신 반환해준다.
}
```

**:three: 해당 파일을 사용할 곳에서 반환 값을 가져오고 scene에 추가한다.**

<p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/7207df84-6cef-44bb-8d99-a040d467e42a" alt="file" width="100%"></p>
<p align="center"><img src="https://github.com/lbsafe/Three.js/assets/65703793/55a10c7c-c89c-44d6-a643-e46340de4b10" alt="file" width="100%"></p>

```js
import printApple from "../mesh/apple.js"; // 반환 할 파일 가져오기

const apple_obj1 = printApple();
scene.add(apple_obj1);
```
***