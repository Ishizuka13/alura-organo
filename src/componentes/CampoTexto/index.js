import "./index.css";

const CampoTexto = ({label, placeholder, required, type, value, onChange}) => {

    const aoDigitado = (e) => {
        onChange(e.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input value={value} onChange={aoDigitado} placeholder={placeholder} type={type} required={required}/>
        </div>
    )
}

export default CampoTexto;