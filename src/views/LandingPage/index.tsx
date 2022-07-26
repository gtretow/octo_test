import styled from "styled-components";

export const LandingPageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray[100]};
  left: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background: ${(props) => props.theme.colors.white};
  height: 900px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const MainHeading = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TableComponent = styled.table`
  text-align: center;
  display: flex;
  flex-direction: column;
  background: red;
  width: 80%;
  height: 600px;
  padding-bottom: 20px;
`;

export const TableColumn = styled.tr`
  padding-top: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TableItem = styled.td`
  width: 20%;
  text-align: center;
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const TableInfo = styled.th`
  width: 20%;
  height: 50px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  background: blue;
  width: 80%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
