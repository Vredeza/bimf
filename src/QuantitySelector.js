import "./QuantitySelector.css"
import {useState} from "react";

function QuantitySelector({updateQuantity}) {

    const [quantity, setQuantity] = useState(0)

    const changeQuantity = (newQuantity) => {
        setQuantity(newQuantity)
        updateQuantity(newQuantity)
    }

    const increment = () => {
        changeQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 0) {
            changeQuantity(quantity -1);
        }
    }

    const requestNewValue = () => {
        let newValue = prompt("New amount : ", quantity.toString())
        if (!isNaN(newValue)) { // is a number
            changeQuantity(parseFloat(newValue));
        }
    }

    return (
        <div className={"quantitySelector"}>

            <button onClick={decrement}>-</button>
            <button className={quantity === 0 && "null"} onClick={requestNewValue}>{quantity}</button>
            <button onClick={increment}>+</button>

        </div>
    );
}

export default QuantitySelector;