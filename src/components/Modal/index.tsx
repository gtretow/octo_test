import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-size: cover;
`;

export const Modal = styled.div`
  width: 700px;
  height: 700px;
  background: ${(props) => props.theme.colors.gray[100]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;

  @media(max-height: 600px) {
    height: 90%;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FieldSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin-bottom: 10%;

  @media(max-height: 600px) {
    margin-bottom: 5%;
  }
`;

export const Input = styled.input`
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 0px 12px 0 12px;
  height: 60px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(${(props) => props.theme.colors.gray[700]}, 0.02);
  box-shadow: inset 0 -1px 0 rgba(${(props) => props.theme.colors.gray[700]}, 0.3);
  color: ${(props) => props.theme.colors.gray[700]};
  transition: all 0.15s ease;
  border-radius: 5px;

  &:hover {
    background: rgba(${(props) => props.theme.colors.gray[700]}, 0.04);
    box-shadow: inset 0 -1px 0 rgba(${(props) => props.theme.colors.gray[700]}, 0.5);
  }
  &:focus {
    background: rgba(${(props) => props.theme.colors.gray[700]}, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 ${(props) => props.theme.colors.primary[600]};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.span`
  display: flex;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: 2px;
`;

export const CameraHeader = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.primary[600]};
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.lg};
    margin-left: 10px;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: bold;
    margin-right: 40px;
    cursor: pointer;
    transition: all 250ms linear 0s;

    &:hover {
      color: ${(props) => props.theme.colors.gray[200]};
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.red[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
