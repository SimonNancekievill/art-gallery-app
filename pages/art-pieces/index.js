import ArtPiecesList from "@/components/ArtPiecesList";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { PageWrapper } from "./Styled[slug]";

export default function ArtPieces({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <PageWrapper>
        <h1>Art Gallery</h1>
        <ArtPiecesList artPieces={artPieces} setArtPieces={setArtPieces} />
      </PageWrapper>
      <NavBar />
    </>
  );
}
