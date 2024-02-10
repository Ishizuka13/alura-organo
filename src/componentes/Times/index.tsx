import hexToRgba from "hex-to-rgba";
import Colaborador, { ColaboradorProps } from "../Colaborador";
import "./index.css";

export interface TimeCadastroProps {
  id?: string;
  nome: string;
  corPrimaria: string;
}

export interface TimeProps extends TimeCadastroProps {
  colaboradores: ColaboradorProps[];
  aoDeletar: (e: string) => void;
  aoFavoritar: (e: string) => void;
  colaborador?: (id: ColaboradorProps) => void;
}

export const Time = ({
  nome,
  corPrimaria,
  colaboradores,
  aoDeletar,
  aoFavoritar,
}: TimeProps) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(corPrimaria, 0.6) }}
      >
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((e, index) => (
            <Colaborador
              corDeFundo={corPrimaria}
              key={index}
              nome={e.nome}
              cargo={e.cargo}
              img={e.img}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
              colaborador={e}
            />
          ))}
        </div>
      </section>
    )
  );
};
