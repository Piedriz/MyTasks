import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.p`
    color: white;
    font-size: 2rem;
    text-aling:center;
`;


export default function TaskError() {
    return (
        <ErrorMessage>Cargando tareas</ErrorMessage>
    )
}