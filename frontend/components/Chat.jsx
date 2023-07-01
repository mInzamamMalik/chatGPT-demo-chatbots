"use client";
import axios from "axios";
import { SERVER_URL } from "@/lib/getServerUrl";
import { useState } from "react";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [conversation, setConversation] = useState("");
  const profile = JSON.parse(localStorage.getItem("profile"));

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const start_sequence = "\n\nCounselor:";
      const restart_sequence = "\n\nYou: ";

      // result.innerText = `${restart_sequence} ${query}` + result.innerText
      setConversation((prev) => (prev += `${restart_sequence} ${query}`));

      const res = await axios.post(`${SERVER_URL}/depression`, {
        text: conversation,
        gender: profile.gender,
        country: profile.country,
        start_sequence,
        restart_sequence,
      });

      console.log("response: ", res.data.choices);
      console.log("response: ", res.data.choices[0].text);

      // result.innerText = `${start_sequence} ${res.data.choices[0].text}` + result.innerText;
      setConversation(
        (prev) => prev += `${start_sequence} ${res.data.choices[0].text}`
      );
    } catch (error) {
      console.log("error: ", error.response || error);
    }
  };

  return (
    <div>
      <div id="chats">{conversation}</div>

      <form onSubmit={submitHandler}>
        <br />
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="your message"
          type="text"
          id="query"
          autoFocus
          // style="width: 50%;"
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
