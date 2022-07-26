import React from "react";
import * as S from ".";

const Sidebar: React.FC = () => (
  <S.Navbar>
    <S.SideList>
      <S.NavbarItem>
        <S.Link href="#">Início</S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">Câmeras Cadastradas</S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">Dashboard</S.Link>
      </S.NavbarItem>

      <S.NavbarItem>
        <S.Link href="#">Empresas Parceiras</S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">Contatos</S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">Sobre a Empresa </S.Link>
      </S.NavbarItem>
    </S.SideList>
  </S.Navbar>
);

export default Sidebar;
