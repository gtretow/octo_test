import React from "react";
import * as S from ".";
import {
  FaHouseUser,
  FaCamera,
  FaBook,
  FaComment,
  FaQuestion,
  FaHandsHelping,
} from "react-icons/fa";

const Sidebar: React.FC = () => (
  <S.Navbar>
    <S.SideList>
      <S.NavbarItem>
        <S.Link href="#">
          <FaHouseUser style={{ marginRight: 5 }} /> Início
        </S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">
          <FaCamera style={{ marginRight: 5 }} /> Câmeras Cadastradas
        </S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">
          <FaBook style={{ marginRight: 5 }} />
          Dashboard
        </S.Link>
      </S.NavbarItem>

      <S.NavbarItem>
        <S.Link href="#">
          <FaHandsHelping style={{ marginRight: 5 }} /> Empresas Parceiras
        </S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">
          <FaComment style={{ marginRight: 5 }} /> Contatos
        </S.Link>
      </S.NavbarItem>
      <S.NavbarItem>
        <S.Link href="#">
          <FaQuestion style={{ marginRight: 5 }} /> Sobre a Empresa{" "}
        </S.Link>
      </S.NavbarItem>
    </S.SideList>
  </S.Navbar>
);

export default Sidebar;
