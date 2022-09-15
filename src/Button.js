import clsx from "clsx"

export default function Button() {
    const classes = clsx({
        "dark": true
    })
    return <button className={classes}>Subscribe</button>;
}