import React from "react";
import styled from "styled-components";

const Counter = styled.p`
  font-size: 1.8rem;
  text-align: center;
  color: #ececec;
  font-weight: 500;
  margin-bottom: 2rem;
  margin 0rem 1rem 1rem 1rem;
  opacity: ${props => props.$loading ? '0.15' : '1'}
`;

export default function TaskCounter({ taskCompleted, totalTask, loading, task }) {
  return (
    <Counter $loading={loading}>
      {(totalTask === 0 && !loading)
        ? "Bienvenido, crea tu primera tarea"
        : (loading ? "Cargando sus tareas"
          : (!loading && task.every(tarea => tarea.completed)
            ? `Usted completó todas sus ${taskCompleted} tareas`
            : `¡Hola! Llevas ${taskCompleted} de ${totalTask} tarea${totalTask === 1
              ? ""
              : "s"} completadas`))}
    </Counter>
  );
}
