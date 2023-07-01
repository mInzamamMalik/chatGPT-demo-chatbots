"use client";
import axios from "axios";
import { SERVER_LINK } from "@/lib/getServerUrl";

const countries = [
  "pakistan",
  "china",
  "india",
  "united states",
  "indonesia",
  "brazil",
  "nigeria",
  "bangladesh",
  "russia",
  "mexico",
];

export default function Chat() {
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("ke", SERVER_LINK);

    try {
      const start_sequence = "\n\nCounselor:";
      const restart_sequence = "\n\nYou: ";

      // const query = document.querySelector("#query").value;
      // const result = document.querySelector("#result")

      // result.innerText = `${restart_sequence} ${query}` + result.innerText
      // window.hidden += `${restart_sequence} ${query}`

      console.log(event.target.reset());
      const res = await axios.post(`${SERVER_LINK}/depression`, {
        text: window.hidden,
        gender: document.querySelector("#gender").value,
        country: document.querySelector("#country").value,
        start_sequence,
        restart_sequence,
      });

      console.log("response: ", res.data.choices);
      console.log("response: ", res.data.choices[0]);
      console.log("response: ", res.data.choices[0].text);

      // result.innerText = `${start_sequence} ${res.data.choices[0].text}` + result.innerText;
      // window.hidden += `${start_sequence} ${res.data.choices[0].text}`
    } catch (error) {
      console.log("error: ", error.response || error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        your profile:
        <br />
        <select name="gender" id="gender" required>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <br />
        <select className="capitalize" name="country" id="country">
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
        <br />
        <textarea
          placeholder="your message"
          type="text"
          id="query"
          autoFocus
          // style="width: 50%;"
        ></textarea>
        <button type="Submit">Submit</button>
      </form>

      <p id="result"></p>
    </div>
  );
}
