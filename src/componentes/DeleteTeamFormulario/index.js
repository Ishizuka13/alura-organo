import { useState } from "react";
import { Botao } from "../Botao";
import CampoTexto from "../CampoTexto";
import "./index.css";

export const DeleteTeamFormulario = ({ deletarTime, closeForm }) => {
  const [nomeDeleteTime, setNomeDeleteTime] = useState("");

  const aoDeletarTime = (e) => {
    e.preventDefault();
    deletarTime(nomeDeleteTime);
    setNomeDeleteTime("");
  };

  return (
    <>
      <form onSubmit={aoDeletarTime}>
        <h2>Preecha os dados para deletar um time</h2>
        <CampoTexto
          onChange={(e) => setNomeDeleteTime(e)}
          value={nomeDeleteTime}
          type="text"
          placeholder="Digite o nome do time que deseja excluir"
          required={true}
          style={{ width: "30%" }}
        />
        <div className="buttons">
          <Botao>CONFIRMAR</Botao>
          <Botao onClick={closeForm}>FECHAR</Botao>
        </div>
      </form>
    </>
  );
};
