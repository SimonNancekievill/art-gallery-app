import { useRouter } from "next/router";
import { StyledNav, NavList, NavItem, StyledLink } from "./NavBar.styled";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNav>
      <NavList>
        <NavItem className={router.pathname === "/" ? "active" : ""}>
          <StyledLink href="/">Spotlight</StyledLink>
        </NavItem>
        <NavItem
          className={router?.pathname.includes("/art-pieces") ? "active" : ""}
        >
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </NavItem>
        <NavItem className={router.pathname === "/favorites" ? "active" : ""}>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
}
