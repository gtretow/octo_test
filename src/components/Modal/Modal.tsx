import React from "react";
import * as S from ".";
import SelectMenu from "../SelectMenu/SelectMenu";

type Props = {};

const Modal = (props: Props) => {
  return (
    <S.ModalWrapper>
      <S.Modal>
        <SelectMenu />
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default Modal;
