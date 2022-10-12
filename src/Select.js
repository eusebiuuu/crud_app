
export default function Select(props) {
    const {values, value, label, onValueChange} = props;
    return (<>
        <label>
            <div>{label}</div>
            <select value={value} onChange={onValueChange}>
                {values.map((curValue, index) => {
                    return <option key={index} value={curValue}>{curValue}</option>
                })}
            </select>
        </label>
    </>)
}