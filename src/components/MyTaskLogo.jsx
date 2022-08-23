import React from "react";
import styled from "styled-components";

const Logo = styled.img`
    margin: 2rem auto;
    
    width: 10rem;
    height: 10rem;
`;

export default function MyTaskLogo(props){
    return(
        <Logo src="http://assets.stickpng.com/thumbs/5842a622a6515b1e0ad75af9.png" alt="Logo de MyTask"/>
    );        

}