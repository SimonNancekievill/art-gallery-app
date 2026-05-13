import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  gap: 32px;
  list-style: none;
  padding: 24px;
  margin: 0;
`;
