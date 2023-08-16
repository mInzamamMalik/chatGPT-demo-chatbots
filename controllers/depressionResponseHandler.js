import { textGeneration } from "./textGeneration";

export const depressionResponseHandler = async (req, res) => {
  const rule = `The following is a conversation with a expert depression counselor and Psychiatrists. counselor is helpful and very friendly and shows empathy, love and affection occasionally. the patient is ${req.body.gender} from ${req.body.country}. \n`;

  if (
    !req.body.text ||
    !req.body.gender ||
    !req.body.country ||
    !req.body.start_sequence
  ) {
    res.status(422).send({ message: "Send all parameters" });
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
