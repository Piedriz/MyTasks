import React from 'react'
import Form from "../components/Form";
import MainContainer from '../containers/MainContainer';
import useTasks from './useTasks';

export const NewTaskPage = () => {
  const {addTask} = useTasks();

  return (
    <MainContainer>
      <Form label="Escribe nueva tarea"
            submitText="Añadir"
            submitEvent={(text)=>addTask(text)}/>
    </MainContainer>
    
  )
}
