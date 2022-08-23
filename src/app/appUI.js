import React from "react";
import TaskContainer from "../containers/TaskContainer";
import MainContainer from "../containers/MainContainer";
import MyTaskLogo from "../components/MyTaskLogo";
import TaskCounter from "../components/TaskCounter";
import TaskSearch from "../components/TaskSearch";
import TaskList from "../components/TaskList";
import TaskItem from "../components/TaskItem";
import NewTask from "../components/NewTask";
import Form from "../components/Form";
import { TaskContext } from "../context/index";
import Modal from "../components/Modal";

function AppUI() {
  const {
    error,
    loading,
    searchArray,
    OnDelete,
    OnComplete,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);
  return (
    <MainContainer>
      <TaskContainer>
        <MyTaskLogo />
        <TaskCounter />
        <TaskSearch />
        <TaskList>
          {loading && <p>Cargando tareas...</p>}
          {error && <p>Ha ocurrido un error</p>}
          {!loading && searchArray.lenght === 0 && <p>Crea tu primera tarea</p>}
          {searchArray.map((task) => (
            <TaskItem
              taskText={task.text}
              key={task.text}
              OnDelete={() => OnDelete(task.text)}
              completed={task.completed}
              OnComplete={() => OnComplete(task.text)}
            />
          ))}
        </TaskList>
        <NewTask setOpenModal={setOpenModal}/>
      </TaskContainer>
      {!!openModal && (
        <Modal>
          <Form setOpenModal={setOpenModal}/>
        </Modal>
      )}
    </MainContainer>
  );
}
export default AppUI;
