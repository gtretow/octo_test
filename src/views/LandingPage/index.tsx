import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray[100]};
  left: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;

  width: 50%;
  background: ${(props) => props.theme.colors.white};
  height: 900px;
`;
