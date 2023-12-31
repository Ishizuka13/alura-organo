import { useState } from 'react';
import {Banner} from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Times';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const times = [
    {
      id: uuidv4(),
      nome:"Programação",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome:'Couch',
      corPrimaria: '#82CFFA',
      corSecundaria: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome:'Analistas de Sistemas',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome:'Designers',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome:'Chefe',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome:'Gerente', 
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log([...colaboradores, colaborador])
    console.log(times[0].id)
  }

  const Delete = (e) => {
    let novaLista = colaboradores.filter(colaboradores => colaboradores.id !== e)
    console.log(novaLista)
    setColaboradores(novaLista)
  }

  return (
    <div className="App">
        <Banner />
        <Formulario cadastro={e => aoCadastrar(e)} times={times.map(e => e.nome)} />    
        {times.map((e, index) => <Time 
          key={index} 
          nome={e.nome} 
          corPrimaria={e.corPrimaria} 
          corSecundaria={e.corSecundaria} 
          colaboradores={colaboradores.filter(colaboradores => colaboradores.time === e.nome)}
          aoDeletar={Delete}
        />)}
        <Footer />
    </div>
  );
}

export default App;