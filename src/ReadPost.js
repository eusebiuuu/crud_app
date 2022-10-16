
export default function ReadPost(props) {
    const {details, onTextCopy, onIsLikedChange, onPostDelete, onEditStateChange} = props;
    return (<>
        <div><h4>{details.author_name}</h4><p>@{details.username}</p> </div>
        <div>{details.postContent}</div>
        <button className="special" onClick={() => onEditStateChange(true)}>Edit</button>
        <button className="special" onClick={() => onPostDelete(details.id)}>Remove</button>
        <button className="special" onClick={onIsLikedChange}>Like</button>
        <button className="special" onClick={() => onTextCopy(details.postContent)}>Copy</button>
    </>)
}