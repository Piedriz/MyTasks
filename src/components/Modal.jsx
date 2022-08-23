import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { TaskContext } from "../context";
import { AiFillPlusCircle } from "react-icons/ai";
import { Add } from "./NewTask";

export const Close = styled(Add)`
  &:hover {
    transform: scale(1.2) rotate(45deg);
  }
`;

const Div = styled.div`
  transition: 2s;
  background: rgba(32, 35, 41, 0.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

function Modal({ children }) {
  const { openModal, setOpenModal } = React.useContext(TaskContext);
  return ReactDOM.createPortal(
    <Div>
      {children}
      <Close>
        <AiFillPlusCircle
          onClick={() => setOpenModal(!openModal)}
          size="4rem"
          color="#9fd3c7"
        />
      </Close>
    </Div>,
    document.getElementById("modal")
  );
}
export default Modal;
