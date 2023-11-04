//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import styled from "styled-components";
import EmptyPage from "./pages/shop/page5";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//라우팅 이외에 딱히 해주는 역할 x