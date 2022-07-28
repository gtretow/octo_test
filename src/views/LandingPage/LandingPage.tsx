import React, { useState, useEffect } from "react";
import * as S from ".";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import {
  getCameraData,
  createNewCameraEntry,
  deleteCameraEntry,
} from "../../Utils/controllers";

interface Promise {
  data: CameraProps[];
}
interface CameraProps {
  name: string;
  serialNumber: string;
  manufacturer: string;
  id: string;
}

const LandingPage: React.FC = () => {
  const [openCameraModal, setOpenCameraModal] = useState<boolean>(false);
  const [cameras, setCameras] = useState<CameraProps[]>([]);
  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    if (!update) {
      return;
    }

    async function fetchData() {
      let data: CameraProps[];

      try {
        data = await getCameraData();
      } catch (error) {
        return console.log("getCameraData failed", error);
      }
      setCameras(data);
    }
    fetchData();

    return setUpdate(false);
  }, [update]);

  async function removeCamera(id: string) {
    try {
      await deleteCameraEntry(id);
    } catch (error) {
      return console.log("deleteCameraEntry failed", error);
    }
    return setUpdate(true);
  }

  async function createCamera(data: {}) {
    try {
      await createNewCameraEntry(data);
    } catch (error) {
      return console.log("createNewCameraEntry failed", error);
    }

    setUpdate(true);
    return handleModal();
  }

  function handleModal() {
    return setOpenCameraModal(!openCameraModal);
  }

  return (
    <S.LandingPageWrapper>
      <S.CenterDiv>
        <S.MainHeading>Câmeras Cadastradas</S.MainHeading>
        <S.Paragraph>
          Todas suas câmeras cadastradas serão listadas abaixo:
        </S.Paragraph>
        <S.Container></S.Container>
        {cameras?.length === 0 && (
          <S.Paragraph>Você não possui nenhuma câmera cadastrada.</S.Paragraph>
        )}
        <S.InfiniteTable>
          {cameras?.length > 0 && (
            <S.TableComponent>
              <S.TableHead>
                <S.TableColumn>
                  <S.TableInfo>Nome da câmera</S.TableInfo>
                  <S.TableInfo>Fabricante</S.TableInfo>
                  <S.TableInfo>Número de Série</S.TableInfo>
                  <S.TableInfo></S.TableInfo>
                </S.TableColumn>
              </S.TableHead>

              <tbody>
                {cameras?.map((items) => {
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
                          action={() => removeCamera(items.id)}
                          width="80px"
                          height="30px"
                          title="Excluir"
                        />
                      </S.TableItem>
                    </S.TableColumn>
                  );
                })}
              </tbody>
            </S.TableComponent>
          )}
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
