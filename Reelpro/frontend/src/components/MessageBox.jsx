import { useState } from "react";
import API from "../api/axios";

function MessageBox({ receiver }) {

  const [text, setText] = useState("");

  const sendMessage = async () => {

    if (!text) return;

    await API.post("/messages/send", {
      receiver,
      text
    });

    setText("");

  };

  return (

    <div>

      <input
        value={text}
        placeholder="Type message..."
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>

  );

}

export default MessageBox;