import Button from "./Button";

export default function End(props) {
    const {good, total, onQuizEnd} = props;
    return (<>
        <div className="modal">
            <div className="modal-container">
                <h2>Congrats!</h2>
                <div className="result">You answered {100 * good / total}% of questions correctly</div>
                <Button value={""} type={"special"} onButtonClick={onQuizEnd}>Play Again</Button>
            </div>
        </div>
    </>)
}