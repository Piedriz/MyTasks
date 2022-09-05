import React from 'react'
import styled from 'styled-components'

const EmptyMessage = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align:center;
    padding-top:2rem;
`;


export default function TaskEmpty() {
    return (
        <EmptyMessage>Crea tu primera tarea</EmptyMessage>
    )
}