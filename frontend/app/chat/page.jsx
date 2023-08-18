import { ChatFrom, SetUserProfile } from "@/components";

export default function page() {
  return (
    <main className="bg-cover h-full bg-fixed bg-center bg-no-repeat">
      <SetUserProfile />
      <ChatFrom />
    </main>
  );
}
