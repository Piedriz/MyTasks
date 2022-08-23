import React from "react";
import useLocalStorage from "./useLocalStorage";
const TaskContext = React.createContext();

function TaskProvider(props) {
  const {
    item: task,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1.0", []);

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
  const addTask = (text)=>{
    const neWTaskArray = [...task];
    neWTaskArray.push({
        completed:false,
        text
    });
    saveTasks(neWTaskArray)
  }

  const OnComplete = (text) => {
    const taskIndex = task.findIndex((ta) => ta.text === text);
    const neWTaskArray = [...task];
    neWTaskArray[taskIndex].completed = !neWTaskArray[taskIndex].completed;
    saveTasks(neWTaskArray);
  };
  const OnDelete = (text) => {
    const taskIndex = task.findIndex((ta) => ta.text === text);
    const neWTaskArray = [...task];
    neWTaskArray.splice(taskIndex, 1);
    saveTasks(neWTaskArray);
  };
  return (
    <TaskContext.Provider value={{
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
    }}>{props.children}
    </TaskContext.Provider>
  );
}
export {TaskContext,TaskProvider}
