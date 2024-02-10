import { useState } from "react";
import { Botao } from "../Botao";
import "./index.css";
import { ListaSuspensa } from "../ListaSuspensa";

interface DeleteTeamProps {
  times: string[];
  deletarTime: (e: string) => void;
  closeForm: () => void;
}

export const DeleteTeamFormulario = ({
  times,
  deletarTime,
  closeForm,
}: DeleteTeamProps) => {
  const [nomeDeleteTime, setNomeDeleteTime] = useState("");

  const aoDeletarTime = (e: any) => {
    closeForm();
    e.preventDefault();
    deletarTime(nomeDeleteTime ? nomeDeleteTime : times[0]);
    setNomeDeleteTime("");
  };

  return (
    <form onSubmit={aoDeletarTime}>
      <h2>Preecha os dados para deletar um time</h2>
      <ListaSuspensa
        itens={times}
        label="Time"
        onChange={(e) => setNomeDeleteTime(e)}
        value={nomeDeleteTime}
      />
      <div className="buttons">
        <Botao>CONFIRMAR</Botao>
        <Botao onClick={closeForm}>FECHAR</Botao>
      </div>
    </form>
  );
};
