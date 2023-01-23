import React from "react";
import MeasureComplexity from "../components/MeasureComplexity";

function Complexity() {
  return (
    <div className="container mt-5">
      <div className="row">
      <h2 className="text-light text-center">Measuring Complexity</h2>
        <MeasureComplexity />
      </div>
    </div>
  );
}

export default Complexity;
