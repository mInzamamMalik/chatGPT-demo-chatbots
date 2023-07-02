import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";
import cbImg from "@/public/chatbot1.jpg";

export default function Home() {
  return (
    <main className="">
      <header className="mt-12 flex flex-col items-center md:flex-row">
        <div className="flex flex-col gap-9 sm:gap-6">
          <h1 className="text-5xl font-extrabold text-slate-700 md:text-7xl">
            Depression Counselor <span className="text-primary"> Chatbot </span>
          </h1>
          <h3 className="text-2xl text-slate-500">
            If you are feeling depressed, try talking to this chatbot. say
            whatever you feel - Powered by OpenAI ChatGPT{" "}
          </h3>
          <Link className="" href="/chat">
            <Button>Chat Now</Button>
          </Link>
        </div>

        <Image
          className="w-full md:w-[26rem] lg:w-[30rem] xl:w-[37rem]"
          src={cbImg}
          width={700}
          height={408}
          alt="chatbot image"
        />
      </header>

      <h5 className="mt-8 text-justify text-xl text-slate-600">
        Welcome to our Depression Counselor Chatbot! Our innovative chatbot,
        powered by the state-of-the-art GPT-3.5 language model, is designed to
        provide empathetic and supportive assistance to individuals struggling
        with depression.
        <br />
        <br />
        Depression is a serious mental health condition that affects millions of
        people worldwide, and seeking help is an important step towards
        recovery. Our chatbot serves as a virtual companion, providing a safe
        and confidential space for you to express your thoughts and emotions.
        <br />
        <br />
        With our Depression Counselor Chatbot, you can expect a compassionate
        and non-judgmental conversation. Our chatbot is trained to understand
        and respond to a wide range of feelings and concerns related to
        depression, including sadness, hopelessness, lack of motivation, and
        more. It offers practical advice, coping strategies, and resources to
        help you navigate the challenges of depression.
        <br />
        <br />
        The chatbot leverages the power of artificial intelligence to learn and
        adapt over time. As you interact with it, the chatbot becomes more
        familiar with your needs and preferences, offering personalized
        suggestions and recommendations. It is available 24/7, ensuring that you
        have access to support whenever you need it.
        <br />
        <br />
        We understand that human connection is vital in the healing process,
        which is why our chatbot is not a substitute for professional therapy or
        counseling. Instead, it aims to complement existing mental health
        services by providing an additional avenue for support and guidance.
        <br />
        <br />
        Confidentiality and privacy are of utmost importance to us. All
        conversations with our Depression Counselor Chatbot are kept strictly
        confidential, and we follow rigorous security protocols to safeguard
        your information.
        <br />
        <br />
        We believe that everyone deserves compassionate support on their journey
        towards mental well-being. Our Depression Counselor Chatbot is here to
        lend an understanding ear and offer valuable insights to help you cope
        with depression. Take the first step towards a brighter tomorrow and
        start a conversation with our chatbot today. Remember, you&apos;re not
        alone - we&apos;re here to support you every step of the way.
      </h5>
    </main>
  );
}
