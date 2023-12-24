// DropDown.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleList = styled.button`
  padding: 8px 10px;
  font-size: 16px;
  font-weight: bold;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  background-color: pink;
  cursor: pointer;
  maring-botton: 3px;
`;

const DropDownContainer = styled.div`
position: absolute;
top: ${({ topPosition }) => `${topPosition}px`};
right: 0;
z-index: 99; /*set a higher z-index to appear above other elements */
`;


const DropDown = ({ data = [], parentRef }) => {
  const topPosition = parentRef.current ? parentRef.current.offsetHeight : 0;
  const navigate = useNavigate();

  return (
    <DropDownContainer topPosition={topPosition}>
      <ul className="text-left" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
        {data.map((item, i) => (
          <li key={i}>
            <StyleList 
            className={StyleList}
            onClick={() =>{
              navigate(`shop/page${i + 1}`);
            }}>
            {`Page ${i + 1}`}</StyleList>
          </li>
        ))}
      </ul>
    </DropDownContainer>
  );
};

export default DropDown;
