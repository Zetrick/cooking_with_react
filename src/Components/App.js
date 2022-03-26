import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import Background from "./Background";
import "../index.css";

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = "Cooking_With_React.Recipes";

// first:border-t-amber-400
// first:border-t-amber-100
// first:border-t-cyan-400

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    console.log("All done rendering... calling the [] useEffect");
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipesJSON) {
      setRecipes(JSON.parse(recipesJSON));
      console.log("Setting recipes from Local Storage...");
    }
  }, []);

  useEffect(() => {
    console.log("recipes array changed... Setting Local Storage to: ", recipes);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    return () => console.log("Recipes set!");
  }, [recipes]);

  const handleRecipeAddFunc = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New Reshi",
      servings: 1,
      cookTime: "1:00",
      instructions: ["instruc 1", "instruc 2", "instruc 3"],
      ingredients: [
        {
          id: uuidv4(),
          name: "ing name",
          amount: "1 cup",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDeleteFunc = (id_of_recipe) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id_of_recipe));
  };

  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAddFunc,
    handleRecipeDelete: handleRecipeDeleteFunc,
  };

  return (
    <div className="">
      {/* FIXED BACKGROUND / ROTATED DIVS */}
      <div className="fixed z-0 flex w-full">
        <Background color="amber" />
        <Background color="cyan" />
      </div>

      {/* CONTAINER FOR RECIPE CARDS & EDIT SECTION */}
      <div className="relative z-10 flex">
        {/* RECIPE CARD CONTAINER */}
        <div className="w-1/2">
          <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList
              color="amber" //
              recipes={recipes}
            />
          </RecipeContext.Provider>
        </div>
        {/* EDIT SECTION CONTAINER */}
        {/* RELATIVE PARENT */}
        <div className="w-1/2 h-screen flex justify-center items-center">
          {/* FIXED CHILD - RECIPE EDIT */}
          <RecipeEdit />
        </div>
      </div>
    </div>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "Plain Chicken with Catchetori Alfredo Sauce",
    servings: 3,
    cookTime: "1:45",
    instructions: ["Put salt on Chicken", "Put chicken in oven", "Eat the chicken"],
    ingredients: [
      {
        name: "Chicken",
        amount: "3lbs",
        id: uuidv4(),
      },
      {
        name: "Salt",
        amount: "2 Tbsp",
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: ["Put paprika on Pork", "Put pork in oven", "Eat the pork"],
    ingredients: [
      {
        name: "Pork",
        amount: "5lbs",
        id: uuidv4(),
      },
      {
        name: "Paprika",
        amount: "2 Tbsp",
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Plain Steak",
    servings: 5,
    cookTime: "0:45",
    instructions: ["Put salt and pepper on Steak", "Put steak on grill", "Eat the steak"],
    ingredients: [
      {
        name: "Steak",
        amount: "2lbs",
        id: uuidv4(),
      },
      {
        name: "Paprika",
        amount: "2 Tbsp",
        id: uuidv4(),
      },
    ],
  },
];

export default App;
