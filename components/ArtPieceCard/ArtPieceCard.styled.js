import styled from "styled-components";

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 4px;
`;

export const ColorWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
  padding: 0;
  grid-column: 1;
  grid-row: 2;
`;

export const FormWrapper = styled.section`
  border-top: solid 1px #dddddd;
  margin-bottom: 75px;
`;
