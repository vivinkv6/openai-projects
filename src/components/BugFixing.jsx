import React, { useState } from "react";


function BugFixing() {

    const [prompt, setPrompt] = useState(`##### Fix bugs in the below function\n
    ### Buggy 'language' \n\n Paste Source Code Here \n\n\n ### Fixed 'language'`);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
  
  
  
    const fixingBug= async () => {
      setCode("");
      setLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}bugfixer`, {
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
      value={prompt}
        cols="30"
        rows="15"
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
    </center>
    <center>
      <button className="btn btn-primary mt-3" onClick={fixingBug}>
        Fixing Bug
      </button>
    </center>
    {loading ? (
      <>
        <center className="text-light mt-5 mb-5">
          <h3>Fixing Bug</h3>
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
  )
}

export default BugFixing
