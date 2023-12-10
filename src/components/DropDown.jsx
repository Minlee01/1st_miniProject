import { useState } from "react";

function DropDown(props) {
    const [open, setOpen] = useState(false);
    return (
      <li>
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    );
  }
    {/** 하위에 있는 메뉴가 열립니다. **/}
    <ul>
      <li>메뉴1</li>  
      <li>메뉴2</li>  
      <li>메뉴3</li>  
      <li>메뉴4</li>  
    </ul>

export default DropDown;