import React, { useState } from "react";

function Answer() {
  const [prompt, setPrompt] = useState("Enter your question Here...\n\n\nThe answer is");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");


  const generateAnswer = async () => {
    setLoading(true);
    setAnswer("");

    try{
      const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}quiz`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({prompt})
      }).then(res=>res.json()).then(data=>setAnswer(data))
      
    }
    catch(err){
      
      console.log(err);
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
        <button className="btn btn-primary mt-3" onClick={generateAnswer}>
          Answer
        </button>
      </center>
      {loading ? (
        <h3 className="text-light text-center mt-3">Finding Answer</h3>
      ) : (
        <></>
      )}
      {answer.length > 0 ? (
        <p className="text-light text-center mt-5" style={{ fontSize: "25px" }}>
          {answer}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Answer;
