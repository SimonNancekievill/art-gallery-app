import NavBar from "@/components/NavBar";
import ArtPieceCard from "@/components/ArtPieceCard";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import { SpanWrapper, StyledPageTitle } from "../../StyledSlug";
import useSWR from "swr";

export default function ArtPiecesDetail({ artPieces, setArtPieces }) {
  const router = useRouter();
  const { slug } = router?.query;

  const { data, isLoading, mutate } = useSWR(`/api/artpieces/${slug}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const foundArtPiece = data;
  return (
    <>
      <Head>
        <title>{foundArtPiece.name}</title>
      </Head>
      <NavBar />
      <SpanWrapper>
        <Link href="/art-pieces">← OVERVIEW</Link>
        <FavoriteButton
          onToggleFavorite={() =>
            setArtPieces(ToggleFavorite(artPieces, foundArtPiece))
          }
          isFavorite={foundArtPiece.isFavorite}
          $variant="detail"
        />
      </SpanWrapper>
      <StyledPageTitle>{foundArtPiece.name}</StyledPageTitle>
      <ArtPieceCard
        artPieces={artPieces}
        foundArtPiece={foundArtPiece}
        setArtPieces={setArtPieces}
      />
    </>
  );
}
