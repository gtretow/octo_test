import React, { useState, useEffect } from "react";
import * as S from ".";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

interface CameraProps {
  name: string;
  serialNumber: string;
  manufacturer: string;
}

const LandingPage: React.FC = () => {
  const [openCameraModal, setOpenCameraModal] = useState<boolean>(false);
  const [cameras, setCameras] = useState<CameraProps[]>([
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
    { name: "teste", manufacturer: "teste", serialNumber: "teste" },
  ]);

  useEffect(() => {
    if (cameras) {
      return;
    }

    //getCamerasInfo
  }, []);

  function deleteCameraEntry() {
    return;
  }

  function createCamera(data: any) {
    console.log("data=>>>", data);
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
                <S.TableColumn key={idx}>
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
                      action={deleteCameraEntry}
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
