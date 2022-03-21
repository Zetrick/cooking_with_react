import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  return (
    // LIST
    <div className="flex flex-col w-1/2 p-8">
      {/* RECIPE CARDS */}
      {props.recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}

      {/* ADD RECIPE BUTTON */}
      <div className="flex justify-center my-4">
        <button className="flex items-center justify-center w-14 h-14 p-4 m-2 font-mono text-5xl leading-8 tracking-wider text-center rounded-md shadow select-none bg-rose-400 text-slate-50 hover:opacity-90">
          +
        </button>
      </div>
    </div>
  );
}