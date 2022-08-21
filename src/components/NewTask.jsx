import React from 'react'
import styled from 'styled-components';
import {AiFillPlusCircle} from "react-icons/ai"


const Add = styled.div`
    width: 4rem;
    margin: 2rem auto;
    
    transition: 0.5s;
    &:hover{
        transform: scale(1.2);
        
    }  
`;

export default function NewTask({task,setTask}){

    // const Ading = () =>{
    //     setTask(task.push({text:"me abro", completed:true}))
    // }
    return(
        <Add>
            <AiFillPlusCircle  size="4rem" color="#9fd3c7" />
        </Add>
    );
}