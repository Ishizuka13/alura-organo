import { useState } from "react";
import { Botao } from "../Botao";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { ColaboradorProps } from "../Colaborador";
import { TimeCadastroProps } from "../Times";
import { DeleteTeamFormulario } from "../DeleteTeamFormulario";

interface FormularioProps {
  deleteTime: (id: string) => void;
  cadastro: (e: ColaboradorProps) => void;
  times: string[];
  cadastrarTime: (e: TimeCadastroProps) => void;
}

export const Formulario = ({
  deleteTime,
  cadastro,
  times,
  cadastrarTime,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("https://github.com/");
  const [time, setTime] = useState("Programação");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");
  const [ToggleFormDeleteTeam, setToggleFormDeleteTeam] = useState<boolean>();

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cadastro({
      id: uuidv4(),
      favorito: false,
      nome,
      cargo,
      img,
      time,
    });

    setNome("");
    setCargo("");
    setImg("https://github.com/");
    setTime("Programação");
  };

  const aoSalvarTime = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cadastrarTime({
      id: uuidv4(),
      nome: nomeTime,
      corPrimaria: corTime,
    });
    setNomeTime("");
    setCorTime("#000000");
  };

  return (
    <section className="formulario">
      <section className="Colaborador">
        <form onSubmit={aoSalvar}>
          <h2>Preecha os dados para criar o card do colaborador</h2>
          <CampoTexto
            onChange={(e) => setNome(e)}
            value={nome}
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            required={true}
          />
          <CampoTexto
            onChange={(e) => setCargo(e)}
            value={cargo}
            label="Cargo"
            type="text"
            placeholder="Digite seu cargo"
            required={true}
          />
          <CampoTexto
            onChange={(e) => setImg(e)}
            value={img}
            label="Imagem"
            placeholder="Digite a URL"
          />
          <ListaSuspensa
            itens={times}
            onChange={(e) => setTime(e)}
            label="Time"
            required={true}
            value={time}
          />
          <Botao>Criar card</Botao>
        </form>
      </section>
      <section className="Time">
        <form onSubmit={aoSalvarTime}>
          <h2>Preecha os dados para criar um novo time</h2>
          <CampoTexto
            onChange={(e) => setNomeTime(e)}
            value={nomeTime}
            label="Nome"
            type="text"
            placeholder="Digite o nome do time"
            required={true}
          />
          <CampoTexto
            style={{ padding: "0", width: "50%" }}
            onChange={(e) => setCorTime(e)}
            value={corTime}
            label="Cor"
            type="color"
            placeholder="Digite a cor do time"
            required={true}
          />
          <Botao>Criar time</Botao>
        </form>

        {ToggleFormDeleteTeam && (
          <DeleteTeamFormulario
            times={times}
            closeForm={() => setToggleFormDeleteTeam(!ToggleFormDeleteTeam)}
            deletarTime={deleteTime}
          />
        )}
        {!ToggleFormDeleteTeam && (
          <Botao onClick={() => setToggleFormDeleteTeam(!ToggleFormDeleteTeam)}>
            Deletar Time
          </Botao>
        )}
      </section>
    </section>
  );
};
