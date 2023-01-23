import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function GeneratingCode() {

    const [words, setWords] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCode = async () => {
    setCode("");
    setLoading(true);
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: words,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["#", ";"],
    });
    setCode(response.data.choices[0].text);
    setLoading(false);
  };


  return (
   
        <div className="col-md-12">
          
          <center>
            <textarea
              cols="30"
              rows="15"
              onChange={(e) => setWords(e.target.value)}
            ></textarea>
          </center>
          <center>
            <button className="btn btn-primary mt-3" onClick={generateCode}>
              Generate Code
            </button>
          </center>
          {loading ? (
            <>
              <center className="text-light mt-5 mb-5"><h3>Generating Code</h3></center>
              
            </>
          ) : (
            <>
            
            </>
            
          )}
          {code.length>0 ?<center>
                <textarea className="mt-5" cols="30" rows="15" value={code}></textarea>
              </center> : <></>}
          
        </div>
     
  )
}

export default GeneratingCode
