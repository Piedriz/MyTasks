import React from 'react'
import styled from 'styled-components'


const Counter = styled.p`
    font-size: 1.8rem;
    text-align:center;
    color: #ececec;
    font-weight: 500;
    margin-bottom: 2rem;
`;

export default function TaskCounter({nCompleted, nTask}){
    return(
        <Counter>
            ¡Hola! Llevas {nCompleted} de {nTask} tarea{`${nTask === 1 ? '' : 's'}`} completadas
        </Counter>
    );
}