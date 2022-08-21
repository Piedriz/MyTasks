import TaskContainer from "./containers/TaskContainer";
import MainContainer from "./containers/MainContainer";
import MyTaskLogo from "./components/MyTaskLogo"
import TaskCounter from "./components/TaskCounter";
import TaskSearch from "./components/TaskSearch";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import NewTask from "./components/NewTask";
import React from "react";
import Modal from "./modal";
//import {Suspense, lazy} from 'react';
//const MainContainer = lazy(()=>import ('./containers/MainContainer'));

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue; 
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
  }
  return[
    item,
    saveItem,
  ];
}


function App() {
  
  const [task, saveTasks] = useLocalStorage('TASKS_V1.0',[]);
  const [searchValue, setSearchValue] = React.useState('');

  const taskCompleted = task.filter(ta => ta.completed).length;
  const totalTask = task.length;

  let searchArray = [];

  if(searchValue.length<=0){
    searchArray = task;
  }else{
    searchArray = task.filter(ta => {
      const imputText = searchValue.toLowerCase();
      const taskText = ta.text.toLowerCase();
      return taskText.includes(imputText);
    });
  }
  
  const OnComplete = (text) =>{
    const taskIndex =  task.findIndex(ta => ta.text === text);
    const neWTaskArray = [...task];
    neWTaskArray[taskIndex].completed= !neWTaskArray[taskIndex].completed;
    saveTasks(neWTaskArray);
  }
  const OnDelete = (text) =>{
    const taskIndex =  task.findIndex(ta => ta.text === text);
    const neWTaskArray = [...task];
    neWTaskArray.splice(taskIndex,1);
    saveTasks(neWTaskArray);
  }

  
  return (
   // <Suspense fallback={<h1>Cargando...</h1>}>
    <MainContainer>
      <TaskContainer>
        <MyTaskLogo/>
        <TaskCounter nCompleted={taskCompleted} nTask={totalTask}/>
        <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TaskList>
          {searchArray.map((task => ( <TaskItem taskText={task.text} key={task.text} OnDelete={()=>OnDelete(task.text)} completed={task.completed} OnComplete={()=>OnComplete(task.text)} />)))}  
        </TaskList>
        <NewTask task={task} saveTasks={saveTasks}/>
      </TaskContainer>
    </MainContainer>
   // </Suspense>

   
  );
}

export default App;
