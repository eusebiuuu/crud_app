import {useRef, useEffect, useState} from "react"
import Input from "./Input.js"
import Button from "./Button.js"

export default function Form() {
    const inputRef = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    function handleFormSubmit(event) {
        event.preventDefault();
        // check input and print message
    }
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    return <form onSubmit={handleFormSubmit}>
        <h1>Subscribe</h1>
        <h3>Sign up with your email address</h3>
        <Input value={firstName} reference={inputRef} onChange={handleFirstNameChange} />
        <Input value={lastName} onChange={handleLastNameChange} />
        <Input value={email} onChange={handleEmailChange} />
        <Button />
    </form>
}