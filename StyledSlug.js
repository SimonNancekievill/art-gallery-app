import styled from "styled-components";

export const SpanWrapper = styled.div`
  padding: 16px 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledPageTitle = styled.h1`
  font-family: Raleway, sans-serif;
  /* text-transform: uppercase; */
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.07em;
  padding: 24px 24px 0;
  margin: 0;
  max-width: calc(100% - 48px);
`;
export const PageWrapper = styled.main`
  padding: 24px 0 0;

  h1 {
    padding: 0 24px;
    margin: 0 0 8px;
  }
`;
