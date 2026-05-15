import { useRouter } from "next/router";
import { StyledNav, NavList, NavItem, StyledLink } from "./NavBar.styled";
import NavLink from "../NavLink/NavLink";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNav>
      <NavList>
        <NavItem className={router.pathname === "/" ? "active" : ""}>
          <NavLink href="/" isActive={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </NavItem>
        <NavItem
          className={router?.pathname.includes("/art-pieces") ? "active" : ""}
        >
          <NavLink
            href="/art-pieces"
            isActive={router?.pathname.includes("/art-pieces")}
          >
            Art Pieces
          </NavLink>
        </NavItem>
        <NavItem className={router.pathname === "/favorites" ? "active" : ""}>
          <NavLink
            href="/favorites"
            isActive={router.pathname === "/favorites"}
          >
            Favorites
          </NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
}
