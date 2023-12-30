import Colaborador from '../Colaborador'
import './index.css'

export const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {
    return (
        colaboradores.length > 0 &&
            <section className='time' style={{ backgroundColor: corSecundaria }} >
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((e,index) => <Colaborador corDeFundo={corPrimaria} key={index} nome={e.nome} cargo={e.cargo} img={e.img} />)}
                </div>
            </section>
    )
}