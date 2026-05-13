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
  aspect-ratio: 3 / 4;
  border-radius: 4px;
  overflow: hidden;
`;
export const FavoriteButtonWrapGallery = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 12px;
`;
export const FavoriteButtonWrapDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 16px;
  gap: 12px;
`;
export const FavoriteButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 12px;
`;
export const CardTitle = styled.h3`
  margin: 0;
  line-height: 1.3;
  font-size: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
`;
export const CardArtist = styled.p`
  margin: 12px 12px 0px 0px;
  line-height: 1.3;
  font-size: 0.9rem;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  letter-spacing: -0.01em;
`;
