import React from "react";
import Display from "./Display";

export default function CalButton(props) {
  let getValue = (e) => {
    let val = e.target.value;

    return val;
  };

  return (
    <>
      <button
        onClick={getValue}
        type="button"
        className={`col col-sm col-md shadow-lg m-2 btn ${props.styleclass} rounded`}
        value={props.value}>
        {props.value}
      </button>
    </>
  );
}

CalButton.defaultProps = {
  value: 10,
  styleclass: "btn-light",
};
