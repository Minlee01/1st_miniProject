import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: clac(100% - 32px);
    display: flex;
    flex-direction: column;
    align-iems: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function UserPage(props) {
    const{} = props;

    const navigate = useNavigate();
    const { title, onClick } = props;

    return (
        <Wrapper>
            <Container>
                <Button
                    title = "글 작성하기"
                    onClick = {() => {
                        navigate("/shop/Page5");
                    }}
                />
                 <Button
                    title = "null"
                    onClick = {() => {
                        navigate("/NotFound");
                    }}
                />
                    

            </Container>
        </Wrapper>
    );
}

export default UserPage;