# ChatGPT's Depression Counselor Chatbot

## [Hosted Link](https://depression-counselor-chatbot.vercel.app)

## [Server Link](https://depression-counselor-dot-learning-chatbot-393109.lm.r.appspot.com)

### The Depression Counselor Chatbot is an AI-powered project designed to provide support and assistance to individuals experiencing depression. This project utilizes the GPT-3.5 language model, an advanced AI technology developed by OpenAI, to create an empathetic and understanding virtual companion.

ChatGPT, powered by the GPT-3.5 language model, offers numerous benefits for building conversational AI applications. First and foremost, it provides a high level of language understanding, allowing it to comprehend and generate human-like text responses. This capability enables engaging and natural conversations with users, enhancing the overall user experience. Additionally, ChatGPT has been trained on a vast amount of diverse data, which allows it to provide information and insights on a wide range of topics. This versatility makes it a valuable tool for various applications, from customer support and virtual assistants to content generation and educational resources. Furthermore, ChatGPT can be fine-tuned and personalized to suit specific use cases, providing a more tailored and contextually relevant experience for users. Its continuous learning capabilities enable it to improve and adapt over time, ensuring that it stays up-to-date with the latest information. Overall, the benefits of ChatGPT lie in its advanced language understanding, versatility, personalization potential, and continuous learning capabilities, making it a powerful tool for creating sophisticated and engaging conversational AI applications.

<br>

To get started

1. Run server

   ```bash
   npm i && npm run start
   ```

1. Run frontend

   ```bash
   cd frontend && npm i && npm run dev
   ```

1. Get [OpenAI's API Key](https://platform.openai.com/account/api-keys) and place it inside .env file in the root of the project.

1. Backend route

   ```
   http://localhost:5001/depression
   ```

1. Example body for backend

   ```json
   {
     "text": " You:  testing ",
     "gender": "Male",
     "country": "Pakistan",
     "start_sequence": " Counselor: "
   }
   ```
