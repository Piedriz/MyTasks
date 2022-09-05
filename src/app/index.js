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
import Header from "../components/Header";
import useTasks from "./useTasks";
import Modal from "../components/Modal";
import TaskError from "../components/TaskError";
import TaskLoading from "../components/TaskLoading";
import TaskEmpty from "../components/TaskEmpty";
import EmptySearchResults from "../components/EmptySearchResults";
import ChangeAlert from "../components/ChangeAlert";

function App() {
  const {
    task,
    addTask,
    searchValue,
    setSearchValue,
    taskCompleted,
    totalTask,
    error,
    loading,
    searchArray,
    OnDelete,
    OnComplete,
    openModal,
    setOpenModal,
    syncUpTasks,
  } = useTasks();
  return (
    <React.Fragment>
      <MainContainer>
        <TaskContainer>
          <Header loading={loading}>
            <MyTaskLogo />
            <TaskCounter task={task} taskCompleted={taskCompleted} totalTask={totalTask} />
            <TaskSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Header>
          <TaskList
            task = {task}
            loading={loading}
            error={error}
            searchValue={searchValue}
            searchArray={searchArray}
            taskLength={task.length}
            taskLoading={() => <TaskLoading/>}
            taskError={() => <TaskError/>}
            taskEmpty={() => <TaskEmpty/>}
            emptySearchResults = {(text) => <EmptySearchResults searchValue={text}/>}
            >
            {(task) => (
              <TaskItem
                taskText={task.text}
                key={task.text}
                OnDelete={() => OnDelete(task.text)}
                completed={task.completed}
                OnComplete={() => OnComplete(task.text)}
              />
            )}
          </TaskList>

          <NewTask setOpenModal={setOpenModal} />

          <ChangeAlert setOpenModal={setOpenModal} openModal={openModal} syncUpTasks={syncUpTasks}/>

        </TaskContainer>
      </MainContainer>
      {!!openModal && (
        <Modal setOpenModal={setOpenModal} openModal={openModal}>
          <Form task={task} addTask={addTask} setOpenModal={setOpenModal} />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export default App;
