import React from "react";
import * as S from ".";

const LandingPage: React.FC = () => {
  return (
    <S.LandingPageWrapper>
      <S.CenterDiv>
        <S.MainHeading>Câmeras Cadastradas</S.MainHeading>
        <S.Paragraph>
          Todas suas câmeras cadastradas serão listadas abaixo:
        </S.Paragraph>
        <S.Container></S.Container>
        <S.TableComponent>
          <S.TableColumn>
            <S.TableInfo>Nome da câmera</S.TableInfo>
            <S.TableInfo>Fabricante</S.TableInfo>
            <S.TableInfo>Número de Série</S.TableInfo>
            <S.TableInfo></S.TableInfo>
          </S.TableColumn>
          <S.TableColumn>
            <S.TableItem>Camera1</S.TableItem>
            <S.TableItem>Fabricante1</S.TableItem>
            <S.TableItem>134134134l1</S.TableItem>
            <S.TableItem>
              <button>Excluir</button>
            </S.TableItem>
          </S.TableColumn>
          <S.TableColumn>
            <S.TableItem>Camera1</S.TableItem>
            <S.TableItem>Fabricante1</S.TableItem>
            <S.TableItem>134134134l1</S.TableItem>
            <S.TableItem>
              <button>Excluir</button>
            </S.TableItem>
          </S.TableColumn>
        </S.TableComponent>
        <S.ButtonContainer>
          <button>Adicionar Câmera</button>
        </S.ButtonContainer>
      </S.CenterDiv>
    </S.LandingPageWrapper>
  );
};

export default LandingPage;
