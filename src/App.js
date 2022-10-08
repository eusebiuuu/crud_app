import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader"
import Button from "./Button"
import Input from "./Input"
import Story from "./Story"

export default function App() {

    const [stories, setStories] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(0);
    const [totPages, setTotPages] = useState(0);
    const {get, loading} = useFetch("https://hn.algolia.com/api/v1/search?");
    const [lightTheme, setLightTheme] = useState(() => {
        console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
        return window.matchMedia("(prefers-color-scheme: light)").matches;
    });

    useEffect(() => {
        if (!lightTheme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [lightTheme]);

    useEffect(() => {
        get(`query=${query}&page=${page}`)
        .then(data => {
            // page > 0 ? setStories([...stories, ...data.hits]) : setStories(data.hits);
            setTotPages(data.nbPages);
            setStories(data.hits);
        })
        .catch(error => console.log(error))
    }, [page, query]);

    // function getNewPage() {
    //     if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    //         setPage(prevPage => {
    //             return prevPage + 1;
    //         })
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", getNewPage);
    //     return () => {
    //         window.removeEventListener("scroll", getNewPage);
    //     }
    // }, []);

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

    function handleButtonClick() {
        setLightTheme(prev => {
            return !prev;
        })
    }

    function handlePageChange(step) {
        setPage(prev => {
            return (prev + totPages + step) % totPages;
        })
    }

    return (<>
        <div className="header">
            <h1>Search Hacker News</h1>
            <Button default onButtonClick={handleButtonClick}>{lightTheme ? "Light" : "Dark"}</Button>
        </div>
        <Input query={query} onQueryChange={handleQueryChange} />
        <div className="buttons">
            <Button default value={-1} onButtonClick={handlePageChange}>Prev</Button>
            <div className="location">{page + 1} of {totPages}</div>
            <Button default value={1} onButtonClick={handlePageChange}>Next</Button>
        </div>
        {loading && <Loader />}
        <div className="container">
            {!loading && stories.map((story, index) => {
                return <Story key={index} story={story} onStoryRemove={handleStoryRemove} />
            })}
        </div>
    </>)
}
