import React from "react";
import useLocalStorage from "./useLocalStorage";

function useTasks() {
  const {
    item: task,
    saveItem: saveTasks,
    loading,
    error,
    syncUp: syncUpTasks,
  } = useLocalStorage("TASKS_V2.0", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const taskCompleted = task.filter((ta) => ta.completed).length;
  const totalTask = task.length;

  let searchArray = [];

  if (searchValue.length <= 0) {
    searchArray = task;
  } else {
    searchArray = task.filter((ta) => {
      const imputText = searchValue.toLowerCase();
      const taskText = ta.text.toLowerCase();
      return taskText.includes(imputText);
    });
  }

  const getTask = (id)=>{
    const taskIndex = task.findIndex((ta) => ta.id === id);
    return task[taskIndex]
  }
  const addTask = (text)=>{
    const id = newTaskId(task);
    const neWTaskArray = [...task];
    neWTaskArray.push({
        completed:false,
        text,
        id,
    });
    saveTasks(neWTaskArray)
    setOpenModal((prevState)=> !prevState)
  }

  const OnComplete = (id) => {
    const taskIndex = task.findIndex((ta) => ta.id === id);
    const neWTaskArray = [...task];
    neWTaskArray[taskIndex].completed = !neWTaskArray[taskIndex].completed;
    saveTasks(neWTaskArray);
  };
  const OnDelete = (id) => {
    const taskIndex = task.findIndex((ta) => ta.id === id);
    const neWTaskArray = [...task];
    neWTaskArray.splice(taskIndex, 1);
    saveTasks(neWTaskArray);
  };
  const OnEdit = (id,newText) => {
    const taskIndex = task.findIndex((ta) => ta.id === id);
    const neWTaskArray = [...task];
    neWTaskArray[taskIndex].text = newText;
    saveTasks(neWTaskArray);
  };
  return (
    {
        task,
        addTask,
        openModal,
        setOpenModal,
        taskCompleted,
        totalTask,                       
        searchValue,
        setSearchValue,
        searchArray,
        OnComplete,
        OnDelete,
        loading,
        error,
        syncUpTasks,
        OnEdit,
        getTask
    })
}

const newTaskId = (taskList)=>{
  
  const idList = taskList.map(task => task.id);
  const idMax = (idList.length>0 ? Math.max(...idList) : 1)
  return idMax +1 ;
}
export default useTasks
