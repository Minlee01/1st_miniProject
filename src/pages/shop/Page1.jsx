import React from "react";
import styled from "styled-components";
import testContainer from "../../components/testContainer"
import { useNavigate } from "react-router-dom";
import image1 from "../../images/pg1/close-up-view-colorful-delicious-lollipop.jpg"


const Wrapper = styled.div`
    padding: 20px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: lightgrey;
`;

const Image = styled.div`
    padding: 5px 16px;
    text-align: center;
`

function Page1(props){
    const navigate = useNavigate();
    const{} = props;
    return(
        <Wrapper>
            <Image><img src={image1} 
                alt="UserLogo" 
                width={400}
            />
            </Image>
        </Wrapper>



    )
}

export default Page1;