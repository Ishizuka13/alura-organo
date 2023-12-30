import { useState } from 'react';
import {Banner} from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Times';
import Footer from './componentes/Footer';

function App() {
  const times = [
    {
      nome:"Programação",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Couch',
      corPrimaria: '#82CFFA',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Analistas de Sistemas',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Designers',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Chefe',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Gerente', 
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
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
        />)}
        <Footer />
    </div>
  );
}

export default App;
