import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App"; 

export default function RecipeList(props) {
  const value = useContext(RecipeContext);
  return (
    // LIST
    <div className="flex max-w-3xl flex-col px-6 py-8 pb-20">
      {/* RECIPE CARDS */}
      {props.recipes.map((recipe, ind) => {
        return (
          <Recipe
            key={ind}
            {...recipe}
            color={props.color}
          />
        );
      })}

      {/* ADD RECIPE BUTTON */}
      <div className="my-4 flex justify-center">
        <button
          className="m-2 flex h-14 w-14 select-none items-center justify-center rounded-md bg-amber-400 p-4 text-center font-mono text-5xl leading-8 tracking-wider text-slate-50 shadow outline-none transition-all hover:outline-1 hover:outline-offset-8 hover:outline-amber-300"
          onClick={value.handleRecipeAdd}
        >
          +
        </button>
      </div>
    </div>
  );
}
