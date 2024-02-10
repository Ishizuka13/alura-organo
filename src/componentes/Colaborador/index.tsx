import { Botao } from "../Botao";
import "./index.css";

export interface ColaboradorProps {
  id: string;
  nome: string;
  cargo: string;
  img: string;
  corDeFundo?: string;
  favorito?: boolean;
  time?: string;
}

interface ColaboradorFunction {
  nome: string;
  cargo: string;
  img: string;
  corDeFundo: string;
  aoDeletar: (e: string) => void;
  aoFavoritar: (e: string) => void;
  colaborador: ColaboradorProps;
}

const Colaborador = ({
  nome,
  cargo,
  img,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
  colaborador,
}: ColaboradorFunction) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <Botao onClick={() => aoDeletar(colaborador.id)}>del</Botao>

        <Botao onClick={() => aoFavoritar(colaborador.id)}>
          {colaborador.favorito ? "Favorito" : "FAV"}
        </Botao>
        <img src={img} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
