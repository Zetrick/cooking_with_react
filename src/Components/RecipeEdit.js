import React, { useState } from "react";

export default function RecipeEdit(props) {
  const [name, setName] = useState(props.recipe.name);
  const [cookTime, setCookTime] = useState(props.recipe.cookTime);
  const [servings, setServings] = useState(props.recipe.servings);

  function get_updated_recipe() {
    return {
      name: name,
      cookTime: cookTime,
      servings: servings,
    };
  }

  return (
    <div
      className={`} mx-6 mt-8 w-full rounded border-t-4 border-t-cyan-400 bg-white
      pb-6`}
    >
      <div className="flex items-center justify-between ">
        <p className="ml-10 mt-4 select-none border-b border-b-slate-100 pb-1 text-2xl uppercase tracking-[12px] text-slate-200">
          Edit Recipe
        </p>
        <button
          className=" mt-2 mr-4 h-8 w-8 rounded-full text-slate-400 transition-all hover:bg-slate-200"
          onClick={() => props.closeRecipeEdit()}
        >
          &times;
        </button>
      </div>
      <div className="divide-y divide-dashed divide-slate-300 p-6">
        <div className="mt-2 mr-6 grid grid-cols-[100px,1fr] place-content-center gap-3">
          <label
            className="py-2 text-lg font-semibold text-slate-800"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-slate-100 px-3 py-2  font-light"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label
            className=" py-2 text-lg font-semibold text-slate-800"
            htmlFor="cookTime"
          >
            Cook Time
          </label>
          <input
            className="bg-slate-100 px-3  font-light"
            id="cookTime"
            type="text"
            name="cookTime"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
          <label
            className=" py-2 text-lg font-semibold text-slate-800"
            htmlFor="servings"
          >
            Servings
          </label>
          <input
            className="bg-slate-100 px-3 py-2  font-light"
            id="servings"
            type="number"
            min={1}
            name="servings"
            value={servings}
            onChange={(e) => setServings(parseInt(e.target.value))}
          />
        </div>
        <div className="mt-6 flex justify-between py-2 pt-4">
          <label
            className="text-lg font-semibold text-slate-800"
            htmlFor="instructions"
            id="instructions"
          >
            Instructions
          </label>
          <button className="mx-6 h-8 w-8 rounded-md bg-slate-100 font-mono transition-all hover:bg-slate-200">
            +
          </button>
        </div>
        <div className="mt-2 flex justify-between py-2 pt-4">
          <label
            className="text-lg font-semibold text-slate-800"
            htmlFor="ingredients"
            id="ingredients"
          >
            Ingredients
          </label>
          <button className="mx-6 h-8 w-8 rounded-md bg-slate-100 font-mono transition-all hover:bg-slate-200">
            +
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className=" mb-4 mt-16 rounded-md bg-cyan-400 px-10 py-4 text-2xl font-light uppercase tracking-widest text-white transition-all hover:opacity-80 "
            onClick={() =>
              props.updateFunc(props.recipe.id, get_updated_recipe())
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
