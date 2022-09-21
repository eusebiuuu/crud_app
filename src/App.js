// import { useState, useRef, useEffect } from "react";
import Row from "./Row.js"

export default function App() {
    function generateRandomColor() {
        const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e','f'];
        let color = "";
        for (let i = 0; i < 6; ++i) {
            const pos = Math.floor(Math.random() * 16);
            color += characters[pos];
        }
        console.log(color);
        return "#" + color;
    }
    const count = Math.floor(Math.random() * 11);
    const colors = [];
    for (let i = 0; i < count; ++i) {
        colors.push(generateRandomColor());
    }
    return <>
        {colors.map((col, idx) => {
            return <Row key={idx} color={col} />
        })}
    </>
}
