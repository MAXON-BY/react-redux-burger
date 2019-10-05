import React from 'react'
import AuxHoc from "../../../hoc/AuxHoc";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {

    const ingredientSummery = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return(
        <AuxHoc>
            <h3>Your Order</h3>
            <p>Burger delicious ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </AuxHoc>
    )
};

export default OrderSummary