import React, { useState } from "react";
import Button from "./ui/Button";


const MealItem = ({ meal }) => {
  const[cartData , setCartData] = useState([]);
  const addToCartHandler = () => {
    
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
