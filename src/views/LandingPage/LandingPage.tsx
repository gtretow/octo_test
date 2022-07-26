import React from "react";
import * as S from ".";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

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
            <S.TableItem>
              <S.TableContent>Camera1</S.TableContent>
            </S.TableItem>
            <S.TableItem>
              <S.TableContent>Fabrricante</S.TableContent>
            </S.TableItem>
            <S.TableItem>
              <S.TableContent>134151464fsadfs</S.TableContent>
            </S.TableItem>
            <S.TableItem>
              <Button width="80px" height="30px" title="Excluir" />
            </S.TableItem>
          </S.TableColumn>
        </S.TableComponent>
        <S.ButtonContainer>
          <Button height="40px" width="150px" title="Adicionar Câmera" />
        </S.ButtonContainer>
      </S.CenterDiv>
      {/* <Modal /> */}
    </S.LandingPageWrapper>
  );
};

export default LandingPage;
