import clsx from "clsx"

export default function Button(props) {
    const classes = clsx({
        "btn": !props.transparent,
        "page": !props.transparent,
        "transparent": props.transparent,
        "active": props.value === props.group
    })
    return <button className={classes} onClick={() => props.onButtonClick(props.value)}>{props.children}</button>;
}