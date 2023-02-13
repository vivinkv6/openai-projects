import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function MeasureComplexity() {
  const [code, setCode] = useState("\nPaste Source code Here\n\n\nThe time complexity is");
  const [complexity, setComplexity] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const calculateComplexity = async () => {
    setLoading(true);
    setComplexity("");
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: code,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response.data.choices[0].text);
    setComplexity(response.data.choices[0].text);
    setLoading(false);
  };

  return (
    <div className="col-md-12">
      <center>
        <textarea
        value={code}
          cols="30"
          rows="15"
          onChange={(e) => setCode(e.target.value)}
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
