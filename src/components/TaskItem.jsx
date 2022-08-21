import React from 'react'
import styled from 'styled-components';
import {AiFillCheckCircle} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"


const Item = styled.div`
    display: flex;
    padding: 1rem 2rem;
    margin-top: 2rem;
    display: flex;
    width: 100%;
    height: 5rem;
    background-color: #385170;
    border-radius: 1rem;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    p{
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
    
`;
const DeleteButton = styled.div`
    color: #9fd3c7;
    transition: 0.5s;

    &:hover{
        color: #f95959;
        transform: scale(1.1)
    }
`;
const CompletedButton = styled.div`
    transition: 0.5s;

    &:hover{
        transform: scale(1.1)
    }   
`;

export default function TaskItem(props){


    return(
       
        <Item>            
            <CompletedButton><AiFillCheckCircle onClick={props.OnComplete} size="2rem" color={`${props.completed ? '#cbf078': '#9fd3c7'}`}/></CompletedButton>
            <p>{props.taskText}</p>
            <DeleteButton><AiFillDelete onClick={props.OnDelete} size="2rem"/></DeleteButton>
        </Item>
    );
}


