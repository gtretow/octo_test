import React, { EventHandler, useState } from "react";
import * as S from ".";

type Props = {
  id: string;
  value: string;
  modifyManufacturer: (message: string) => void;
  options: Manufacturers[];
  error?: boolean;
};

export interface Manufacturers {
  name: string;
}

const SelectMenu = ({
  id,
  value,
  modifyManufacturer,
  options,
  error,
}: Props) => {
  return (
    <S.SelectWrapper>
      <S.Select
        value={value}
        onChange={(evt) => modifyManufacturer(evt.target.value)}
        id={id}
      >
        <S.Options value="" selected disabled hidden>
          Selecione uma opção
        </S.Options>

        {options.map((opt, idx) => {
          return (
            <S.Options value={opt.name} key={idx}>
              {opt.name}
            </S.Options>
          );
        })}
      </S.Select>
      <S.CustomArrow></S.CustomArrow>
      {error && <span>erro aqui</span>}
    </S.SelectWrapper>
  );
};

export default SelectMenu;
