
export default function CreatePost(props) {
    const {value, onValueChange, onPostAdd} = props;
    return (<div className="create-container">
        <textarea placeholder="Write a post..." value={value} onChange={onValueChange} />
        <button className="special" disabled={value === ""} onClick={() => onPostAdd(value)}>Add Post</button>
    </div>)
}