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

    return <div className="input-container">
        <label>
            <div>{label}</div>
            <input className={classes} ref={inputRef} 
            value={value} onChange={onValueChange} {...rest} />
        </label>
    </div>
}