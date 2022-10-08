import clsx from "clsx"

export default function Button(props) {
    // make reusable
    const classes = clsx({
        "btn": props.default,
        "transparent": props.transparent,
        "red": props.red,
        "blue": props.blue
    })
    return <button className={classes} onClick={() => props.onButtonClick(props.value)}>{props.children}</button>;
}