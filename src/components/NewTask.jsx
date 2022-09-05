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
  position:relative;
`;

export default function NewTask(props) {
  const open_close = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <Add>
      <AiFillPlusCircle onClick={open_close} size="4rem" color="#9fd3c7" />
    </Add>
  );
}
