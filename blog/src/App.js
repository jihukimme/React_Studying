// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "대구 우동 맛집",
    "리액트 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목]; //deep copy가 필요한 경우 ...사용
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <img src={logo} /> */}
      <button onClick={제목바꾸기}>제목바꾸기</button>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4> {글제목[1]} </h4>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4> {글제목[2]} </h4>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
