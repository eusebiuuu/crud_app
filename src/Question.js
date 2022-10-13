import Button from "./Button";

export default function Question(props) {
    const {question, good, current, total, onOptionChoose} = props;
    const options = [];
    question.incorrect_answers.forEach((ans) => {
        options.push(ans);
    })
    options.push(question.correct_answer);

    function handleCurOptionChoose(event) {
        const curOption = event.target.value;
        onOptionChoose(curOption === question.correct_answer);
    }

    return <>
    <div className="info">
        <div>Answered questions: {current}</div>
        <div>Correct Answers: {good}/{total}</div>
    </div>
        <h2>{question.question}</h2>
        <div className="options">
            {options.map((option, index) => {
                return <Button type="default" key={index} value={option} onButtonClick={handleCurOptionChoose}>{option}</Button>
            })}
        </div>
        <button className="special" onClick={() => onOptionChoose(0)}>Next Question</button>
    </>
}