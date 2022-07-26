import React from "react";
import * as S from ".";

type Props = {};

const SelectMenu = (props: Props) => {
  return (
    <S.SelectWrapper>
      <S.Select>
        <S.Options>item1</S.Options>
        <S.Options>item2</S.Options>
        <S.Options>item3</S.Options>
      </S.Select>
      <S.CustomArrow></S.CustomArrow>
    </S.SelectWrapper>
  );
};

export default SelectMenu;
