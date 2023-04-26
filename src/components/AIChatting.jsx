import React from "react";

import { useState } from "react";
function AIChatting() {
  const [user, setUser] = useState("");
  const [prompt, setPrompt] = useState("");
  const [bot, setBot] = useState({
    role:"",
    content:""
  });
  const [loading, setLoading] = useState(false);



  const sendMessage = async () => {
    setUser(prompt);
    setLoading(true);
   
    try{
      const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}aichat`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({prompt})
      }).then(res=>res.json()).then(data=>setBot({
        role:data.role,
        content:data.content
      }))
      
    }
    catch(err){
      
      console.log(err);
    }
    setLoading(false);
    // setBot(response.data.choices[0].text);
    
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
          {loading ? (
            <h5 style={{ color: "white" }}>AI is typing</h5>
          ) : (
            <h4
              className="bot "
              style={{
                color: "white",
                marginTop: "15px",
                marginBottom: "90px",
              }}
            >
              {bot.role}: {bot.content}
            </h4>
          )}

          <br />
        </>
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

        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
}

export default AIChatting;
