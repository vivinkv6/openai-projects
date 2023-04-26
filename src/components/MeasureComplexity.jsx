import React, { useState } from "react";

function MeasureComplexity() {
  const [prompt, setPrompt] = useState(
    "\nPaste Source code Here\n\n\nThe time complexity is"
  );
  const [complexity, setComplexity] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateComplexity = async () => {
    setLoading(true);
    setComplexity("");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}complexity`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      )
        .then((res) => res.json())
        .then((data) => setComplexity(data));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="col-md-12">
      <center>
        <textarea
          value={prompt}
          cols="30"
          rows="15"
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
      </center>
      <center>
        <button className="btn btn-primary mt-3" onClick={calculateComplexity}>
          RUN
        </button>
      </center>
      {loading ? (
        <h3 className="text-light text-center mt-3">Measuring Complexity</h3>
      ) : (
        <></>
      )}
      {complexity.length > 0 ? (
        <p className="text-light text-center mt-5" style={{ fontSize: "25px" }}>
          {complexity}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MeasureComplexity;
