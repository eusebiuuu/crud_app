// import clsx from "clsx"

export default function Input(props) {
    return <input ref={props.reference} onChange={props.onChange} />;
}