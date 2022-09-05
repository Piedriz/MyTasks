import React from 'react'
import useStorageListener from './useStorageListener'
import styled from 'styled-components'
import { HiOutlineRefresh } from 'react-icons/hi'
import {IoIosWarning} from 'react-icons/io'
import { Div } from './Modal'

const ChangeDiv = styled.div`
    border-radius: 1rem;
    background-color: #f95959;
    display: flex;
    width: 30rem;
    height: 18rem;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 1rem 1rem 1rem 1rem;
`;

const ChangeMessage = styled.p`
    font-size:1.5rem;
    margin-bottom: 2rem;
`;

const RefreshButton = styled.button`
    transition: 0.5s;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    &:hover{
        transform: scale(1.4);
    };
`;
 const styledWarningIcon ={
    fontSize: "4rem",
    color: "yellow",
    marginBottom: "1.5rem" 
 } 
export default function ChangeAlert({syncUpTasks}) {
    const {storageChange,toggleShow} = useStorageListener(syncUpTasks)

    if (storageChange) {
        return (
            <Div>
                <ChangeDiv>
                    <IoIosWarning style={styledWarningIcon}/>
                    <ChangeMessage>Se han realizado cambios</ChangeMessage>
                    <RefreshButton onClick={toggleShow}><HiOutlineRefresh size={"2rem"}/></RefreshButton>
                </ChangeDiv>
            </Div>
        )
    } else {
        return null
    }
}