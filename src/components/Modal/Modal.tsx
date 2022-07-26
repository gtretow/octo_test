import React, { useState, MouseEventHandler } from "react";
import * as S from ".";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";

interface props {
  handleCameraModel: MouseEventHandler;
  confirmCameraCreation: MouseEventHandler;
}

const Modal = ({ handleCameraModel, confirmCameraCreation }: props) => {
  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.CameraHeader>
          <h1>Cadastrar nova câmera</h1>
          <p onClick={handleCameraModel}>X</p>
        </S.CameraHeader>
        <S.Form>
          <S.FieldSet>
            <S.Label>
              <S.Span>Escolha um nome para sua nova câmera. </S.Span>
              <S.Input placeholder="Nome" type="text" id="text1" />
            </S.Label>
          </S.FieldSet>

          <S.FieldSet>
            <S.Label>
              <S.Span>Preencha o número de série da sua câmera. </S.Span>
              <S.Input type="text" id="text1" placeholder="Número de Série" />
            </S.Label>
          </S.FieldSet>
          <S.FieldSet>
            <S.Label>
              <S.Span>Selecione o fabricante da sua câmera </S.Span>
              <SelectMenu id="selectMenu" />
            </S.Label>
          </S.FieldSet>
          <S.FieldSet>
            <Button
              action={confirmCameraCreation}
              title="Criar"
              height="40px"
              width="150px"
            />
          </S.FieldSet>
        </S.Form>
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default Modal;
