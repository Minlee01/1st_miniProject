import React from "react";
import styled from "styled-components";
import testContainer from "../../components/testContainer"
import { useNavigate } from "react-router-dom";
import HorizontalScroll from "../../components/HorizonalScroll";


const Wrapper = styled.div`
    padding: 20px;
    bottom: 5px;
    margin-bottom: 20px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: lightgrey;
`;
const ContentWrapper= styled.div`
    min-height: calc(100vh - 100px);
`;

function Page5(props){ 
    const navigate = useNavigate();

    const{} = props;
        return (
            <Wrapper>
                <ContentWrapper>
                    <main>
                    {props.children}
                    </main>
                </ContentWrapper>
                <HorizontalScroll />
            </Wrapper>
            
    )
    
    
}

export default Page5;