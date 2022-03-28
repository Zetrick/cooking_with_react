import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const value = useContext(RecipeContext);
  return (
    // CARD
    <div className={`first:border-t-${props.color}-400 px-6 py-4 mb-8 rounded shadow-lg first:border-t-4 border-slate-300 bg-slate-50 `}>
      {/* CARD CONTENTS */}
      <div className="flex justify-between mb-4">
        {/* TITLE */}
        <div className="w-1/2 border-b-2 border-slate-300">
          <h3 className="w-full px-2 pb-1 text-2xl font-semibold tracking-wide text-slate-800">
            {props.name}
          </h3>
        </div>

        {/* EDIT / DELETE BUTTONS */}
        <div className="flex justify-end w-2/5 h-10">
          <div className="flex flex-wrap items-center justify-center h-10 sm:justify-end">
            <button className="w-20 p-1 m-1 text-sm tracking-wider uppercase transition-all rounded select-none border-slate-300 bg-slate-300 text-slate-50 hover:bg-slate-400"
            onClick={() => value.handleRecipeEdit(props.id)}>
              Edit
            </button>
              <button className="w-8 h-8 ml-4 font-mono leading-tight uppercase transition-all rounded-full select-none hover:bg-slate-200 text-slate-400"
              onClick={ () => value.handleRecipeDelete(props.id)}>
                &times;
              </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-dashed">
        {/* COOK TIME */}
        <div className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Cook Time:
          </span>
          <span className="font-light">{props.cookTime}</span>
        </div>
        {/* SERVINGS */}
        <div className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">Servings:</span>
          <span className="font-light">{props.servings}</span>
        </div>
        {/* INSTRUCTIONS */}
        <div className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Instructions:
          </span>
          <div>{props.instructions.map((inst, ind) => {
            return <p className="flex ml-2 font-light" key={ind}><span className="w-6">{ind+1}.</span>{inst}</p>
          })}</div>
        </div>
        {/* INGREDIENTS LIST */}
        <div className="py-3 mb-1 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Ingredients:
          </span>
          <div>
            <IngredientList ingredients={props.ingredients} />
          </div>
        </div>
      </div>
    </div>
  );
}
