import React from "react";
import styled from "styled-components";

const Logo = styled.img`
    margin: 2rem auto;
    
    width: 18rem;
    height: 10rem;
`;

export default function MyTaskLogo(props){
    return(
        <Logo src="https://1000marcas.net/wp-content/uploads/2020/01/Canva-Logo.png" alt="Logo de MyTask"/>
    );        

}