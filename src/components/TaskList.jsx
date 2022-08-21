import React from 'react'
import styled from 'styled-components';

const List = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    

`;


export default function TaskList(props){
    return(
        <List>
            {props.children}
        </List>
    );
}