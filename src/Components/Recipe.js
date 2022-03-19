import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  return (
    // CARD
    <div className="mb-4 rounded border border-slate-300 bg-slate-50 px-6 py-4 shadow-lg">
      {/* CARD CONTENTS */}
      <div className="mb-8 flex justify-between">
        {/* TITLE */}
        <h3 className="border-b-2 border-slate-300 text-2xl font-semibold tracking-wide text-slate-800">
          {props.name}
        </h3>

        {/* EDIT / DELETE BUTTONS */}
        <div className="flex h-10 w-2/5 items-center justify-end">
          <button className="m-1 mx-3 w-1/3 select-none rounded border border-slate-300 bg-neutral-400 p-1 text-sm uppercase tracking-wider text-slate-50 transition-all hover:scale-105 hover:opacity-90">
            Edit
          </button>
          <button className="flex h-7 w-7 select-none items-center justify-center rounded-full border border-slate-300 bg-red-400 p-3 text-sm uppercase tracking-wider text-transparent transition-all hover:w-24 hover:text-slate-50">
            DELETE
          </button>
        </div>
      </div>

      <ul className="divide-y divide-dashed">
        {/* COOK TIME */}
        <li className="border-slate-300 py-3">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Cook Time:
          </span>
          <span>{props.cookTime}</span>
        </li>
        {/* SERVINGS */}
        <li className="border-slate-300 py-3">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">Servings:</span>
          <span>{props.servings}</span>
        </li>
        {/* INSTRUCTIONS */}
        <li className="border-slate-300 py-3">
          <span className="mr-2 text-lg font-semibold tracking-wide text-slate-800">
            Instructions:
          </span>
          <div>{props.instructions}</div>
        </li>
        {/* INGREDIENTS LIST */}
        <li className="mb-1 border-slate-300 py-3">
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
