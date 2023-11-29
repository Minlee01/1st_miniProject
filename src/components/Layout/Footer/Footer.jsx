import React from "react";
//import { useNavigate } from "react-router-dom";
//import styled from "styled-components";
import './Footer.modules.css';



function Footer(props) {
    return (
        <footer className="footer">
            <div className="contents">
                <h2 className="title">This is Footer</h2>
                <div className="comment"><p>User by Lusi Astianah from <a href="https://thenounproject.com/browse/icons/term/user/" target="_blank" title="User Icons">Noun Project</a> (CC BY 3.0)</p>
                <p><a href="https://www.freepik.com/free-photo/scenery-rocks-coastline-pacific-northwest-cannon-beach-oregon_9970795.htm#query=oregon&position=7&from_view=search&track=sph&uuid=cccebc72-ea33-4580-b59b-b5149fc592e8">Image by wirestock</a> on Freepik</p></div>
                <div className="madeBy">
                    made by --
                </div>
            </div>
            
        </footer>
    )
}

export default Footer