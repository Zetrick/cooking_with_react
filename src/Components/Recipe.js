import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  return (
    // CARD
    <div className="px-6 py-4 mb-4 border rounded shadow-lg border-slate-300 bg-slate-50">
      {/* CARD CONTENTS */}
      <div className="flex justify-between mb-8">
        {/* TITLE */}
        <div className="w-1/2 border-b-2 border-slate-300">
          <h3 className="w-full px-2 pb-2 text-2xl font-semibold tracking-wide text-slate-800">
            {props.name}
          </h3>
        </div>

        {/* EDIT / DELETE BUTTONS */}
        <div className="flex justify-end w-2/5 h-10">
          <div className="flex flex-wrap items-center justify-center h-10 sm:justify-end">
            <button className="w-20 p-1 m-1 text-sm tracking-wider uppercase transition-all rounded select-none border-slate-300 bg-slate-300 text-slate-50 hover:bg-slate-400">
              Edit
            </button>
              <button className="flex items-center justify-center w-8 h-8 p-3 ml-2 font-mono text-sm uppercase transition-all rounded-full select-none hover:bg-slate-200 text-slate-400">
                X
              </button>
          </div>
        </div>
      </div>

      <ul className="divide-y divide-dashed">
        {/* COOK TIME */}
        <li className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Cook Time:
          </span>
          <span className="font-light">{props.cookTime}</span>
        </li>
        {/* SERVINGS */}
        <li className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">Servings:</span>
          <span className="font-light">{props.servings}</span>
        </li>
        {/* INSTRUCTIONS */}
        <li className="py-3 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Instructions:
          </span>
          <div>{props.instructions.map((inst) => {
            return <p className="ml-2 font-light">{inst}</p>
          })}</div>
        </li>
        {/* INGREDIENTS LIST */}
        <li className="py-3 mb-1 border-slate-300">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Ingredients:
          </span>
          <div>
            <IngredientList ingredients={props.ingredients} />
          </div>
        </li>
      </ul>
    </div>
  );
}
