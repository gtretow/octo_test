import styled from "styled-components";

export const LandingPageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray[100]};
  left: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  overflow-x: hidden;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background: ${(props) => props.theme.colors.white};
  height: 90vh;
  box-shadow: 5px 5px 5px 5px lightgray;
  border-radius: 5px;
  overflow-y: scroll;
  scrollbar-width: thin;
  margin-left: 10%;
`;

export const Container = styled.div`
  height: 500px
  text-align: center;
  dispay: flex;
`;

export const MainHeading = styled.h1`
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const TableComponent = styled.table`
  text-align: center;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  padding-bottom: 20px;
  table-layout: fixed;
  height: 400px;
`;

export const TableColumn = styled.tr`
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 250ms linear 0s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[100]};
  }
`;

export const TableItem = styled.td`
  width: 25%;
  height: 80px;
  text-align: left;
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  padding-left: 8px;
  padding-top: 30px;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
`;

export const TableInfo = styled.th`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding-top: 12px;
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
  margin-top: 7px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;

export const ButtonContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const InfiniteTable = styled.div`
  height: 60%;
  overflow-y: auto;
  min-height: 400px;
  width: 80%;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.primary[600]} lightgray;
`;

export const HeadingContainer = styled.div`
text-align: center;
min-height: 120px;
height: 10%
` 