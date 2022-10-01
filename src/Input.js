import {useRef, useEffect} from "react"

export default function Input(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    return <div className="input-container">
        <label htmlFor="cocktail">Search your favourite cocktail</label><br />
        <input ref={inputRef} id="cocktail" value={props.substring} onChange={props.onInputChange} />
    </div>
}