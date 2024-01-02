import './index.css'

export const ListaSuspensa = ({label, required, value, onChange, itens}) => {
    const onTyping = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={required} onChange={onTyping} value={value}>
                {itens.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    )
}