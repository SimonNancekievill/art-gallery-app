import styled from "styled-components";

export const ColorCircle = styled.div`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
