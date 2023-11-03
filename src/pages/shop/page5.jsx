import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";

function EmptyPage(props) {
    const{} = props;

    //const navigate = useNavigate();

    return (
        <Layout/>
    );
}

export default EmptyPage;
