import ArtPiecePreview from "@/components/ArtPiecePreview";
import { ListItem, ListWrapper } from "./FavoriteList.styled";

export default function FavoritesList({ artPieces, setArtPieces }) {
  const favoritePieces = artPieces.filter((artPiece) => {
    const info = artPieces?.find((item) => item.slug === artPiece.slug);

    return info?.isFavorite;
  });

  return (
    <ListWrapper>
      {favoritePieces?.map((artPiece) => (
        <ListItem key={artPiece.slug}>
          <ArtPiecePreview
            artPieces={artPieces}
            artPiece={artPiece}
            setArtPieces={setArtPieces}
          />
        </ListItem>
      ))}
    </ListWrapper>
  );
}
