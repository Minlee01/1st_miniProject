import React from "react";
import Button from "./Button";
import DropDown from "./DropDown";

const sampleData = new Array(7).fill("item name");

const ButtonDropDown = ({title}) => {
    const [open, setOpen ] = React.useState(false);
    const drop = React.useRef(null);

    function handleClick(e) {
        // Clicked element = e.target
        if (!drop.current.contains(e.target) && open) {
            setOpen(false);
        }
    }
    

    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return(
        <div 
        className="dropdown"
        ref={drop}
        style={{ position: "relative", margin: "16px" }}>
            <Button title = {title} onClick={() => setOpen(open => !open)} />
            {open && <DropDown data={sampleData} parentRef={drop}/>}
        </div>
    );
};

export default ButtonDropDown;