import Button from "./Button";
import clsx from "clsx"

export default function End(props) {
    const {good, current, total, onQuizEnd} = props;
    const classes = clsx({
        "open": current == total,
        "modal": true
    })

    return (<div className={classes}>
        <div className="modal-content">
            <h2>Congrats!</h2>
            <div className="result">You answered {Math.round(100 * good / total)}% of questions correctly</div>
            <Button value={""} type="special" onButtonClick={onQuizEnd}>Play Again</Button>
        </div>
    </div>)
}