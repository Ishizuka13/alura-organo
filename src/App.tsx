import { useEffect, useState } from "react";
import { Banner } from "./componentes/Banner";
import { Time, TimeCadastroProps } from "./componentes/Times";
import Footer from "./componentes/Footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Formulario } from "./componentes/Formulario";
import { ColaboradorProps } from "./componentes/Colaborador";

function App() {
  const [colaboradores, setColaboradores] = useState<ColaboradorProps[]>([]);
  const [times, setTimes] = useState<TimeCadastroProps[]>([]);
  const server = `https://json-test-six.vercel.app`;

  useEffect(() => {
    axios
      .get(`${server}teams`)
      .then((response) => response.data)
      .then((dados) => {
        setTimes(dados);
      });
  }, [times, server]);

  const aoCadastrar = (colaborador: ColaboradorProps) => {
    axios.post(`${server}/colaborator`, {
      id: uuidv4(),
      favorito: false,
      nome: colaborador.nome,
      cargo: colaborador.cargo,
      img: colaborador.img,
      time: colaborador.time,
    });
  };

  const aoCadastrarTime = (time: TimeCadastroProps) => {
    if (
      times.find(
        (times) => times.nome.toLowerCase() === time.nome.toLowerCase()
      )
    ) {
      alert("Time já registrado!");
      return;
    }
    axios.post(`${server}/teams`, {
      id: uuidv4(),
      nome: time.nome,
      corPrimaria: time.corPrimaria,
    });
  };

  const Delete = (id: string) => {
    axios.delete(`${server}/colaborator${id}`);
  };

  const DeleteTime = (nome: string) => {
    const colaboradorTime = colaboradores.find(
      (colaborador) => colaborador.time === nome
    )?.id;
    const time = times.find((time) => time.nome === nome)?.id;
    console.log(time);
    if (colaboradorTime !== undefined)
      axios.delete(`${server}/colaborator/${colaboradorTime}`);
    try {
      axios.delete(`${server}/teams/${time}`);
    } catch (err) {
      alert(err);
      return;
    }
  };

  const Favoritar = (id: string) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          let newFavorito = (colaborador.favorito = !colaborador.favorito);
          colaborador.favorito = !colaborador.favorito;
          axios.put(`${server}/colaborator/${id}`, {
            id: id,
            favorito: newFavorito,
            nome: colaborador.nome,
            cargo: colaborador.cargo,
            img: colaborador.img,
            time: colaborador.time,
          });
        }
        return colaborador;
      })
    );
  };

  useEffect(() => {
    axios
      .get(`${server}/colaborator`)
      .then((response) => response.data)
      .then((dados) => {
        setColaboradores(dados);
      });
  }, [aoCadastrar, Delete, server]);

  return (
    <div className="App">
      <Banner
        src="/imagens/banner.png"
        alt="Banner principal da página do Organo"
      />
      <Formulario
        deleteTime={DeleteTime}
        cadastro={(e) => aoCadastrar(e)}
        times={times.map((e) => e.nome)}
        cadastrarTime={(e) => aoCadastrarTime(e)}
      />

      {times.map((e, index) => (
        <Time
          key={index}
          nome={e.nome}
          corPrimaria={e.corPrimaria}
          colaboradores={colaboradores.filter(
            (colaboradores) => colaboradores.time === e.nome
          )}
          aoDeletar={Delete}
          aoFavoritar={Favoritar}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
