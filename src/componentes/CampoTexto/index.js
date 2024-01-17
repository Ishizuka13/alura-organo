import "./index.css";

const CampoTexto = ({
  label,
  style,
  placeholder,
  required,
  type,
  value,
  onChange,
}) => {
  const aoDigitado = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`campo-texto`}>
      <label>{label}</label>
      <input
        style={style}
        value={value}
        onChange={aoDigitado}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
};

export default CampoTexto;
