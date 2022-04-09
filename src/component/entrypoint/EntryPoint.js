import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Calculator from "../body/calculator/Calculator";

export default function EntryPoint() {
  return (
    <>
      <Header />
      <Calculator />
      <Footer />
    </>
  );
}
