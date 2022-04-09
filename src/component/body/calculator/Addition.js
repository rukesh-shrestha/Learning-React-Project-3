import React from "react";

export default function Addition() {
  let add = () => {
    let val = 9;
    let val1 = 9;
    return val + val1;
  };
  return (
    <>
      <p>{add()}</p>
    </>
  );
}
