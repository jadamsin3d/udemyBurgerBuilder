import React from "react";
import Aux from "../../../hoc/Auxillary";
import Buttons from "../../UI/Button/Buttons";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Buttons btnType="Danger" clicked={props.purchasedCanceled}>
        Cancel
      </Buttons>
      <Buttons btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Buttons>
    </Aux>
  );
};

export default orderSummary;
