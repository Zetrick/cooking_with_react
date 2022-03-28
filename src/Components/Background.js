import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Background(props) {
  let colors_arr = [`bg-${props.color}-100`,`bg-${props.color}-200`,`bg-${props.color}-300`,`bg-${props.color}-400`,`bg-${props.color}-500`,`bg-${props.color}-600`,`bg-${props.color}-700`,`bg-${props.color}-800`,`bg-${props.color}-900`, `bg-${props.color}-800`, `bg-${props.color}-700`];
  return (
    <div className="w-1/2 ">
      {colors_arr.map((color, ind) => {
        return <div className={`h-40 ${colors_arr[ind]}`} key={uuidv4()}></div>
      })}
    </div>
  );
}
