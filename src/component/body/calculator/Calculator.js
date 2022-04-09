import React, { useState } from "react";
import Display from "./Display";
import CalButton from "./Button";

export default function Calculator() {
  return (
    <div className="container shadow-lg rounded">
      <Display input={7} />

      <div className="row row-sm row-md p-2 m-1 text-center">
        <CalButton styleclass="btn-warning" value="AC" />
        <CalButton value="Back" />
        <CalButton value="/" />
        <CalButton value="*" />
      </div>
      <div className="row row-sm row-md p-2 m-1 text-center">
        <CalButton value="7" />
        <CalButton value="8" />
        <CalButton value="9" />
        <CalButton value="-" />
      </div>
      <div className="row row-sm row-md p-2 m-1 text-center">
        <CalButton value="4" />
        <CalButton value="5" />
        <CalButton value="6" />
        <CalButton value="+" />
      </div>
      <div className="row row-sm row-md p-2 m-1 text-center">
        <CalButton value="1" />
        <CalButton value="2" />
        <CalButton value="3" />
        <CalButton value="." />
      </div>

      <div className="row row-sm row-md p-2 m-1 text-center">
        <CalButton value="0" />
        <CalButton value="00" />

        <CalButton value="=" styleclass="btn-success" />
      </div>
    </div>
  );
}
