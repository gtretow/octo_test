import axios from "axios";
import { useState, useEffect } from "react";
import * as S from ".";

type Props = {
  id: string;
  value: string;
  modifyManufacturer: (message: string) => void;
  options: Manufacturers[];
  error?: boolean;
};

interface CameraProps {
  name: string;
  serialNumber: string;
  manufacturer: string;
  id: string;
}

export interface Manufacturers {
  name: string;
}

const SelectMenu = ({ id, value, modifyManufacturer, error }: Props) => {
  const [options, setOptions] = useState<CameraProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      let response: any;

      try {
        response = await import("../../data/manufacturers.json");
      } catch (error) {
        console.log("error getting manufacturers", error);
      }
      let data = await response.companies;
      setOptions(data);
    }

    fetchData();
  }, []);

  return (
    <S.SelectWrapper>
      <S.Select
        value={value}
        onChange={(evt) => modifyManufacturer(evt.target.value)}
        id={id}
      >
        <S.Options value="" disabled hidden>
          Selecione uma opção
        </S.Options>

        {options.map((opt, idx) => {
          console.log("opt", opt);
          return (
            <S.Options value={opt.name} key={idx}>
              {opt.name}
            </S.Options>
          );
        })}
      </S.Select>
      <S.CustomArrow></S.CustomArrow>
      {error && <span>erro aqui</span>}
    </S.SelectWrapper>
  );
};

export default SelectMenu;
