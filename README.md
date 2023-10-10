# React_Studying
About React

* * *

# React 시작하기

## React 그래서 왜 써야 하는데?
React, Angular, Vue를 사용하는 이유
- 데이터바인딩{ 변수명, 함수 등 }등이 쉽다 ==> 가장 큰 장점


# React 프로젝트 생성하기
```
npx create-react-app 프로젝트이름
```  
npx: npm에 올라가있는 패키지를 바로 실행해서 설치할 수 있게 해주는 모듈.

# React 크롬으로 미리보기
```
npm start
```
종료: 터미널에서 `Ctrl + C`
 
# React 빌드할 때(React Deploy(배포))
```
npm run build
```
build 디렉토리가 생성된다. 생성된 build 파일 내에 생성된 index.html이 배포할 파일
```
npm install -g serve
```
-g를 통해서 컴퓨터 어디에서든 serve라는 명령어를 통해서 웹서버를 설치할 수 있다.
`npx serve`는 한번만 실행시키는 웹서버
```
npx serve -s build
```
build디렉토리를 document root로 하겠다. 


# React 초기 프로젝트 생성시 구조
- src폴더의 app.js가 메인페이지
- public폴더의 index.html이 실질 메인페이지 (app.js -> index.js -> public/index.html)
- node_modules폴더는 Node.js 및 npm을 사용하여 관리되는 패키지 및 모듈을 저장하는 디렉토리
- build 프로덕션 배포용으로 최적하된 애플리케이션 버전을 포함하는 디렉토리, 개발 중에는 사용하지 않음


- public폴더: static파일 보관함 ex:이미지
- src폴더: 소스코드
- node_modules: 설치한 라이브러리가 들어가는 파일
- package.json: 설치한 라이브러리 목록


# React의 문법 (JSX)
- JSX는 JS와 HTML을 합친 형태의 구조를 갖고있다.

## 태그에 class를 주기
태그에 class를 주고싶을 때 in JSX
```
<div className="클래스명">
```

## style에 속성 집어넣기
JSX에서 style 속성 집어넣을 때 
```
style={{ color: "blue", fontSize: "30px" }}
```
위와 같은 object 자료형으로 만들어야 한다.

## Click 이벤트 만들기
onClick={클릭될 때 실행할 함수}
onClick={()=>{실행할내용}}



# 데이터를 사이트에 보관하고자 할 때 (State관리)
데이터를 사이트에 보관할 때 변수에 넣거나, state에 넣거나 (useState함수 사용해서)
```
import React, { useState } from "react";  => React에 있는 내장함수 하나를 쓰겠다.
  useState("남자 코트 추천"); => [a, b] 두개가 생긴다.
let [a,b] =   useState("남자 코트 추천");
[a,b] = [state데이터, state 데이터 변경함수]
  let [글제목, 글제목변경] = useState("남자 코트 추천");
```
위와 같이 사용

- state에 데이터를 저장해놓는 이유: 웹이 App처럼 동작하게 만들기 위해 (HTML이 자동으로 재렌더링 된다)
- 자주 바뀌는 데이터는 변수말고 state로 저장해서 사용한다


# React의 Component
리액트의 Component 문법 (JSX)
CSS파일에서 선언한 클래스를 통해서 '<div> <div/>'안에 구현
function App()의 밖에 컴포넌트 선언해줘야 한다. (function App()도 일종의 Component)
Component의 이름의 첫번째는 대문자로 선언해주는 것을 선호한다.

- React는 여러개의 Component로 이루어져있다.

## State관리와 컴포넌트간 State 공유를 어떻게 할 것인가 
state관리: state는 컴포넌트가 가지는 속성값을 말한다. 속성값이 변하면 react는 자동으로 UI를 업데이트 시켜준다. useState()를 통해서 상태관리를 한다. 
useState()를 사용하려면 import를 해야한다. `import { useState } from "react";`
ex:) 
```
const [name, setName] = useState('Mike');
function changeName() {
	const newName = name === "Mike" ? "Jane" : "Mike";
	setName(newName);
}
```
속성값: props사용. props는 바로 변경 불가능. 

