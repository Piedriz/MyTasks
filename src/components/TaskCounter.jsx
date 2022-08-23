import React from 'react'
import styled from 'styled-components'
import { TaskContext } from '../context';

const Counter = styled.p`
    font-size: 1.8rem;
    text-align:center;
    color: #ececec;
    font-weight: 500;
    margin-bottom: 2rem;
`;

export default function TaskCounter(){
    const {taskCompleted,
        totalTask, } = React.useContext(TaskContext)
    return(
        <Counter>
            {totalTask === 0 ? 'Bienvenido, crea tu primera tarea' : `¡Hola! Llevas ${taskCompleted} de ${totalTask} tarea${`${totalTask === 1 ? '' : 's'}`}`}
        </Counter>
    );
}