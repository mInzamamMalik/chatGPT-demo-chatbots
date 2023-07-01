import { Chat } from "@/components";

export default function page() {
  return (
    <div>
      <p>
        Note: changing profile in the middle of conversation may cause
        malfunction, so please set your profile in the beginning of the
        conversation and do not change through out the conversation.
      </p>
      <Chat />
    </div>
  );
}
