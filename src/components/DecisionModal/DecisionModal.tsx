import { useState, useEffect } from "react";
import * as S from ".";
import Button from "../Button/Button";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

type Props = {
  textAction: string;
};

const DecisionModal = ({ textAction }: Props) => {
  const [commandAction, setCommandAction] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (textAction === "add") {
      setError(false);
      return setCommandAction("adição");
    }

    if (textAction === "del") {
      setError(false);
      return setCommandAction("deleção");
    }

    return setError(true);
  }, []);

  function handleError() {
    setError(false);
  }

  function confirmAction() {}

  return (
    <S.WrapperModal>
      <S.DecisionModal>
        <FaCheck fontSize="6em" />
        <S.Paragraph>{`Confirmar ${commandAction} de câmera?`} </S.Paragraph>
        {error && (
          <>
            <FaTrashAlt fontSize="6em" />
            <S.Paragraph>Erro ao definir ação do componente </S.Paragraph>
          </>
        )}
        <S.ButtonContainer>
          <Button
            action={confirmAction}
            title="Confirmar"
            height="40px"
            width="150px"
          />

          <Button
            action={handleError}
            title="Cancelar"
            height="40px"
            width="150px"
            color={"cancel"}
          />
        </S.ButtonContainer>
      </S.DecisionModal>
    </S.WrapperModal>
  );
};

export default DecisionModal;
