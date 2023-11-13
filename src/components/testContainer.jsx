import React from "react";
//import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout/Layout";

const Wrapper = styled.div`
    padding: 16px;
    width: clac(100% - 32px);
    display: flex;
    flex-direction: column;
    align-iems: center;
    justify-content: center;
`;

const contents = styled.div`
    width: 95%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:auto;
`;

const title = styled.div`
    font-weight: 600;
    font-size: 20px;
`;

function testContainer(props) {
    return (
        <div className="Wrapper">
            <div className = "contents">
                <h2 className="title">This is for test</h2>
                <div>글</div>
                <div>
                    made by --
                </div>
            </div>
        </div>

    )
}

export default testContainer