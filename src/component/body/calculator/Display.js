import React from "react";
import "./css/Calculator.css";
import Addition from "./Addition";
import CalButton from "./Button";

export default function Display(props) {
  return (
    <>
      <div className="p-3">
        <div className="h3">
          <p>{props.input}</p>
        </div>
        <div className="textright h3">
          <p>{props.output}</p>
        </div>
      </div>
    </>
  );
}
