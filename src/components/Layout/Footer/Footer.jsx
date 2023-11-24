import React from "react";
//import { useNavigate } from "react-router-dom";
//import styled from "styled-components";
import './Footer.modules.css';



function Footer(props) {
    return (
        <footer className="footer">
            <div className="contents">
                <h2 className="title">This is Footer</h2>
                <div className="comment">User by Lusi Astianah from <a href="https://thenounproject.com/browse/icons/term/user/" target="_blank" title="User Icons">Noun Project</a> (CC BY 3.0)</div>
                <div className="madeBy">
                    made by --
                </div>
            </div>
            
        </footer>
    )
}

export default Footer