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
    const [auxDrinks, setAuxDrinks] = useState([]);
    const {get, loading} = useFetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const [substring, setSubstring] = useState("");

    useEffect(() => {
        get("")
        .then(data => {
            setDrinks(data.drinks);
            setAuxDrinks(data.drinks);
        })
        .catch(error => console.log(error))
    }, []);

    function handleInputChange(event) {
        const newSubstring = event.target.value;
        const newDrinks = drinks.filter(drink => {
            if (drink.strDrink.includes(newSubstring)) {
                return drink;
            }
        })
        setAuxDrinks(newDrinks);
        setSubstring(newSubstring);
    }
    // To do: ingredients, logic, organisation, error message, revision

    return (<>
        <Navbar />
        <Input substring={substring} onInputChange={handleInputChange} />
        <Routes>
            <Route path="/cocktails" element={loading ? <Loader /> : <>
                <Cocktails drinks={auxDrinks} />
            </>} />
            <Route path="/about" element={<>
                <About />
            </>} />
            <Route path="/cocktails/:id" element={loading ? <Loader /> : <CocktailDetails drinks={auxDrinks} />} />
        </Routes>
    </>)
}
