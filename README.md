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
import * as THREE from 'three'
import WebGL from '<파일 경로>/webgl.js';

if (WebGL.isWebGLAvailable()) {
  // 실행하려는 Three.js 코드를 작성한다.
  
} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
```
:link:[webGL][WebGL] : WebGL 지원 브라우저

[WebGL]: https://caniuse.com/?search=WebGL "WebGL"

***