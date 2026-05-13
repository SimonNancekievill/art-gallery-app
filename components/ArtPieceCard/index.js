import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import ColorPalette from "../ColorPalette";
import CommentsForm from "../CommentsForm";
import {
  ColorWrapper,
  FormWrapper,
  DetailWrapper,
  ArtistYear,
} from "./ArtPieceCard.styled";
import {
  ImageWrap,
  StyledImage,
  FavoriteButtonWrap,
  CardTitle,
  CardArtist,
} from "@/components/ArtPiecePreview/ArtPiecePreview.styled";

export default function ArtPieceCard({
  artPieces,
  foundArtPiece,
  setArtPieces,
}) {
  const { slug, imageSource, name, artist, colors, genre, year } =
    foundArtPiece;

  return (
    <>
      <span>
        <Link href="/art-pieces">&lt; Go Back to Overview</Link>
      </span>
      <DetailWrapper aria-label="Art Piece Section">
        <ImageWrap>
          <Link href={`/art-pieces/${slug}`}>
            <StyledImage
              src={imageSource}
              alt={name}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          <FavoriteButtonWrap>
            <FavoriteButton
              onToggleFavorite={() =>
                setArtPieces(ToggleFavorite(artPieces, foundArtPiece))
              }
              isFavorite={foundArtPiece.isFavorite}
            />
          </FavoriteButtonWrap>
        </ImageWrap>
        <ColorWrapper aria-label="Colors Section">
          <ColorPalette colors={colors} />
        </ColorWrapper>
        <CardTitle>
          {artist}: {name}
        </CardTitle>
        <ArtistYear>
          {year}
          <br></br>
          {genre}
        </ArtistYear>
      </DetailWrapper>
      <FormWrapper aria-label="Form Section">
        <CommentsForm
          artPieces={artPieces}
          artPiece={foundArtPiece}
          setArtPieces={setArtPieces}
        />
      </FormWrapper>
    </>
  );
}
