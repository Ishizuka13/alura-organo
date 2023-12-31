import { Botao } from '../Botao';
import './index.css';
 
const Colaborador = ({nome, cargo, img, corDeFundo, aoDeletar, id}) => {
    return (
        <div className='colaborador'  >
            <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
                <Botao onClick={() => aoDeletar(id)}>del</Botao>
                <img src={img} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}

export default Colaborador;