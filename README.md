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

* 브라우저가 다음 프레임을 렌더링하기 전에 반복적으로 animate를 호출한다.
    
    ```js
    function animate(){
        box.rotation.y += 0.01; // y축 기준으로 회전
        console.log(box.rotation.y); // 변하는 값 확인
        requestAnimationFrame(animate);
    }
    animate();
    ```

**:three:** animate 내부에 화면을 출력해주는 렌더링 함수 호출

* 브라우저가 다음 프레임을 렌더링하기 전에 반복적으로 animate를 호출한다.
    
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

> Three.js에서 3차원의 객체 Mesh의 2가지 인자를 살펴본다.

```js
const box = new THREE.Mesh(geometry, meterial);
```

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