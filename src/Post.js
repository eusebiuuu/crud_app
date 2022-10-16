import { useState } from "react";
import EditPost from "./EditPost";
import ReadPost from "./ReadPost";

export default function Post(props) {
    const {onPostDelete, onTextCopy} = props;
    const [edit, setEdit] = useState(false);
    const [details, setDetails] = useState(props.details);
    const [isLiked, setIsLiked] = useState(false);

    function handleTextPostChange(text) {
        setDetails({
            ...details,
            postContent: text
        })
    }

    function handleEditStateChange(state) {
        setEdit(state);
    }

    function handleIsLikedChange() {
        setIsLiked(prev => {
            return !prev;
        })
    }

    return (<div className="post">
        {!edit && <ReadPost isLiked={isLiked} onIsLikedChange={handleIsLikedChange} onTextCopy={onTextCopy} onPostDelete={onPostDelete} 
        onEditStateChange={handleEditStateChange} details={details} />}
        {edit && <EditPost value={details.postContent} onValueChange={handleTextPostChange} 
        onEditStateChange={handleEditStateChange} />}
    </div>)
}