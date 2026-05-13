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
      {isFavorite ? "♥" : "♡"}
    </StyledButton>
  );
}
