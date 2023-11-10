import React from "react";
//import { useNavigate } from "react-router-dom";
//import styled from "styled-components";
import './Header.modules.css';

function Header(props) {
    return (
        <header className="header">
            <div className="contents">
                <div>
                    이름
                </div>
                <nav className="navigation">
                    <ul>
                        <li>
                           Home 
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            Cart
                        </li>
                        <li>
                            user img
                        </li>
                    </ul>
                </nav>
            </div>    
        </header>
    )
}

export default Header