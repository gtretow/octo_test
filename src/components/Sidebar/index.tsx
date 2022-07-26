import styled from "styled-components";

export const Navbar = styled.nav`
  height: 100vh;
  width: 200px;
  display: block;
  position: fixed;
  background: ${(props) => props.theme.colors.primary[700]};
`;

export const SideList = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const NavbarItem = styled.li`
  list-style: none;
  padding-top: 24px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${(props) => props.theme.fontSizes.md};
  transition: all 250ms linear 0s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
