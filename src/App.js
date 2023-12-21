import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import Layout from './components/Layout/Layout';
import MainPage from './pages/main/MainPage';
import NotFound from './pages/main/NotFound';
import UserPage from './pages/main/UserPage';
import Page1 from './pages/shop/Page1';
import Page2 from './pages/shop/Page2';

const MainTitleText = styled.p`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  top: 200px;
  color: transparent;
`;

function App(props) {
  return (
    <BrowserRouter>
     <MainTitleText>미니블로그</MainTitleText>
    <Layout>
      <Routes>
          <Route index element = {<MainPage />} />
          <Route path = "/MainPage" element = {<MainPage/>} />
          <Route path = "/shop/page" element={<Page1 />} />
          <Route path ="/NotFound" element={<NotFound/>} />
          <Route path ="/UserPage" element={<UserPage/>} />
      </Routes>
    </Layout>
        
      
    </BrowserRouter>
  );
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
//라우팅 이외에 딱히 해주는 역할 x
