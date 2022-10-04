import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader"
import Users from "./Users"
import Error from "./Error"
import Footer from "./Footer"

export default function App() {
    const [followers, setFollowers] = useState([]);
    const {get, loading} = useFetch("https://api.github.com/users/john-smilga/followers?per_page=100");
    const [error, setError] = useState(null);
    const [group, setGroup] = useState(-1);
    const [curFollowers, setCurFollowers] = useState([]);

    // Handle the errors

    function handlePageChange(newPage) {
        setGroup(newPage);
    }

    function handlePageIncrement(aux) {
        setGroup(prevVal => {
            return (prevVal + 1) % 10;
        })
    }

    function handlePageDecrement(aux) {
        setGroup(prevVal => {
            return (prevVal + 9) % 10;
        })
    }

    useEffect(() => {
        setCurFollowers(followers.slice(group * 10, group * 10 + 10));
    }, [group]);

    useEffect(() => {
        get("")
        .then(data => {
            console.log(data);
            setFollowers(data);
            setGroup(0);
        })
        .catch(error => setError(error));
    }, []);

    return (<>
        <div className="header"><h2>Pagination</h2></div>
        <div className="underline"></div>
        {!error && <div className="container">
            {loading && <Loader />}
            <Users users={curFollowers} />
        </div>}
        {error && <Error message={error.message} />}
        <Footer group={group} onPageIncrement={handlePageIncrement} 
        onPageDecrement={handlePageDecrement} onPageChange={handlePageChange} />
    </>)
}
