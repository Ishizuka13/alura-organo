import { useState } from 'react';
import {Banner} from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Times';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome:"Programação",
      corPrimaria: '#57C278'
    },
    {
      id: uuidv4(),
      nome:'Couch',
      corPrimaria: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome:'Analistas de Sistemas',
      corPrimaria: '#E06869'
    },
    {
      id: uuidv4(),
      nome:'Designers',
      corPrimaria: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome:'Chefe',
      corPrimaria: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome:'Gerente', 
      corPrimaria: '#FF8A29'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const aoCadastrarTime = (time) => {
    console.log(time)
    if(times.find(times => times.nome.toLowerCase() === time.nome.toLowerCase())) {
      alert('Time já registrado!')
      return
    }
    setTimes([...times, time])
  }

  const Delete = (e) => {
    let novaLista = colaboradores.filter(colaboradores => colaboradores.id !== e)
    setColaboradores(novaLista)
  }

  const Favoritar = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
        <Banner />
        <Formulario cadastro={e => aoCadastrar(e)} times={times.map(e => e.nome)} cadastrarTime={e => aoCadastrarTime(e)}/>    
        {times.map((e, index) => <Time 
          key={index} 
          nome={e.nome} 
          corPrimaria={e.corPrimaria} 
          colaboradores={colaboradores.filter(colaboradores => colaboradores.time === e.nome)}
          aoDeletar={Delete}
          aoFavoritar={Favoritar}
        />)}
        <Footer />
    </div>
  );
}

export default App;