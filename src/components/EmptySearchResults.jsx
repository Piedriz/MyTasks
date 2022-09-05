import styled from "styled-components";

const EmptySMessage = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align:center;
    padding-top:2rem;
`;

export default function EmptySearchResults(props) {
    return (
        <EmptySMessage>No existe la tarea {props.searchValue}</EmptySMessage>
    )
}
