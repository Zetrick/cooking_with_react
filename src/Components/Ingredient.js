import React from "react";

export default function Ingredient(props) {
  return (
    <div className="grid grid-cols-2">
      <span className="flex items-center mr-4 text-lg font-medium text-rose-800 rounded-sm">{props.name}</span>
      <span className="flex items-center justify-center py-2 text-sm font-light text-center bg-rose-100 rounded-sm">{props.amount}</span>
    </div>
  );
}
