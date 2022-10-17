import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Form from "../components/Form";
import MainContainer from '../containers/MainContainer';
import useTasks from './useTasks';

export const EditTaskPage = () => {
  const location = useLocation()
  const params = useParams();
  const id = Number(params.id);
  const {OnEdit, getTask, loading}= useTasks();
  let taskText;


  if(location.state?.text){
    taskText = location.state.text;
  }else if(loading){
    return <p>Cargando...</p>
  }else{
    const task = getTask(id);
    taskText = task.text
  }
        
  return (
    <MainContainer>
      <Form label="Edita tu tarea"
            submitText="Editar"
            defaultTaskText={taskText}
            submitEvent={(newText)=> OnEdit(id,newText)}/>
    </MainContainer>
  );
}
