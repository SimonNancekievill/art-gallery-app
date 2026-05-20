import ColorPalette from "../ColorPalette";
import Link from "next/link";
import CommentsForm from "../CommentsForm";
import {
  ColorWrapper,
  FormWrapper,
  DetailWrapper,
  ArtistYear,
  ArtistGenre,
} from "./ArtPieceCard.styled";
import {
  ImageWrap,
  StyledImage,
  CardArtist,
  StyledLink,
} from "@/components/ArtPiecePreview/ArtPiecePreview.styled";
import { ArtistWrapper } from "@/StyledSlug";

export default function ArtPieceCard({
  artPieces,
  foundArtPiece,
  setArtPieces,
}) {
  const { slug, imageSource, name, artist, colors, genre, year } =
    foundArtPiece;

  return (
    <>
      <DetailWrapper aria-label="Art Piece Section">
        <ImageWrap>
          <Link href={`/art-pieces/${slug}`}>
            <StyledImage src={imageSource} alt={name} fill />
          </Link>
        </ImageWrap>
        <ColorWrapper aria-label="Colors Section">
          <ColorPalette colors={colors} />
        </ColorWrapper>
        <ArtistWrapper>
          <CardArtist>{artist}</CardArtist>
          <ArtistYear>{year}</ArtistYear>
        </ArtistWrapper>
        <ArtistGenre>{genre}</ArtistGenre>
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
