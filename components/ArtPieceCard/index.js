import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import ColorPalette from "../ColorPalette";
import CommentsForm from "../CommentsForm";
import { CardWrapper, ColorWrapper, FormWrapper } from "./ArtPieceCard.styled";
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
      <section aria-label="Art Piece Section">
        <ImageWrap>
          <Link href={`/art-pieces/${slug}`}>
            <StyledImage
              src={imageSource}
              alt={name}
              width="300"
              height="150"
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
        <p>{genre}</p>
        <CardTitle>
          {artist}: {name}
        </CardTitle>
        <CardArtist>{year}</CardArtist>
      </section>
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
