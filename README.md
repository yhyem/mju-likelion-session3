# mju-likelion-session3

> **3주차 과제** 
지원시 제출한 자기소개 페이지 리액트로 변환
useState, Props 적어도 1개씩 사용
> 

3주차 세션에 만든 week3 브랜치에서 커밋 해주시고 해당 PR 링크를 제출해주시면 됩니다.

참고

[3주차 세션 강의록](https://www.notion.so/3-1d8b5f9e63de4140ac3305653511750d?pvs=21)


지원시 자기소개서 페이지에 페이지 이동 구현해주신 분들

6주차 웹세션에서 배울 내용이지만 아직 이해는 안해도 되니까 미리 활용해보시고 막히시면 찾아와주세요 😊

*리액트 라우터 연결*

터미널에서 리액트 라우터 라이브러리 추가

`yarn add react-router-dom`

**src/index.js**
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

**App.js**
```
import Main from "./pages/Main.js";
import About from "./pages/About.js";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

**Main.js**
```
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Main;
```
