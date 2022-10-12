import { useState, useEffect } from "react"
import Input from "./Input";
import Select from "./Select";
import useFetch from "./useFetch";
import Button from "./Button"
import Loader from "./Loader"
import Question from "./Question";
import End from "./End";

const table = {
    "sports": 21,
    "history": 23,
    "politics": 24,
}
const categories = ["sports", "history", "politics"];
const difficulties = ["easy", "medium", "hard"];

export default function App() {
    // use context
    // error handling
    // use dark theme
    // emoji
    // logic
    // CSS
    const [questionsCount, setQuestionsCount] = useState(10);
    const [category, setCategory] = useState("sports");
    const [difficulty, setDifficulty] = useState("easy");
    const [questionIdx, setQuestionIdx] = useState(-1);
    const [setup, SetSetup] = useState(true);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [questions, setQuestions] = useState(null);
    const {get, loading} = useFetch("https://opentdb.com/api.php?");
    // console.log(loading)
    useEffect(() => {
        // console.log("ijfrufeih");
        if (!setup) {
            get(`amount=${questionsCount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`)
            .then(data => {
                setQuestions(data.results);
                setQuestionIdx(0);
                setCorrectAnswers(0);
            })
            .catch(error => console.log(error));
        }
    }, [setup]);

    function handleNextQuestion() {
        setQuestionIdx((oldQuestionIdx) => {
            return oldQuestionIdx + 1;
        });
    }

    function handleQuestionsCountChange(event) {
        setQuestionsCount(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function handleDifficultyChange(event) {
        setDifficulty(event.target.value);
    }

    function handleOptionChoose(isCorrect) {
        setCorrectAnswers(correctAnswers + isCorrect);
        handleNextQuestion();
    }

    function handleFormSubmit() {
        // console.log("jdiej")
        SetSetup(false);
    }

    function handleQuizEnd() {
        SetSetup(true);
    }

    return (<div>
        {loading && <Loader />}
        {!loading && <>
            {setup && <>
                <div className="row">
                    <h2>Setup Quiz</h2>
                    <Input value={questionsCount} onValueChange={handleQuestionsCountChange} 
                    label="Number of questions" type="number" min={1} max={10} />
                </div>
                <div className="row">
                    <Select label={"Select category"} values={categories} value={category} onValueChange={handleCategoryChange} />
                </div>
                <div className="row">
                    <Select label={"Select difficulty"} values={difficulties} value={difficulty} onValueChange={handleDifficultyChange} />
                </div>
                <Button type={"special"} value={""} onButtonClick={handleFormSubmit}>Start</Button>
            </>}
            {!setup && <>
                {questions && <>
                    <Question onOptionChoose={handleOptionChoose} good={correctAnswers} total={questionsCount} question={questions[Math.min(questionIdx, questions.length - 1)]} />
                    {questionIdx === questionsCount && <End good={correctAnswers} total={questionsCount} onQuizEnd={handleQuizEnd} />}
                </>}
            </>}
        </>}
    </div>)
}
