import React, { useState, useEffect } from "react";
import * as S from ".";

type Props = {
  id: string;
  value: string;
  modifyManufacturer: (message: string) => void;
  error?: boolean;
};
interface CameraProps {
  name: string;
  serialNumber: string;
  manufacturer: string;
  id: string;
}

let manufacturers = [
    { "id": "9193939", "name": "Secure Câmeras Inc" },
    { "id": "9293858", "name": "Surveillance Cams LLC" },
    { "id": "9393747", "name": "DigiEye Group" },
    { "id": "9494568", "name": "CâmeraFi Inc" },
    { "id": "9596545", "name": "VidMasters Inc" }
]

const SelectMenu = ({ id, value, modifyManufacturer, error }: Props) => {
  const [options, setOptions] = useState<CameraProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      let response: any;
      //simulando fetch em banco para buscar usuários
      try {
        response = manufacturers
     } catch (error) {
        console.log("error getting manufacturers", error);
      }
      let data = await response;
      setOptions(data);
    }

    fetchData();
  }, []);

  return (
    <S.SelectWrapper>
      <S.Select
        data-testid="dropdown"
        value={value}
        onChange={(evt) => modifyManufacturer(evt.target.value)}
        id={id}
      >
        <S.Options value="" disabled hidden>
          Selecione uma opção
        </S.Options>

        {options.map((opt, idx) => {
          return (
            <S.Options value={opt.name} key={idx}>
              {opt.name}
            </S.Options>
          );
        })}
      </S.Select>
      <S.CustomArrow></S.CustomArrow>
      {error && <span>Por favor, escolha uma das opções disponíveis</span>}
    </S.SelectWrapper>
  );
};

export default SelectMenu;
