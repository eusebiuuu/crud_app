// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

export default function App() {
    const [date, setDate] = useState(new Date());
    const [counter, setCounter] = useState(0);

    console.log("rendered"); //allows us to visualize re-renders

    function handleButtonClick() {
        setDate(new Date());
        setCounter(counter + 1);
    }

    return <button onClick={handleButtonClick}>Click me</button>
} 

