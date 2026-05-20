import styled from "styled-components";

export const SpanWrapper = styled.div`
  padding: 16px 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledPageTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;
  padding: 24px 24px 0;

  @media (min-width: 768px) {
    font-size: clamp(4rem, 8vw, 8rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 0.9;
  }
`;
export const PageWrapper = styled.main`
  padding: 24px 0 0;

  h1 {
    padding: 0 24px;
    margin: 0 0 8px;
  }
`;
export const ArtistWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;
