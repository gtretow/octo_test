import React from "react";
import * as S from ".";
import Button from "../../components/Button/Button";

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
              <Button width="80px" height="30px" title="Excluir" />
            </S.TableItem>
          </S.TableColumn>
          <S.TableColumn>
            <S.TableItem>Camera1</S.TableItem>
            <S.TableItem>Fabricante1</S.TableItem>
            <S.TableItem>134134134l1</S.TableItem>
            <S.TableItem>
              <Button width="80px" height="30px" title="Excluir" />
            </S.TableItem>
          </S.TableColumn>
        </S.TableComponent>
        <S.ButtonContainer>
          <Button height="40px" width="150px" title="Adicionar Câmera" />
        </S.ButtonContainer>
      </S.CenterDiv>
    </S.LandingPageWrapper>
  );
};

export default LandingPage;
