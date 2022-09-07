import React from "react";
import styled from "styled-components";

const Logo = styled.img`
    display:flex;
    margin: 2rem auto;
    width: 10rem;
    height: 10rem;
`;

export default function MyTaskLogo(){
    return(
        <React.Fragment>
        <Logo src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="Logo de MyTask"/>
        </React.Fragment>
    );        

}