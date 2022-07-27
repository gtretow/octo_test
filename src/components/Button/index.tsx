import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  background?: string;
}

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export const Button = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) =>
    props.background === "cancel"
      ? props.theme.colors.red[600]
      : props.theme.colors.primary[600]};
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border: none;
  padding-bottom: 5px;
  padding-top: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
`;
