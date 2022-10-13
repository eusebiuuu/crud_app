import {useRef, useEffect} from "react"
import clsx from "clsx"

export default function Input(props) {
    const inputRef = useRef();
    const {className, label, value, onValueChange, ...rest} = props;
    const classes = clsx({
            "input": true
        },
        className
    )

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return <label className="input-container">
        <h4>{label}</h4>
        <input className={classes} ref={inputRef} 
        value={value} onChange={onValueChange} {...rest} />
    </label>
}