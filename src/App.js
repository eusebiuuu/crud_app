import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
} from 'react-icons/fa'

export default function App() {
    const [title, setTitle] = useState("name");
    const [content, setContent] = useState("Name");
    const [changed, setChanged] = useState(false);
    const {get, loading} = useFetch("https://randomuser.me/api/");
    const [person, setPerson] = useState(null);

    function handleMouseHover(curTitle, content) {
        setTitle(curTitle);
        setContent(content);
    }

    function handleButtonClick() {
        setChanged(previousVal => {
            return !previousVal;
        })
    }

    useEffect(() => {
        get("")
        .then(data => {
            // console.log(loading);
            setPerson(data);
            setTitle("email");
            setContent(data.results[0].email);
        })
        .catch(error => console.log(error));
    }, [changed])

    if (!person) {
        return null;
    }
    const result = person.results[0];
    const firstName = result.name.first;
    const lastName = result.name.last;
    const email = result.email;
    const age = result.dob.age;
    const {number, name} = result.location.street;
    const phone = result.cell;
    const password = result.login.password;
    // console.log(loading);

    return (<>
        <div className="black"></div>
        <div className="container">
            <img src={result.picture.large} />
            <div className="message">
                <p>My {title} is</p>
                <div className="content">{content}</div>
            </div>
            <div className="icons">
                <div><FaUser onMouseOver={() => handleMouseHover("name", firstName + " " + lastName)} /></div>
                <div><FaEnvelopeOpen onMouseOver={() => handleMouseHover("email", email)} /></div>
                <div><FaCalendarTimes onMouseOver={() => handleMouseHover("age", age)} /></div>
                <div><FaMap onMouseOver={() => handleMouseHover("street", number + " " + name)} /></div>
                <div><FaPhone onMouseOver={() => handleMouseHover("phone number", phone)} /></div>
                <div><FaLock onMouseOver={() => handleMouseHover("password", password)} /></div>
            </div>
            <button className="btn generate" onClick={handleButtonClick}>
                {loading && "Loading..."}
                {!loading && "Generate random user"}
            </button>
        </div>
    </>)
}
