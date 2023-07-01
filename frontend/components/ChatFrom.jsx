"use client";
import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "@/lib/getServerUrl";
import { toast } from "react-hot-toast";

export default function ChatFrom() {
  const [query, setQuery] = useState("");
  const [conversation, setConversation] = useState("");
  let profile = localStorage.getItem("profile");
  profile = JSON.parse(profile);

  const [chats, setChats] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const start_sequence = " Counselor: ";
      const restart_sequence = " You: ";

      setChats((prev) => [...prev, { counselor: false, text: query }]);
      setConversation((prev) => (prev += `${restart_sequence} ${query}`));

      const res = await axios.post(`${SERVER_URL}/depression`, {
        text: conversation,
        gender: profile.gender,
        country: profile.country,
        start_sequence,
        restart_sequence,
      });

      console.log("response: ", res?.data?.choices);
      // console.log("response: ", res.data.choices[0].text);

      // const gptReply = res?.data?.choices[0]?.text;
      const gptReply ='dfd';

      setChats((prev) => [...prev, { counselor: true, text: gptReply }]);
      setConversation((prev) => (prev += `${start_sequence} ${gptReply}`));
    } catch (err) {
      toast.error(`${err.message || "Unknown Error"}`);
      console.log("err: ", err.response || err);
    }
  };

  return (
    <div className="flex flex-col justify-end">
      <div>
        {chats.map((chat, i) => (
          <div key={i}>
            {chat.counselor ? (
              <p className="text-left"> Counselor: {chat.text}</p>
            ) : (
              <p className="text-right bg-primary rounded-2xl rounded-br-none p-2">{chat.text}</p>
            )}
          </div>
        ))}
      </div>

      <form className="flex" onSubmit={submitHandler}>
        <textarea
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Consult with your counselor here"
        />
        <button
        className="-ml-8"
        type="submit">Submit</button>
      </form>
    </div>
  );
}
