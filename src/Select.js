
export default function Select(props) {
    const {values, value, label, onValueChange} = props;
    return (<label className="select-container">
        <h4>{label}</h4>
        <select value={value} onChange={onValueChange}>
            {values.map((curValue, index) => {
                return <option key={index} value={curValue}>{curValue}</option>
            })}
        </select>
    </label>)
}