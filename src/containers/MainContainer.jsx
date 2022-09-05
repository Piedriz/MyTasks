import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

export default function MainContainer(props) {
    return <Container>{props.children}</Container>;
}
