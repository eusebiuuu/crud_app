import { useState, useEffect } from "react"
import CreatePost from "./CreatePost";
import Post from "./Post";

let id = 1;
const author = "Leonardo Da Vinci";
const username = "Leo";
const initPost = {
    "author_name": author,
    "username": username,
    "date": new Date(),
    "postContent": `30 Days Of JavaScript challenge has been started on 1 January 
    and ended on 30 January 2020. It is one of the best JavaScript material on the 
    internet. Students learned quite a lot of concepts. I hope this will help 
    lots of students. JavaScript for Ever!`,
    "id": 0
}

export default function App() {
    // extend the project
    const [posts, setPosts] = useState([initPost]);
    const [textPost, setTextPost] = useState("");

    function handlePostDelete(id) {
        const newPosts = posts.filter((post) => {
            if (post.id !== id) {
                return post;
            }
        })
        setPosts(newPosts);
    }

    function handlePostAdd(text) {
        const newPost = {
            "author_name": "Leonardo da Vinci",
            "username": "ejfoificicni",
            "date": new Date(),
            "postContent": text,
            id: id++
        }
        setPosts([...posts, newPost]);
    }

    function handleTextPostChange(event) {
        setTextPost(event.target.value);
    }

    function handleTextCopy(text) {
        setTextPost(textPost + text);
    }

    return (<div className="container">
        <CreatePost value={textPost} onValueChange={handleTextPostChange} onPostAdd={handlePostAdd} />
        <div className="posts">
            <h2>Posts</h2>
            {posts && posts.map(post => {
                return <Post key={post.id} details={post} onPostDelete={handlePostDelete} onTextCopy={handleTextCopy} />
            })}
        </div>
    </div>)
}
