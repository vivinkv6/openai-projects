import React, { useState } from "react";


function GeneratingCode() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);



  const generateCode = async () => {
    setCode("");
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}sql`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })
        .then((res) => res.json())
        .then((data) => setCode(data));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="col-md-12">
      <center>
        <textarea
          cols="30"
          rows="15"
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
      </center>
      <center>
        <button className="btn btn-primary mt-3" onClick={generateCode}>
          Generate Code
        </button>
      </center>
      {loading ? (
        <>
          <center className="text-light mt-5 mb-5">
            <h3>Generating Code</h3>
          </center>
        </>
      ) : (
        <></>
      )}
      {code.length > 0 ? (
        <center>
          <textarea
            className="mt-5"
            cols="30"
            rows="15"
            value={code}
          ></textarea>
        </center>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GeneratingCode;
