import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import {AiFillEdit} from 'react-icons/ai'

const Item = styled.div`
  padding: 1rem 2rem;
  margin-top: 2rem; 
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 6rem;
  background-color: #385170;
  border-radius: 1rem;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

// const MainOptions = styled.div`
//   display:flex;
//   flex-direction:row;
//   justify-content:space-between;
//   width: 100%;
// `;
const DeleteButton = styled.div`
  cursor: pointer;
  color: #9fd3c7;
  transition: 0.5s;
  justify-self: flex-end;

  &:hover {
    color: #f95959;
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  position: relative;
`;
const EditButton = styled.div`
  cursor: pointer;
  color: #9fd3c7;
  transition: 0.5s;
  position: absolute;
  top:-1rem;
  right:1rem;
  &:hover {
    color: #1e73be;
    transform: scale(1.1);
  }
`;
const CompletedButton = styled.div`
  cursor: pointer;
  transition: 0.5s;
  

  &:hover {
    color: #c6ef6d;
    transform: scale(1.1);
  }
`;

const TaskText = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;

  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export default function TaskItem(props) {
  return (
    <Content>
    <Item>
      <CompletedButton>
        <AiFillCheckCircle
          onClick={props.OnComplete}
          size="2rem"
          color={`${props.completed ? "#cbf078" : "#9fd3c7"}`}
        />
      </CompletedButton>
      <TaskText completed={props.completed}>{props.taskText}</TaskText>
      <DeleteButton>
        <AiFillDelete onClick={props.OnDelete} size="2rem" />
      </DeleteButton>
      
    </Item>
    <EditButton>
    <AiFillEdit onClick={props.OnEdit} size="2rem" />
  </EditButton>
  </Content>
  );
}
