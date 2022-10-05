import {useRef, useEffect} from "react"
import clsx from "clsx"

export default function Input(props) {
    // make reusable
    const classes = clsx({
        //
    })
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return <div className="input-container">
        {/* <label htmlFor="cocktail"></label><br /> */}
        <input ref={inputRef} id="query" value={props.query} onChange={props.onQueryChange} />
    </div>
}