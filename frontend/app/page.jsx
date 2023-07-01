import { Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto border-2 border-red-500 p-8">
      <h1>Depression Counselor Chatbot</h1>

      <h3>
        If you are feeling depressed, try talking to this chatbot. say whatever
        you feel - Powered by Openai ChatGPT{" "}
      </h3>

      <Link className="" href="/chat">
        <Button>Chat Now</Button>
      </Link>
    </main>
  );
}
