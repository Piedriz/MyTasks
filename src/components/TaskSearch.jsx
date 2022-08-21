import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';


const TaskInput = styled.input`
    width: 90%;
    margin: 0 auto;
    height: 5rem;
    padding: 0 2rem;
    border-radius: 1rem;
    border-style:none;
    background-color: #385170;
    color: white;

    &:focus{
        outline:none;
    }
`;

export default function TaskSearch({searchValue, setSearchValue}){
    

    const OnSearchValues= (e) =>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    

    return(
        <TaskInput Value={searchValue} placeholder="Buscar tarea" onInputCapture={OnSearchValues} />
    );

}