import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader"
// import Error from "./Error"
import Input from "./Input"
import Story from "./Story"

export default function App() {
    // Add dark theme using context
    // Loading content on scroll
    // React Redux: see tutorial + build project with useReducer
    // Handle errors
    // Learn SCSS

    const [stories, setStories] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(0);
    const {get, loading} = useFetch("https://hn.algolia.com/api/v1/search?");

    useEffect(() => {
        get(`query=${query}&page=${page}`)
        .then(data => {
            // console.log(data);
            page > 0 ? setStories([...stories, ...data.hits]) : setStories(data.hits);
        })
        .catch(error => console.log(error))
    }, [page, query]);

    function getNewPage() {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            setPage(prevPage => {
                return prevPage + 1;
            })
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", getNewPage);
        return () => {
            window.removeEventListener("scroll", getNewPage);
        }
    }, []);

    function handleQueryChange(event) {
        setQuery(event.target.value);
        setPage(0);
    }

    function handleStoryRemove(id) {
        const newStories = stories.filter(story => {
            if (story.objectID !== id) {
                return story;
            }
        })
        setStories(newStories);
    }

    return (<>
        <h1>Search Hacker News</h1>
        <Input query={query} onQueryChange={handleQueryChange} />
        <div className="container">
            {stories && stories.map((story, index) => {
                return <Story key={index} story={story} onStoryRemove={handleStoryRemove} />
            })}
            {loading && <Loader />}
        </div>
    </>)
}
