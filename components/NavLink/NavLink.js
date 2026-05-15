import { StyledLink } from "../NavBar/NavBar.styled";
import Scramble from "@/hooks/scramble";

export default function NavLink({ href, children, isActive }) {
  const display = Scramble(children, isActive);

  return <StyledLink href={href}>{display}</StyledLink>;
}
