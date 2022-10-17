import React from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const Add = styled.div`
  cursor: pointer;
  width: 4rem;
  margin: 2rem auto;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function NewTask(props) {
 
  return (
    <Add onClick={props.onClick}>
      <AiFillPlusCircle size="4rem" color="#9fd3c7" />
    </Add>
  );
}
