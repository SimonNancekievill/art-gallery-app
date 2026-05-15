import FavoritesList from "@/components/FavoritesList";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { PageWrapper } from "@/StyledSlug";

export default function Favorites({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <PageWrapper>
        <NavBar />
        <h1>Favorites</h1>
        <FavoritesList artPieces={artPieces} setArtPieces={setArtPieces} />
      </PageWrapper>
    </>
  );
}
