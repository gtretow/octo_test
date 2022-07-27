import React, { MouseEventHandler } from "react";
import * as S from ".";

type Props = {
  title: string;
  height: string;
  width: string;
  action: MouseEventHandler;
  disableButton?: boolean;
  color?: string;
};

const Button = ({
  title,
  height,
  width,
  action,
  disableButton,
  color,
}: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Button
        disabled={disableButton}
        onClick={action}
        height={height}
        width={width}
        background={color}
      >
        <S.Paragraph>{title}</S.Paragraph>
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;
