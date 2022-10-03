import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Cocktails from "./Cocktails"
import CocktailDetails from "./CocktailDetails"
import useFetch from "./useFetch";
import Navbar from "./Navbar"
import Loader from "./Loader"
import About from "./About"
import Input from "./Input"

export default function App() {
    const [drinks, setDrinks] = useState([]);
    // const [auxDrinks, setAuxDrinks] = useState([]);
    const {get, loading} = useFetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const [substring, setSubstring] = useState("");

    useEffect(() => {
        get(substring)
        .then(data => {
            setDrinks(data.drinks);
            // setAuxDrinks(data.drinks);
        })
        .catch(error => console.log(error))
    }, [get, substring]);

    function handleInputChange(event) {
        setSubstring(event.target.value);
    }

    return (<>
        <Navbar />
        <Routes>
            <Route path="/cocktails" element={<>
                {loading && <Loader />}
                {!loading && <Input substring={substring} onInputChange={handleInputChange} />}
                {!loading && <Cocktails drinks={drinks} />}
            </>} />
            <Route path="/about" element={<>
                <About />
            </>} />
            <Route path="/cocktails/:id" element={<>
                {loading && <Loader />}
                {!loading && <CocktailDetails drinks={drinks} />}
            </>} />
        </Routes>
    </>)
}
