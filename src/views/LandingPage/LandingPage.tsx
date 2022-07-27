import React, { useState, useEffect } from "react";
import * as S from ".";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

interface CameraProps {
  name: string;
  serialNumber: string;
  manufacturer: string;
  id: string;
}

const LandingPage: React.FC = () => {
  const [openCameraModal, setOpenCameraModal] = useState<boolean>(false);
  const [cameras, setCameras] = useState<CameraProps[]>([
    {
      id: "123123",
      name: "teste",
      manufacturer: "teste",
      serialNumber: "teste",
    },
  ]);

  useEffect(() => {
    if (cameras) {
      return;
    }

    let response: any;

    try {
      response = axios.get(`http://localhost:5000/cameraData`);
    } catch (error) {
      console.log("error trying to update data", error);
    }

    setCameras(response);

    //getCamerasInfo
  }, []);

  function deleteCameraEntry(id: string) {
    let response: any;
    try {
      response = axios.delete(`http://localhost:5000/customers/${id}`);
    } catch (error) {
      console.log("error trying to delete data", error);
    }
    return;
  }

  function createCamera(data: any) {
    let reponse: any;
    try {
      reponse = axios.post(`http://localhost:5000/customers`, [
        ...cameras,
        data,
      ]);
    } catch (error) {
      console.log("error trying to create data", error);
    }

    return handleModal();
  }

  function handleModal() {
    setOpenCameraModal(!openCameraModal);
  }

  return (
    <S.LandingPageWrapper>
      <S.CenterDiv>
        <S.MainHeading>Câmeras Cadastradas</S.MainHeading>
        <S.Paragraph>
          Todas suas câmeras cadastradas serão listadas abaixo:
        </S.Paragraph>
        <S.Container></S.Container>
        <S.InfiniteTable>
          <S.TableComponent>
            <S.TableHead>
              <S.TableColumn>
                <S.TableInfo>Nome da câmera</S.TableInfo>
                <S.TableInfo>Fabricante</S.TableInfo>
                <S.TableInfo>Número de Série</S.TableInfo>
                <S.TableInfo></S.TableInfo>
              </S.TableColumn>
            </S.TableHead>

            {cameras.map((items, idx) => {
              return (
                <S.TableColumn key={items.id}>
                  <S.TableItem>
                    <S.TableContent>{items.name}</S.TableContent>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableContent>{items.manufacturer}</S.TableContent>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableContent>{items.serialNumber}</S.TableContent>
                  </S.TableItem>
                  <S.TableItem>
                    <Button
                      action={() => deleteCameraEntry(items.id)}
                      width="80px"
                      height="30px"
                      title="Excluir"
                    />
                  </S.TableItem>
                </S.TableColumn>
              );
            })}
          </S.TableComponent>
        </S.InfiniteTable>

        <S.ButtonContainer>
          <Button
            action={handleModal}
            height="40px"
            width="150px"
            title="Adicionar Câmera"
          />
        </S.ButtonContainer>
      </S.CenterDiv>
      {openCameraModal && (
        <Modal
          handleCameraModel={handleModal}
          confirmCameraCreation={createCamera}
        />
      )}
    </S.LandingPageWrapper>
  );
};

export default LandingPage;
