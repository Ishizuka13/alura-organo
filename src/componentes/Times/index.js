import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './index.css'

export const Time = ({nome, corPrimaria, corSecundaria, colaboradores, aoDeletar, aoFavoritar}) => {
    return (
        colaboradores.length > 0 &&
            <section className='time' style={{ backgroundColor: hexToRgba(corPrimaria, 0.6)}} >
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((e,index) => <Colaborador corDeFundo={corPrimaria} key={index} nome={e.nome} cargo={e.cargo} img={e.img} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} colaborador={e}/>)}
                </div>
            </section>
    )
}