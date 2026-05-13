import NavBar from "@/components/NavBar";
import ArtPieceCard from "@/components/ArtPieceCard";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FavoriteButtonWrapDetail } from "@/components/ArtPiecePreview/ArtPiecePreview.styled";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import { SpanWrapper, StyledPageTitle } from "./Styled[slug]";

export default function ArtPiecesDetail({ artPieces, setArtPieces }) {
  const router = useRouter();
  const { slug } = router?.query;
  const foundArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  return (
    <>
      <Head>
        <title>{foundArtPiece.name}</title>
      </Head>
      <SpanWrapper>
        <Link href="/art-pieces">&lt; Go Back to Overview</Link>
      </SpanWrapper>
      <FavoriteButtonWrapDetail>
        <StyledPageTitle>{foundArtPiece.name}</StyledPageTitle>
        <FavoriteButton
          onToggleFavorite={() =>
            setArtPieces(ToggleFavorite(artPieces, foundArtPiece))
          }
          isFavorite={foundArtPiece.isFavorite}
          $variant="detail"
        />
      </FavoriteButtonWrapDetail>
      <ArtPieceCard
        artPieces={artPieces}
        foundArtPiece={foundArtPiece}
        setArtPieces={setArtPieces}
      />

      <NavBar />
    </>
  );
}
