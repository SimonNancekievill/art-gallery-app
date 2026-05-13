import Link from "next/link";
import ColorPalette from "../ColorPalette";
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
        </ImageWrap>
        <ColorWrapper aria-label="Colors Section">
          <ColorPalette colors={colors} />
        </ColorWrapper>
        <CardArtist>{artist}</CardArtist>
        <ArtistYear>{year}</ArtistYear>
        <ArtistGenre>{genre}</ArtistGenre>{" "}
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
