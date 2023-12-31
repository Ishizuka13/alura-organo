import './index.css'

export const Botao = ({children, onClick}) => {
    return (
        <button className='botao' onClick={onClick}>{children}</button>
    )
}