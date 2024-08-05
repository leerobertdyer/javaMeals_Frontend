import { Meal } from "../../App";
import Button from "../Button/Button";

type PropsDefinition = {
    meal: Meal
  deleteMeal: (id: string) => void;
  updateMeal: (meal: Meal) => void;
};

export default function MealItem(props: PropsDefinition) {
  const { meal, deleteMeal, updateMeal } = props;
  const { id, ingredients, name } = meal;

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 bg-javaTeal-dark p-4 mb-4 rounded-md">
        <h2 className="w-full bg-javaTeal-light rounded-lg text-javaTeal-dark text-[2rem]">{name.toUpperCase()}</h2>
        <ul className="p-2 bg-javaRed-light rounded-lg flex flex-col items-start gap-2 w-[60%]">
          {ingredients.map((ing, key) => (
            <li key={key}>-{ing}</li>
          ))}
        </ul>
        {id && (
          <div className="flex w-full justify-center gap-4">
            <Button onClick={() => deleteMeal(id)} title="delete me" />
            <Button onClick={() => updateMeal(meal)} title="edit me" />
          </div>
        )}
      </div>
    </>
  );
}
