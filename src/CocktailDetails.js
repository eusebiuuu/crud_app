import {Link, useParams} from "react-router-dom"

export default function CocktailDetails(props) {
    const {id} = useParams();
    let drink;
    props.drinks.map(curDrink => {
        if (curDrink.idDrink === id) {
            drink = curDrink;
        }
    })
    const ingredients = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3];

    return (<div className="details-container">
        <h2>Cocktail details</h2>
        <Link to="/cocktails"><button className="btn">Back home</button></Link>
        <h3>{drink.strDrink}</h3>
        <div className="details">
            <div className="details-image"><img src={drink.strDrinkThumb} /></div>
            <div className="info">
                <div>
                    <span>Name: </span>{drink.strDrink}
                </div>
                <div>
                    <span>Category: </span>{drink.strCategory}
                </div>
                <div>
                    <span>Info: </span>{drink.strAlcoholic}
                </div>
                <div>
                    <span>Instructions: </span>{drink.strInstructions}
                </div>
                <div className="ingredients">
                    <span>Ingredients: </span>
                    {ingredients.map((ingredient, index) => {
                        return <div key={index}>{ingredient}</div>;
                    })}
                </div>
            </div>
        </div>
    </div>)
}