import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import './Header.modules.css';
import Button from "../../Button";
import user_logo from "../../../images/user_logo.png";

function Header(props) {
    const{} = props;

    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="contents">
                <div>
                    미니블로그
                </div>
                <nav className="navigation">
                    <ul>
                        <Button
                            title = "Home"
                            onClick = {() => {
                            navigate("/MainPage");
                        }}
                        />
                        <Button
                            title = "Shop"
                            onClick = {() => {
                            navigate("/shop/page5");
                        }}
                        />
                        <Button
                            title = "Cart"
                            onClick = {() => {
                            navigate("/NotFound");
                        }}
                        />
                        <img 
                            src={user_logo} 
                            alt="UserLogo" 
                            width={40} 
                            onClick = {() => {
                                navigate("/NotFound");
                            }}
                            />
                    </ul>
                </nav>
            </div>    
        </header>
    )
}

export default Header