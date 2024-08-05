import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MealForm from "./components/MealForm/MealForm";

export type Meal = {
  name: string;
  ingredients: string[];
  id?: string;
};

function App() {
  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [showMealForm, setShowMealForm] = useState(false);
  const [currentMeal, setCurrentMeal] = useState<Meal | undefined>()

  async function getAllMeals() {
    const resp = await fetch("https://java.leedyer.com/api/meals");
    if (resp) {
      const data = await resp.json();
      // console.log(data)
      setAllMeals(data);
    }
  }

  async function deleteAllMeals() {
    const resp = await fetch("https://java.leedyer.com/api/meals", {
      method: "DELETE",
    });
    if (resp.ok) {
      alert("All Meals Deleted!");
    } else alert("whoops it no worky");
  }

  async function deleteMeal(id: string) {
    const resp = await fetch(`https://java.leedyer.com/api/meals/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      setAllMeals(allMeals.filter((meals) => meals.id !== id));
      alert(`Item ${id} successfully removed.`);
    } else {
      alert("Error removing item from database!");
    }
  }

  function clickAddMeal(nextMeal: Meal | undefined) {
    if (!showMealForm && nextMeal !== undefined) setAllMeals([...allMeals.filter(meal => meal.id !== nextMeal.id), nextMeal])
    setShowMealForm(!showMealForm)
  }

function updateMeal(meal: Meal) {
  setCurrentMeal(meal)
  setShowMealForm(true);
}

  /////////   RETURN   ///////

  if (showMealForm) {
    return <MealForm clickAddMeal={clickAddMeal} currentMeal={currentMeal} />;
  } else {
    return (
      <>
        <Header />
        <MainContainer
          getAllMeals={getAllMeals}
          deleteAllMeals={deleteAllMeals}
          deleteMeal={deleteMeal}
          updateMeal={updateMeal}
          allMeals={allMeals}
          clickAddMeal={clickAddMeal}
        />
      </>
    );
  }
}

export default App;
