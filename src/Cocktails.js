import Cocktail from "./Cocktail";

export default function Cocktails(props) {
    const {drinks} = props;
    return <>
        <div className="list-container">
            {drinks.map(drink => {
                return <Cocktail key={drink.idDrink} drink={drink} />
            })}
        </div>
    </>
}