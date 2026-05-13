import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;

  pointer-events: ${(props) => (props.$isDisabled ? "none" : "all")};

  & svg {
    fill: ${(props) =>
      props.$isFavorite
        ? props.$variant === "detail"
          ? "#1d1d1f"
          : "white"
        : "none"};
    stroke: ${(props) => (props.$variant === "detail" ? "#1d1d1f" : "white")};
  }
`;
