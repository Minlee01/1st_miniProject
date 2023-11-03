import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FWrap = styled.div`
   padding: 16px;
   min-height: calc(100vh - 34px);
   position: relative;
   left: 0;
   bottom: 0;
   display: flex;
   flex-direction: row;
   align-iems: center;
   justify-content: space-between;
   color: light green;
`;

const Footer = () => {
    return(
        <FWrap>
            <footer className="footer">
                <h2 style={{fontSize: '30px', color: 'lightgray', fontWeight: 'bold'}}> Footer </h2>
                <p> Copyright &copy; 2023</p>
                <h6 style = {{fontSize: '15px', color: 'lightgray', fontWeight: 'bold'}}> made by -- </h6>
            </footer>
        </FWrap>
        
    )
}

export default Footer