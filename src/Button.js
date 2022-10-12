import clsx from "clsx"

export default function Button(props) {
    const {className, value, onButtonClick, type, children, ...rest} = props;
    const classes = clsx({
            "btn": type === "default",
            "special": type === "special"
        },
        className
    )
    return <button className={classes} value={value} onClick={onButtonClick} {...rest}>{children}</button>;
}