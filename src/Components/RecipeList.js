import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  return (
    // LIST
    <div className="flex flex-col max-w-3xl px-6 py-8 pb-20 mx-auto">
      {/* RECIPE CARDS */}
      {props.recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} color={props.color} />;
      })}

      {/* ADD RECIPE BUTTON */}
      <div className="flex justify-center my-4">
        <button className={`flex items-center justify-center p-4 m-2 font-mono text-5xl leading-8 tracking-wider text-center rounded-md shadow select-none w-14 h-14 bg-${props.color}-400 text-slate-50 hover:border hover:border-dashed hover:border-slate-200`}>
          +
        </button>
      </div>
    </div>
  );
}