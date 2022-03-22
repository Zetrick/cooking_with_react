import React from "react";
import RecipeList from "./RecipeList";
import "../index.css";

function App() {
  return (
    <div className="absolute flex w-full h-full overflow-hidden">
      <div className="w-1/2 overflow-auto">
        <div className="absolute w-full">
          <div className="h-36 bg-rose-100"></div>
          <div className="h-36 bg-rose-200"></div>
          <div className="h-36 bg-rose-300"></div>
          <div className="h-36 bg-rose-400"></div>
          <div className="h-36 bg-rose-500"></div>
          <div className="h-36 bg-rose-600"></div>
          <div className="h-36 bg-rose-700"></div>
          <div className="h-36 bg-rose-800"></div>
          <div className="h-36 bg-rose-900"></div>
        </div>
        <RecipeList recipes={sampleRecipes} />
      </div>
      <div className="w-1/2 overflow-auto">
        <div className="absolute w-full">
          <div className="h-36 bg-cyan-100"></div>
          <div className="h-36 bg-cyan-200"></div>
          <div className="h-36 bg-cyan-300"></div>
          <div className="h-36 bg-cyan-400"></div>
          <div className="h-36 bg-cyan-500"></div>
          <div className="h-36 bg-cyan-600"></div>
          <div className="h-36 bg-cyan-700"></div>
          <div className="h-36 bg-cyan-800"></div>
          <div className="h-36 bg-cyan-900"></div>
        </div>
        <RecipeList recipes={sampleRecipes} />
      </div>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken with Catchetori Alfredo Sauce",
    servings: 3,
    cookTime: "1:45",
    instructions: ["Put salt on Chicken", "Put chicken in oven", "Eat the chicken"],
    ingredients: [
      {
        name: "Chicken",
        amount: "3lbs",
        id: 4,
      },
      {
        name: "Salt",
        amount: "2 Tbsp",
        id: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: ["Put paprika on Pork", "Put pork in oven", "Eat the pork"],
    ingredients: [
      {
        name: "Pork",
        amount: "5lbs",
        id: 6,
      },
      {
        name: "Paprika",
        amount: "2 Tbsp",
        id: 7,
      },
    ],
  },
  {
    id: 3,
    name: "Plain Steak",
    servings: 5,
    cookTime: "0:45",
    instructions: ["Put salt and pepper on Steak", "Put steak on grill", "Eat the steak"],
    ingredients: [
      {
        name: "Steak",
        amount: "2lbs",
        id: 8,
      },
      {
        name: "Paprika",
        amount: "2 Tbsp",
        id: 9,
      },
    ],
  },
];

export default App;
