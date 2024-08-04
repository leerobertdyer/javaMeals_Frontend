import { useEffect, useState } from "react";
import Button from "../Button/Button";

export type Meal = {
    name: string;
    ingredients: string[];
}

export default function MainContainer() {
    const [allMeals, setAllMeals] = useState<Meal[]>([])

    useEffect(() => {
        async function getAllMeals() {
            const resp = await fetch("http://java-meals.us-east-1.elasticbeanstalk.com/api/meals")
            if (resp) {
                const data = await resp.json();
                console.log(data)
                setAllMeals(data)
            }
        }
        getAllMeals()
    }, [])

    return (
        <>
        <div className="
        flex flex-col 
        items-center justify-between 
        bg-javaGray 
        border-4 border-javaTeal-light 
        rounded-xl
        w-[90dvw] max-w-[50rem]
        h-[20rem]
        shadow-javaTeal-dark
        shadow-xl
        ">
            Here is the magic box to upload meals.

            <div className="flex justify-between w-full p-4">
                <Button onClick={() => console.log('b1')} title="Add A Meal"/>
                <Button onClick={() => console.log('b2')} title="View All Meals"/>
                <Button onClick={() => console.log('b3')} title="Delete All Meals"/>
            </div>
        </div>
        {allMeals.map(meal => <h1>{meal.name}</h1>)}
        </>
    )
}