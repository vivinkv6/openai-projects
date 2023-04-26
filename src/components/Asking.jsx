import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
function Asking() {
  const [prompt, setPrompt] = useState("");
  const [createContent, setCreateContent] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateContent = async () => {
    setCreateContent("");
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}quiz`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })
        .then((res) => res.json())
        .then((data) => setCreateContent(data));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <h4 className="text-light text-center mt-5">Loading</h4>
      ) : (
        <></>
      )}
      {createContent.length > 0 ? (
        <center>
          <textarea
            className="text-light border-none mt-5 bg-dark lg"
            rows="15"
            cols="32"
            value={createContent}
          ></textarea>
        </center>
      ) : (
        <></>
      )}

      <div style={{ position: "fixed", bottom: "5px" }}>
        <input
          value={prompt}
          type="text"
          style={{
            height: "50px",
            width: "270px",
            borderRadius: "10px",
            marginRight: "5px",
          }}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="btn btn-primary" onClick={generateContent}>
          Send
        </button>
      </div>
    </>
  );
}

export default Asking;
