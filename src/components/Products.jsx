import { useState, useEffect } from "react";
import axios from "axios";
import MealItem from "./MealItem";

const Products = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchmeals = async () => {
      try {
        const res = await axios.get("http://localhost:3000/meals");
        const data = res.data;
        // console.log(res.data);
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    }; 
    fetchmeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
};

export default Products;
