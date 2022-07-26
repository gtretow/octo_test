import React, { MouseEventHandler } from "react";
import * as S from ".";

type Props = {
  title: string;
  height: string;
  width: string;
  action: MouseEventHandler;
};

const Button = ({ title, height, width, action }: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Button onClick={action} height={height} width={width}>
        <S.Paragraph>{title}</S.Paragraph>
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;
