import styled from "styled-components";
import Link from "next/link";
export const StyledNav = styled.nav`
  position: fixed;
  padding: 16px 24px;
  top: 16px;
  left: 16px;
  width: calc(100vw - 30px);
  height: 60px;
  color: white;
  background-color: rgba(61, 61, 61, 0.4);
  border-radius: 10px;
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
  border-right: 1px solid #0a0a0b;

  &.active {
    background-color: #1f2023;
    font-weight: bold;
  }

  &:hover {
    background-color: #1f2023;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }
`;
export const StyledLink = styled(Link)`
  font-family: DBMono, monospace;
  font-weight: 200;
  font-size: 0.8rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;
