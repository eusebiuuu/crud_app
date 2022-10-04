import Button from "./Button"

export default function Footer(props) {
    const idx = [];
    for (let i = 0; i < 10; ++i) {
        idx.push(i);
    }
    return (<div className="footer">
        <Button group={props.group} onButtonClick={props.onPageDecrement} transparent>Prev</Button>
        {idx.map(pos => {
            return <Button group={props.group} key={pos} value={pos} onButtonClick={props.onPageChange}>{pos + 1}</Button>;
        })}
        <Button group={props.group} onButtonClick={props.onPageIncrement} transparent>Next</Button>
    </div>)
}