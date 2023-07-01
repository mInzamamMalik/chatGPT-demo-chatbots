import { ChatFrom, SetUserProfile } from "@/components";

export default function page() {
  return (
    <main 
	className="bg-cover h-full bg-fixed bg-center bg-no-repeat"
	// style={{ backgroundImage: "url('/bg.jpg')" }}
	>
      {/* <p>
        Note: changing profile in the middle of conversation may cause
        malfunction, so please set your profile in the beginning of the
        conversation and do not change through out the conversation.
      </p> */}
	  <SetUserProfile/>
      <ChatFrom />
    </main>
  );
}
