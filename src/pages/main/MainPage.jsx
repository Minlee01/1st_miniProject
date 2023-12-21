import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import MainImage from "../../images/MainImage.jpg";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 0;
`;
const Image = styled.div`
    position: relative;
    padding: 5px 16px;
    text-align: center;
    
`
const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left: 50px;
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent buttons from wrapping to the next line */
    padding-bottom: 16px; /* Add some bottom padding for spacing */

    & > *:not(:last-child) {
        margin-right: 16px; /* Add some right margin between buttons */
    }

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 60px; /* Adjust the height as needed */
`;

const MainText = styled.p`
    position: absolute;
    top: 60px; // Adjust the top value as needed
    left: 50%; // Center the text horizontally
    transform: translateX(-50%); // Center the text horizontally
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: white; // Set the text color as needed
`;

/*
const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left : 50px;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
*/

function MainPage(props) {
    const{} = props;

    const navigate = useNavigate();
    /*const { title, onClick } = props;*/

    return (
        <Wrapper>
            <Image><img src={MainImage} 
                alt="MainImage" 
                width={1400}
            
            />
            <MainText>미니블로그</MainText>
            </Image>
            
            <Container>
                <Button
                    title = "item1"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                 <Button
                    title = "item2"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item3"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item4"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item5"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item6"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item7"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item8"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item9"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                <Button
                    title = "item10"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />    

            </Container>
        </Wrapper>
    );
}

export default MainPage;