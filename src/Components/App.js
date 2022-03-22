import React from "react";
import RecipeList from "./RecipeList";
import Background from "./Background";
import "../index.css";

let a1 = 'first:border-t-amber-300'
let c1 = 'first:border-t-cyan-300'

function App() {
  return (
    <div className="">
      <div className="fixed flex w-full z-0">
        <Background color="amber" />
        <Background color="cyan" />
      </div>
      <div className="flex relative z-10">
        <div className="w-1/2 h-screen">
          <RecipeList color="amber" recipes={sampleRecipes} />
        </div>
        <div className="relative">
          <div className="fixed w-1/2 h-1/2 p-8 mx-auto">
            <div className="bg-cyan-500 w-full h-full flex justify-center items-center border-2 border-cyan-300 rounded cursor-pointer hover:brightness-105">
              <p className="text-6xl text-cyan-100 tracking-wider text-center leading-normal">EDIT RECIPE HERE</p>
            </div>
          </div>
        </div>
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
    instructions: [
      "Put salt on Chicken",
      "Put chicken in oven",
      "Eat the chicken",
    ],
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
    instructions: [
      "Put salt and pepper on Steak",
      "Put steak on grill",
      "Eat the steak",
    ],
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
