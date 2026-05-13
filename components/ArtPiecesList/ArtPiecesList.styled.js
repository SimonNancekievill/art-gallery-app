import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-auto-columns: 85vw;
  gap: 24px;
  list-style: none;
  padding: 24px;
  margin: 0;
  overflow-x: auto;
  grid-auto-flow: column;
`;
