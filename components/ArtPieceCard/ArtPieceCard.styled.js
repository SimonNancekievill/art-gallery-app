import styled from "styled-components";

// export const CardWrapper = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(1fr));
//   gap: 24px;
//   list-style: none;
//   padding: 24px;
//   margin: 0;
// `;

export const ColorWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
  padding: 0;
  margin: 12px 0px 0px 0px;
`;

export const FormWrapper = styled.section`
  border-top: solid 1px #dddddd;
  margin-bottom: 75px;
`;

export const DetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 24px;
  margin: 0;
`;
export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ArtistYear = styled.p`
  margin: 6px 0px 0px 0px;
  line-height: 1.3;
  font-size: 0.9rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  letter-spacing: -0.01em;
`;
export const ArtistGenre = styled.p`
  margin: 6px 12px 6px 0px;
  line-height: 1.3;
  font-size: 0.9rem;
  font-family: Raleway, sans-serif;
  font-weight: 100;
  color: #999;
  letter-spacing: -0.01em;
`;
