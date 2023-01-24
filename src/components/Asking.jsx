import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
function Asking() {
  const [content, setContent] = useState("");
  const [createContent, setCreateContent] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateContent = async () => {
    setCreateContent("");
    setLoading(true);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: content,
      temperature: 0.3,
      max_tokens: 3500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setCreateContent(response.data.choices[0].text);
    setLoading(false);
  };

  return (
    <>
      {loading ? <h4 className="text-light text-center mt-5">Loading</h4> : <></>}
      {createContent.length > 0 ? (
        <center>
          
          <textarea className="text-light border-none mt-5 bg-dark lg" rows="15" cols="32" value={createContent}></textarea>
        </center>
      ) : (
        <></>
      )}

      <div style={{ position: "fixed", bottom: "5px" }}>
        <input
          type="text"
          style={{
            height: "50px",
            width: "270px",
            borderRadius: "10px",
            marginRight: "5px",
          }}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn btn-primary" onClick={generateContent}>
          Send
        </button>
      </div>
    </>
  );
}

export default Asking;
