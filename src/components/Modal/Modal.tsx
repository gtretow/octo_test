import React, { useState } from "react";
import * as S from ".";
import SelectMenu from "../SelectMenu/SelectMenu";

interface props {}

const Modal = (props: props) => {
  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.Form>
          <div className="fieldset">
            <label htmlFor="text1">Text</label>
            <input type="text" id="text1" placeholder="Field Text" />
          </div>

          <div className="fieldset">
            <label htmlFor="text1">Text</label>
            <input type="text" id="text1" placeholder="Field Text" />
          </div>
          <div>
            <label htmlFor="selectMenu">Text</label>
            <SelectMenu id="selectMenu" />
          </div>
          <div className="fieldset">
            <button type="submit">Submit Form</button>
          </div>
        </S.Form>
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default Modal;
