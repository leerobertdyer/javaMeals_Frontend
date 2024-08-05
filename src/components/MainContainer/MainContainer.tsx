import Button from "../Button/Button";
import { Meal } from "../../App";
import MealItem from "../MealItem/MealItem";

type PropsDefinition = {
    getAllMeals: () => void;
    deleteAllMeals: () => void;
    deleteMeal: (id: string) => void;
    updateMeal: (meal: Meal) => void;
    allMeals: Meal[];
    clickAddMeal: (meal: Meal | undefined) => void;
}

export default function MainContainer(props: PropsDefinition) {
    const {getAllMeals, deleteAllMeals, deleteMeal, clickAddMeal, updateMeal, allMeals } = props;

    return (
        <>
        <div className="
        flex flex-col 
        items-center justify-center 
        bg-javaGray 
        border-4 border-javaTeal-light 
        rounded-xl
        w-[90dvw] max-w-[50rem]
        h-[10rem]
        mb-[4rem]
        shadow-javaTeal-dark
        shadow-xl
        ">
            <div className="flex justify-between w-full p-4">
                <Button onClick={() => clickAddMeal(undefined)} title="Add A Meal"/>
                <Button onClick={() => getAllMeals()} title="View All Meals"/>
                <Button onClick={() => deleteAllMeals()} title="Delete All Meals"/>
            </div>
        </div>
        {allMeals.map((meal, key) => <MealItem key={key} updateMeal={updateMeal} deleteMeal={deleteMeal} meal={meal}/>)}
        </>
    )
}