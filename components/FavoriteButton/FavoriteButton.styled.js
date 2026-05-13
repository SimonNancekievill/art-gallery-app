import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 8px;
  flex-shrink: 0;
  color: ${(props) => (props.$variant === "detail" ? "#1d1d1f" : "white")};
  pointer-events: ${(props) => (props.$isDisabled ? "none" : "all")};
`;
