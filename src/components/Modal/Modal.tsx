import React, { useState, MouseEventHandler } from "react";
import * as S from ".";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";
interface props {
  handleCameraModel: MouseEventHandler;
  confirmCameraCreation: MouseEventHandler;
}

const Modal = ({ handleCameraModel, confirmCameraCreation }: props) => {
  const [cameraName, setCameraName] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [error, setError] = useState(false);

  function handleCameraAction(e: React.SyntheticEvent) {
    e.preventDefault();
    setError(false);

    if (cameraName.length < 3) {
      return setError(true);
    }

    if (serialNumber.length < 3) {
      return setError(true);
    }

    if (manufacturer.length < 3) {
      return setError(true);
    }

    const unique_id = new Date().valueOf();

    let newCamera: any = {
      serverId: unique_id,
      name: cameraName,
      manufacturer: manufacturer,
      serialNumber: serialNumber,
    };

    return confirmCameraCreation(newCamera);
  }

  function editSerialNumber(event: string) {
    setSerialNumber(
      event
        .toLocaleUpperCase()
        .replace(/[^a-z0-9]/gi, "")
        .replace(/\s/g, "")
    );
  }

  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.CameraHeader>
          <h1>Cadastrar nova câmera</h1>
          <p onClick={handleCameraModel}>X</p>
        </S.CameraHeader>
        <S.Form>
          <S.FieldSet>
            <S.Label>
              <S.Span>Escolha um nome para sua nova câmera. </S.Span>
              <S.Input
                maxLength={50}
                placeholder="Nome"
                type="text"
                onChange={(e) => setCameraName(e.target.value)}
                value={cameraName}
              />
              {cameraName.length < 3 && error && (
                <S.ErrorMessage>
                  O nome da câmera não deve ser deixado em branco.
                </S.ErrorMessage>
              )}
            </S.Label>
          </S.FieldSet>

          <S.FieldSet>
            <S.Label>
              <S.Span>Preencha o número de série da sua câmera. </S.Span>
              <S.Input
                maxLength={16}
                type="text"
                placeholder="Número de Série"
                onChange={(e) => editSerialNumber(e.target.value)}
                value={serialNumber}
              />
              {serialNumber.length < 3 && error && (
                <S.ErrorMessage>
                  O número de série não deve ser deixado em branco.
                </S.ErrorMessage>
              )}
            </S.Label>
          </S.FieldSet>
          <S.FieldSet>
            <S.Label>
              <S.Span>Selecione o fabricante da sua câmera: </S.Span>
              <SelectMenu
                value={manufacturer}
                modifyManufacturer={setManufacturer}
                id="selectMenu"
              />
              {manufacturer.length < 3 && error && (
                <S.ErrorMessage>
                  O nome do fabricante não deve estar em branco.
                </S.ErrorMessage>
              )}
            </S.Label>
          </S.FieldSet>
          <S.FieldSet>
            <Button
              action={(e) => handleCameraAction(e)}
              disableButton={error}
              title="Criar"
              height="40px"
              width="150px"
            />
          </S.FieldSet>
        </S.Form>
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default Modal;
