import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import { SpotlightWrapper } from "./Spotlight.styled";
import {
  ImageWrap,
  StyledImage,
  FavoriteButtonWrap,
  CardTitle,
  CardArtist,
} from "../ArtPiecePreview/ArtPiecePreview.styled";

export default function Spotlight({ artPieces, artPiece, setArtPieces }) {
  const { imageSource, name, slug, artist } = artPiece;
  return (
    <SpotlightWrapper aria-label="Art Piece Section">
      <ImageWrap>
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage src={imageSource} alt={name} fill />
        </Link>
        <FavoriteButtonWrap>
          <FavoriteButton
            onToggleFavorite={() =>
              setArtPieces(ToggleFavorite(artPieces, artPiece))
            }
            isFavorite={artPiece.isFavorite}
          />
        </FavoriteButtonWrap>
      </ImageWrap>
      <CardTitle>{name}</CardTitle>
      <CardArtist>{artist}</CardArtist>
    </SpotlightWrapper>
  );
}
