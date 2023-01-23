import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
function AIChatting() {
    const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState("");
  const [loading, setLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const sendMessage = async () => {
        setUser(message);
        setLoading(true);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `ML Tutor: ${message}`,
            temperature: 0.3,
            max_tokens: 3800,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ["You:"],
          });
        setBot(response.data.choices[0].text);
        setLoading(false);
      };
    

      


  return (
    <>
     

      <h4 className="bot " style={{ color: "white", marginTop: "15px" }}>
       AI: How can i help you?
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
            <h5 style={{ color: "white"}}>AI is typing</h5>
           : 
            <h4
              className="bot "
              style={{
                color: "white",
                marginTop: "15px",
                marginBottom: "90px",
              }}
            >
              AI: {bot}
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
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  )
}

export default AIChatting
