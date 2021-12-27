import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Context.css";
export default function Operation({ val }) {
  const [query, setState] = useState(val);

  function Increment(value) {
    setState(query + value);
  }
  function Decrement(value) {
    setState(query - value);
  }
  const Multiply = (value) => {
    setState(query * value);
  };
  return (
    <div className="align">
      <h1>Counter:{query}</h1>
      <button onClick={() => Increment(1)}>Increment</button>
      <button onClick={() => Decrement(1)}>Decrement</button>
      <button onClick={() => Multiply(2)}>Decrement</button>
    </div>
  );
}
