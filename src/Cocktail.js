import {Link} from "react-router-dom"

export default function Cocktail(props) {
    const {drink} = props;
    return (<div className="product-container">
        <img src={drink.strDrinkThumb} />
        <div className="product-content">
            <h3>{drink.strDrink}</h3>
            <h4>{drink.strGlass}</h4>
            <div>{drink.strAlcoholic}</div>
            <Link to={`/cocktails/${drink.idDrink}`}><button className="btn">Details</button></Link>
        </div>
    </div>)
}