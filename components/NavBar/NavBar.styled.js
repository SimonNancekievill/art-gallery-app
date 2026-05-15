import styled from "styled-components";
import Link from "next/link";
export const StyledNav = styled.nav`
  position: fixed;
  padding: 16px;
  top: 0;
  left: 16px;
  width: calc(100vw - 30px);
  height: 60px;
  color: white;
  background-color: rgba(61, 61, 61, 0.4);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  z-index: 100;
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;

    &:hover {
      font-weight: 600;
    }
  }
`;
export const StyledLink = styled(Link)`
  font-family: DBMono, monospace;
  font-weight: 200;
  font-size: clamp(14px, 0.99vw, 14px);
  letter-spacing: -0.08em;
  text-transform: uppercase;
`;
