import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import image1 from "../../images/pg1/image1.jpg"
import image2 from "../../images/pg1/image2.jpg"
import image3 from "../../images/pg1/image3.jpg"
import image4 from "../../images/pg1/image4.jpg"


const Wrapper = styled.div`
    padding: 20px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: lightgrey;
`;
const ImageContainer = styled.div`
width : 110;
height: 150;
border-width:1px;
border-color: black;
`;
const Image = styled.div`
    padding: 5px 16px;
`;

function Page1(props){
    const navigate = useNavigate();
    
    return(
        <Wrapper>
            <ImageContainer>
                <Image><img src={image1} 
                alt="Lollipop" 
                width={100}
                height={100}
                />
                </Image>
            </ImageContainer>
            
            <Image><img src={image2} 
                alt="Macarons" 
                width={100}
                height={100}
            />
            </Image>
            <Image><img src={image3} 
                alt="Chocolate Pyramid" 
                width={100}
                height={100}
            />
            </Image>
            <Image><img src={image4} 
                alt="Wrapped Orange" 
                width={100}
                height={100}
            />
            </Image>
        </Wrapper>



    )
}

export default Page1;