import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  return (
    // LIST
    <div className="flex w-1/2 flex-col p-8">
      {/* RECIPE CARDS */}
      {props.recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}

      {/* ADD RECIPE BUTTON */}
      <div className="my-4 flex justify-center">
        <button className="m-2 select-none rounded-md border border-slate-400 bg-sky-700 py-3 px-4 text-lg tracking-wider text-slate-50 shadow hover:opacity-90 hover:scale-105">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
