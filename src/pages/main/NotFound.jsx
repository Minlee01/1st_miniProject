import React from 'react';
import styled from "styled-components";

const Messagediv = styled.div`
    font-size: 30px;
    font-weight: bold;
    top: 300px;
`;

const NotFound = () => {
    return (
        <Messagediv>
            404 Error
        </Messagediv>
    );
};
  
export default NotFound;
