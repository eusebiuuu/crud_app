import { useRef } from "react";

export default function Row(props) {
    const divRef = useRef(0);
    divRef.current.style.color = "red";
    return <div ref={divRef}>Red</div>;
}