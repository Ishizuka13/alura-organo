import { useEffect, useState } from "react";
import { Banner } from "./componentes/Banner";
import { DeleteTeamFormulario } from "./componentes/DeleteTeamFormulario";
import { Time } from "./componentes/Times";
import Footer from "./componentes/Footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Botao } from "./componentes/Botao";
import { Formulario } from "./componentes/Formulario";

function App() {
  const serverTimes = axios
    .get(`http://localhost:3000/teams`)
    .then((response) => response.data)
    .then((dados) => {
      setTimes(dados);
    });

  const [colaboradores, setColaboradores] = useState([]);
  const [ToggleFormDeleteTeam, setToggleFormDeleteTeam] = useState(false);
  const [times, setTimes] = useState([serverTimes]);

  const aoCadastrar = (colaborador) => {
    axios.post("http://localhost:3000/colaborator", {
      id: uuidv4(),
      favorito: false,
      nome: colaborador.nome,
      cargo: colaborador.cargo,
      img: colaborador.img,
      time: colaborador.time,
    });
  };

  const aoCadastrarTime = (time) => {
    if (
      times.find(
        (times) => times.nome.toLowerCase() === time.nome.toLowerCase()
      )
    ) {
      alert("Time já registrado!");
      return;
    }
    axios.post("http://localhost:3000/teams", {
      id: uuidv4(),
      nome: time.nome,
      corPrimaria: time.corPrimaria,
    });
  };

  const Delete = (id) => {
    axios.delete(`http://localhost:3000/colaborator/${id}`);
  };

  const DeleteTime = (nome) => {
    setToggleFormDeleteTeam(false);
    let colaboradorTime = colaboradores.find(
      (colaborador) => colaborador.time === nome
    );
    let time = times.find((time) => time.nome === nome);
    try {
      axios.delete(`http://localhost:3000/colaborator/${colaboradorTime.id}`);
      axios.delete(`http://localhost:3000/teams/${time.id}`);
      alert("SUCESSO!");
    } catch (err) {
      return;
    }
  };

  const Favoritar = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          let newFavorito = (colaborador.favorito = !colaborador.favorito);
          colaborador.favorito = !colaborador.favorito;
          axios.put(`http://localhost:3000/colaborator/${id}`, {
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
      .get(`http://localhost:3000/colaborator`)
      .then((response) => response.data)
      .then((dados) => {
        setColaboradores(dados);
      });
  }, [aoCadastrar, Delete]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastro={(e) => aoCadastrar(e)}
        times={times.map((e) => e.nome)}
        cadastrarTime={(e) => aoCadastrarTime(e)}
        deletarTime={(e) => DeleteTime(e)}
      />
      {ToggleFormDeleteTeam === false && (
        <Botao onClick={() => setToggleFormDeleteTeam(!ToggleFormDeleteTeam)}>
          Deletar Time
        </Botao>
      )}
      {ToggleFormDeleteTeam && (
        <DeleteTeamFormulario
          closeForm={() => setToggleFormDeleteTeam(false)}
          deletarTime={DeleteTime}
        />
      )}
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
