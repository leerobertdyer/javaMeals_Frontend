import { useState } from "react";
import { Meal } from "../../App";

type PropsDefinition = {
  clickAddMeal: (meal: Meal) => void;
  currentMeal: Meal | undefined;
};

export default function MealForm({
  clickAddMeal,
  currentMeal,
}: PropsDefinition) {
  const [mealName, setMealName] = useState("");
  const [mealIngredients, setMealIngredients] = useState<string[]>([]);
  const [nextIngredient, setNextIngredient] = useState("");

  function addIngredient() {
    const nextMealIngredients = [...mealIngredients, nextIngredient];
    setNextIngredient("");
    setMealIngredients(nextMealIngredients);
  }

  async function submitForm() {
    const finalIngredients = [...mealIngredients];
    if (nextIngredient) finalIngredients.push(nextIngredient);

    const method = currentMeal ? "PUT" : "POST";
    const url = currentMeal
      ? `https://java.leedyer.com/api/meals/${currentMeal.id}`
      : "https://java.leedyer.com/api/meals";

    const resp = await fetch(url, {
      method,
      headers: { "Content-Type": "Application/Json" },
      body: JSON.stringify({
        name: mealName,
        ingredients: finalIngredients,
      }),
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log("added: ", data);
      clickAddMeal({
        name: mealName,
        ingredients: mealIngredients,
        id: data.id,
      });
    } else alert("error adding meal to DB");
  }

  return (
    <>
      <div>
        <form
          className="
            w-[90dvw]
            max-w-[50rem]
            h-fit
            flex flex-col 
            gap-4 p-4
            bg-javaTeal-light 
            text-javaBlack 
            border border-javaRed-dark"
        >
          <h1>{currentMeal ? `Let's edit your "${currentMeal.name}"` : "Add Your Latest Meal} (!_!)"}</h1>
          <input
            className="bg-white text-javaBlack p-4 rounded-xl"
            type="text"
            placeholder="Meal Name"
            onChange={(e) => setMealName(e.target.value)}
          />
          <input
            className="bg-white text-javaBlack p-4 rounded-xl"
            type="text"
            placeholder="ingredient..."
            onChange={(e) => setNextIngredient(e.target.value)}
          />
          {mealIngredients.map((_ing, key) => (
            <input
              className="bg-white text-javaBlack p-4 rounded-xl"
              key={key}
              type="text"
              placeholder="ingredient..."
              onChange={(e) => setNextIngredient(e.target.value)}
            />
          ))}
          <button
            type="button"
            className="text-white border border-white bg-javaBlack"
            onClick={() => addIngredient()}
          >
            +ingredient
          </button>
          <button
            className="text-white border border-white bg-javaBlack"
            type="submit"
            onClick={() => submitForm()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
