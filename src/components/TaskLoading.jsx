import React from 'react'
import styled from 'styled-components'

const LoadingMessage = styled.p`
    color: white;
    font-size: 1.5rem;
    padding-top: 2rem;
    text-align:center;
`;


export default function TaskLoading() {
    return (
        <LoadingMessage>Cargando tareas...</LoadingMessage>
    )
}
