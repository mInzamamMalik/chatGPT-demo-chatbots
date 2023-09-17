import { textGeneration } from "./textGeneration.js";

export const depressionResponseHandler = async (req, res) => {
  const { text, gender, country, start_sequence } = req.body;

  const rule = `The following is a conversation with a expert depression counselor and Psychiatrists. counselor is helpful and very friendly and shows empathy, love and affection occasionally. the patient is ${req.body.gender} from ${req.body.country}. \n`;

  if (!text || !gender || !country || !start_sequence) {
    res.status(422).send({ message: "Send all parameters!" });
    return;
  }
  // text limitation added to avoid misuse of tokens
  if (
    text.length > 250 ||
    gender.length > 10 ||
    country.length > 15 ||
    start_sequence.length > 100
  ) {
    res.status(422).send({ message: "Text length limit exceeded!" });
    return;
  }

  try {
    const result = await textGeneration(
      rule,
      req.body.text,
      req.body.start_sequence
    );

    res.status(200).send(result);
  } catch (err) {
    console.log("err ==>> ", err);
    res.status(500).send({
      message: err?.response?.data?.error?.message || "Unknown error",
    });
  }
};
