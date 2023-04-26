import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function Chatbox() {


  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [user, setUser] = useState("");
  const [prompt, setPrompt] = useState("");
  const [bot, setBot] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setUser(prompt);
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
      .then((data) => setBot(data));
   } catch (error) {
    console.log(error);
   }
    setLoading(false);
  };

  return (
    <>
      <h4 className="bot " style={{ color: "white", marginTop: "15px" }}>
        welcome to JavaScript Bot
      </h4>

      <h4 className="bot " style={{ color: "white", marginTop: "15px" }}>
        How can i help you?
      </h4>
      {user.length > 0 && (
        <>
          <h4
            className="user "
            style={{ color: "white", marginTop: "15px", textAlign: "right" }}
          >
            YOU: {user}
          </h4>
          <br />
          {loading ? 
            <h5 style={{ color: "white"}}>Chatbot is typing</h5>
           : 
            <h4
              className="bot "
              style={{
                color: "white",
                marginTop: "15px",
                marginBottom: "90px",
              }}
            >
               {bot}
            </h4>
          }

          <br />
        </>
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
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
}

export default Chatbox;
