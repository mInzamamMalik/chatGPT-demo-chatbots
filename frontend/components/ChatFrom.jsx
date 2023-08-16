"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { SERVER_URL } from "@/lib/getServerUrl";
import { toast } from "react-hot-toast";
import { AiOutlineSend } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";

export default function ChatFrom() {
  const chatWindowRef = useRef(null);

  const [query, setQuery] = useState("");
  const [chats, setChats] = useState([]);
  let conversation = "";
  console.log("🚀 ~ file: ChatFrom.jsx:5 ~ SERVER_URL:", SERVER_URL);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (!query) return;
      const profile = JSON.parse(localStorage.getItem("profile"));
      const start_sequence = " Counselor: ";
      const restart_sequence = " You: ";

      setChats((prev) => [...prev, { counselor: false, text: query }]);
      conversation += `${restart_sequence} ${query}`;

      const sendingPara = {
        text: conversation,
        gender: profile.gender,
        country: profile.country,
        start_sequence,
        restart_sequence,
      };

      const res = await axios.post(`${SERVER_URL}/depression`, sendingPara);

      console.log("response::: ", res?.data);

      const gptReply = res?.data?.choices[0]?.text;
      // const gptReply = `Welcome to our Depression ${profile.gender} Counselor ${profile.country} Chatbot! Our innovative chatbot, powered by the state-of-the-art GPT-3.5 language model, is designed to provide empathetic and supportive assistance to individuals struggling with depression.\n\nDepression is a serious mental health condition that affects millions of people worldwide, and seeking help is an important step towards recovery. Our chatbot serves as a virtual companion, providing a safe and confidential space for you to express your thoughts and emotions.`;

      setChats((prev) => [...prev, { counselor: true, text: gptReply }]);

      conversation += `${start_sequence} ${gptReply}`;

      setQuery("");
      e.target.reset();
    } catch (err) {
      toast.error(`${err?.response?.data?.message || "Unknown Error"}`);
      console.log("err::: ", err);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      const chatWindow = chatWindowRef.current;
      // console.log("Scrolling to bottom...");
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="flex h-full flex-col justify-end">
      <div className={`${chats ? "translate-y-10" : "translate-y-24"}`}>
        <div
          ref={chatWindowRef}
          id="chat-window"
          className={`no_scroll gap-5 py-14 px-2 flex flex-col overflow-y-scroll text-lg transition-height duration-300 ${
            chats.length > 0 ? "h-[525px]" : "h-0"
          }`}
        >
          {chats.map((chat, i) => (
            <div
              className={`${chat.counselor ? "self-start" : "self-end"}`}
              key={i}
            >
              {chat.counselor ? (
                <p className="flex items-end text-left">
                  <span>
                    <BsRobot className="mr-2 inline h-8 w-8 text-3xl" />
                  </span>
                  <span className="rounded-2xl rounded-bl-none border border-primary p-2 ">
                    {chat.text}
                  </span>
                </p>
              ) : (
                <p className="inline rounded-2xl rounded-br-none bg-primary p-2 text-right">
                  {chat.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <form className="relative flex" onSubmit={submitHandler}>
        <input
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          className="border-input ring-offset-background placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none rounded-md border border-primary px-3 py-2 focus:ring-primary focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Consult with your counselor here..."
        />
        <button
          className="absolute right-4 top-[18%] -rotate-45 p-1 text-3xl sm:text-4xl"
          type="submit"
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}
