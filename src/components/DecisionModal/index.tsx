import styled from "styled-components";

export const WrapperModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-size: cover;
  z-index: 3000;
`;

export const DecisionModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 40%;
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    margin-right: 10%;
    margin-left: 10%;
  }
`;
