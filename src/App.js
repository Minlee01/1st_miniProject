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
import Page5 from './pages/shop/Page5';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
    
    <Layout>
      <Routes>
          <Route index element = {<MainPage />} />
          <Route path = "/shop/Page5" element={<Page5 />} />
          <Route path ="/NotFound" element={<NotFound/>} />
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