컴포넌트간 변수(state) 공유 어려움 .. > props,  또는 redux 설치해서 사용 ..> 요즘에는 zustand라는 신기술 사용

# 페이지 라우팅하기
페이지를 나누는 것은 라우터 같은 것들을 설치해야한다.
페이지 라우팅을 위해서 react-router-dom설치 필요: `npm install react-router-dom`
import 필요: `import { BrowserRouter, Route, Switch } from "react-router-dom";`
BrowserRouter, Route, Switch를 import

연습을 진행한 프로젝트에서는 우선, 앱 전체를 BrowserRouter로 감싸준다.
Header는 모든 페이지에 표시해야하니깐, Header 다음에 Switch로 감싸준다. 
Switch 내부는 url에 따라 다른 페이지를 보여준다. Switch 외부는 모든 페이지에 공통으로 노출된다.  
주의사항: Switch로 Router들을 감싸놓으면 일치하는 첫번째 결과를 보여준다. /가 포함되는 첫번째 결과만 보여주는 오류가 발생 함. 따라서 첫번째 Route는 `<Route exact path="/">`로 exact를 붙여준다. 
 
이동하고자 하는 페이지에 Link를 연결해야한다.
Link를 import: `import { Link } from "react-router-dom";`
```
<Link to=`/day/${day.day}`>day로 이동<Link/>
```
다이나믹한 url을 처리할 때는 :을 사용한다. ex:) `<Route path="/day/:day">`

url에 포함된 값을 얻을려면 useParams라는 hook을 사용한다. 
```
import { useParams } from "react-router-dom";
const { day } = useParams<{ day: string }>();
```

## react-router-dom 버전6 출시 후 달라진 페이지 라우팅
react-router-dom의 6버전 출시 이후 사용방법이 달라졌다.
`import { BrowserRouter, Route, Routes } from "react-router-dom";`
Switch 대신 Routes를 사용한다. 
exact는 더이상 사용하지 않는다.


# 더미 데이터를 구현해보기
더미데이터(json) 불러오기: data.json파일을 만들어 더미데이터를 넣는다.
`import dummy from "../db/data.json";`을 통해서 import한다. 
`<ul>`과 `<li>`안에 반복문을 사용해 구현하고자 한다. 이때 map을 사용하는 것이 편하다. 배열을 받아서 또다른 배열을 반환해준다. 이때 반환되는 배열을 jsx로 작성해주면 된다.


# DB를 구축하고, API가 필요한 이유
dummy data가 고정되어 있어 새로고침하면 원래 상태로 돌아온다. 따라서, db를 구축하고, api를 만들어야 한다. 
json server를 통해서 빠르고 쉽게 rest api를 구축해준다. (작은 프로토타입에)
`+`버튼을 통해서 터미널을 하나 더 사용할 수 있다.
```
npm install -g json-server
json-server --watch ./src/db/data.json --port 3001
```
서버 연결해놓은 것은 서버를 켜지 않으면 오류가 난다.

# 간단한 REST API 구현해보기
json-server란 내부적으로 단순한 데이터베이스를 이용하며 REST API를 지원한다. 주의 점으로는 직접 만든 db.json 파일에 직접 데이터를 저장하고 갱신하는
방식이라 앱 재배포시 기존 데이터 전부 날라갈 수 있다.

REST API란 HTTP URI를 통해 자원을 명시하고, HTTP Method(POST, GET, PUT, DELETE, PATCH)를 통해 해당자원(URI)에 대한 CRUD를 적용하는 것을 의미한다.

rest api란 url주소와 메소드로 CRUD를 요청하는 것이다.
Create: POST
Read: GET
Update: PUT
Delete: DELETE


useEffect()

export default: export를 해주면 다른 파일에서도 해당 interface를 사용할 수 있다.

module css: css는 각 컴포넌트에 종속되지 않는데, 파일명.module.css를 통해서 각 컴포넌트에 특화된 css를 만들 수가 있다.

