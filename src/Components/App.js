import React from "react";
import RecipeList from "./RecipeList";
import "../index.css";

function App() {
  return (
    <div className="flex h-screen bg-slate-200">
      <RecipeList recipes={sampleRecipes} />
      <div className="w-1/2 bg-zinc-400 p-4 text-lg font-semibold tracking-wide text-zinc-50">
        HI MOM
      </div>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: `1. Put salt on Chicken\n
        2. Put chicken in oven\n
        3. Eat the chicken`,
    ingredients: [
      {
        name: "Chicken",
        amount: "3lbs",
        id: 1,
      },
      {
        name: "Salt",
        amount: "2 Tbsp",
        id: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: `1. Put paprika on Pork\n
        2. Put pork in oven\n
        3. Eat the pork`,
    ingredients: [
      {
        name: "Pork",
        amount: "5lbs",
        id: 3,
      },
      {
        name: "Paprika",
        amount: "2 Tbsp",
        id: 4,
      },
    ],
  },
];

export default App;
