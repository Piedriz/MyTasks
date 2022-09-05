import React from "react";
import styled from "styled-components";

const TaskSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 28rem;
    height: auto;
    max-height: 120rem;
    background-color: #142d4c;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function TaskContainer(props) {
    return (
        <TaskSection>
            {props.children}
        </TaskSection>
    );

}