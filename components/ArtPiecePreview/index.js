import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import {
  ImageWrap,
  StyledImage,
  FavoriteButtonWrap,
  CardTitle,
  CardArtist,
  StyledLink,
} from "./ArtPiecePreview.styled";

export default function ArtPiecePreview({ artPieces, artPiece, setArtPieces }) {
  const { imageSource, name, slug, artist } = artPiece;

  return (
    <section aria-label="Art Piece Section">
      <ImageWrap>
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage src={imageSource} alt={name} fill />
        </Link>
        <FavoriteButtonWrap>
          <FavoriteButton
            $variant="gallery"
            onToggleFavorite={() =>
              setArtPieces(ToggleFavorite(artPieces, artPiece))
            }
            isFavorite={artPiece.isFavorite}
          />
        </FavoriteButtonWrap>
      </ImageWrap>
      <CardTitle>{name}</CardTitle>
      <CardArtist>{artist}</CardArtist>
    </section>
  );
}
