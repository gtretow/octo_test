import styled from "styled-components";
import { theme } from "../../styles/base";

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
  box-shadow: 5px 5px 5px 5px lightgray;
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
  background: ${(props) => props.theme.colors.white};
  width: 80%;
  height: 600px;
  padding-bottom: 20px;
`;

export const TableColumn = styled.tr`
  min-height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TableItem = styled.td`
  width: 100%;
  height: 100%;
  text-align: left;
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 30px;
`;

export const TableInfo = styled.th`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary[600]};
  color: white;
  padding-left: 10px;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const TableContent = styled.p`
  align-items: center;
  display: flex;
  margin-top: 7px;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  background: ${(props) => props.theme.colors.white};
  width: 80%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
