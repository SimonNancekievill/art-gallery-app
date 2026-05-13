import FavoriteIcon from "@/assets/bookmark.svg";
import { StyledButton } from "./FavoriteButton.styled";

export default function FavoriteButton({
  onToggleFavorite,
  isFavorite,
  disabled,
  $variant,
}) {
  function handleClick() {
    onToggleFavorite();
  }

  return (
    <StyledButton
      onClick={handleClick}
      $isFavorite={isFavorite}
      $isDisabled={disabled}
      disabled={disabled ? "disabled" : null}
      $variant={$variant}
    >
      <FavoriteIcon />
    </StyledButton>
  );
}
