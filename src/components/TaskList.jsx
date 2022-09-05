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
            {props.loading && props.taskLoading()}
            {props.error && props.taskError()}
            {(!props.loading && !props.taskLength) && props.taskEmpty()}
            {((!props.loading && !props.searchArray.length) && props.taskLength>0 ) && props.emptySearchResults(props.searchValue)}
            {!props.loading && props.searchArray.map(props.children)}
        </List>
    );
}