import React from "react";

const Meal = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  const { handleAddToOrder, meal } = props;

  return (
    <div>
      <img className="h-20 ml-20 w-20" src={strMealThumb} alt="" />
      <h1>{strMeal}</h1>
      <p>{strInstructions.slice(0, 100)}</p>

      <button onClick={() => handleAddToOrder(meal)}>ADD to cart</button>
    </div>
  );
};

export default Meal;
