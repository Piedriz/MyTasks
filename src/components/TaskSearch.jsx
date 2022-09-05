import React from "react";
import styled from "styled-components";

const TaskInput = styled.input`
  display:flex;
  width: 90%;
  margin: 0 auto;
  height: 5rem;
  padding: 0 2rem;
  border-radius: 1rem;
  border-style: none;
  background-color: #385170;
  color: white;
  &:focus {
    outline: none;
  }
`;

export default function TaskSearch({ searchValue, setSearchValue,loading }) {
    const OnSearchValues = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <TaskInput
            Value={searchValue}
            placeholder="Buscar tarea"
            onInputCapture={OnSearchValues}
            disabled={loading}
        />
    );
}
