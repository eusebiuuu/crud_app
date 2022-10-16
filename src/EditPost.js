import { useState } from "react";

export default function EditPost(props) {
    const {value, onValueChange, onEditStateChange} = props;
    const [curText, setCurText] = useState(`${value}`);

    function handleCurrentTextChange(event) {
        setCurText(event.target.value);
    }

    return (<div>
        <textarea value={curText} onChange={handleCurrentTextChange} />
        <button className="special" onClick={() => {onValueChange(curText); onEditStateChange(false)}}>Save</button>
        <button className="btn" onClick={() => onEditStateChange(false)}>Cancel</button>
    </div>)
}