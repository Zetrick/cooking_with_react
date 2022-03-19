import React from "react";

export default function Ingredient(props) {
  return (
    <div className="mt-1 flex items-center">
      <span className="mr-4 text-lg font-medium text-red-800">{props.name}</span>
      <span className="bg-red-100 px-1.5 py-0.5 text-sm font-light">{props.amount}</span>
    </div>
  );
}
