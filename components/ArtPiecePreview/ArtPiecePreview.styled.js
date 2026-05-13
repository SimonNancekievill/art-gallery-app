import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: auto;
  display: block;
`;

export const ImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4/3;
`;
export const FavoriteButtonWrap = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
export const CardTitle = styled.h3`
  margin: 8px 12px 6px 0px;
  line-height: 1.3;
  font-size: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
`;
export const CardArtist = styled.p`
  margin: 0px 12px 6px 0px;
  line-height: 1.3;
  font-size: 0.9rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  letter-spacing: -0.01em;
`;
