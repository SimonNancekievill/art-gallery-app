import Head from "next/head";
import NavBar from "@/components/NavBar";
import { GetRandomArtPiece } from "@/libs/artPieces";
import Spotlight from "@/components/Spotlight";
import { PageWrapper } from "@/StyledSlug";

export default function HomePage({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      <NavBar />
      <PageWrapper>
        <h1>Spotlight</h1>
        <Spotlight
          artPieces={artPieces}
          artPiece={GetRandomArtPiece(artPieces)}
          setArtPieces={setArtPieces}
        />
      </PageWrapper>
    </>
  );
}
