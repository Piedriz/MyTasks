import React from "react";
import styled from "styled-components";
import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 24rem;
  justify-content: center;
  aling-items: center;
  padding: 1rem 1rem;
  background-color: #142d4c;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const NewTaskImput = styled.input`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
  height: 7rem;
  padding: 0 2rem;
  border-radius: 1rem;
  border-style: none;
  background-color: #385170;
  color: white;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #f95959;
    transform: scale(1.2);
  }
`;

const NewTaskButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  border: none;
  flex-direction: column;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: rgb(187 227 97);
    transform: scale(1.2);
  }
`;
const Title = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
`;


function Form(props) {
  const [newTask, setNewTask] = React.useState("");
  const [newTaskValue, setNewTaskValue] = React.useState(props.defaultTaskText || '');
  const navigate = useNavigate();

  const onCancel = (e) => {
    navigate('/');
  };
  
  const onChange = (e) => {
    setNewTask(e.target.value);
  };

  const onSubmit = (e) => {
    // task.some((Task) => Task.text.toLowerCase() === newTask.toLowerCase())
    //   ? setExist(true) : addTask(newTask)
    props.submitEvent(newTask)
    navigate('/');
    e.preventDefault();
  };
  return (
    <TaskForm onSubmit={onSubmit}>
      <Title>{props.label}</Title>
      <NewTaskImput onChange={onChange} placeholder={newTaskValue} />
      <Buttons>
        <NewTaskButton type="submit">
          <BiTask size={"4rem"} />
          {props.submitText}
        </NewTaskButton>
        <CancelButton onClick={onCancel}>
          <BiTaskX size={"4rem"} />
          Cancelar
        </CancelButton>
      </Buttons>
    </TaskForm>
  );
}
export default Form;
