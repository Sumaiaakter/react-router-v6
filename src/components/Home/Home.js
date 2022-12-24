import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  const handleAddToOrder = (meal) => {
    console.log(meal);
  };
  return (
    <div className="text-center">
      <h1>Search Food</h1>
      <input
        onChange={searchFood}
        className="bg-slate-300"
        placeholder="Search by name"
        type="text"
      />
      <div>
        <h1>Result found: {meals.length}</h1>

        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            meal={meal}
            handleAddToOrder={handleAddToOrder}
          ></Meal>
        ))}
      </div>
    </div>
  );
};

export default Home;
