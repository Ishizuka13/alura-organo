import './index.css'

export const Botao = ({children, onClick}) => {
    return (
        <button className={`botao botao-${children}`} onClick={onClick}>{children}</button>
    )
}