"use client";
import { useEffect, useState } from "react";
import { ChatFrom, SetUserProfile, Loading } from "@/components/index";

export default function page() {
  const [showProfileForm, setShowProfileForm] = useState(null);

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    profile ? setShowProfileForm(false) : setShowProfileForm(true);
  }, []);

  return (
    <main className="bg-cover h-full bg-fixed bg-center bg-no-repeat">
      {showProfileForm === null && <Loading />}
      {showProfileForm && (
        <SetUserProfile setShowProfileForm={setShowProfileForm} />
      )}
      {showProfileForm === false && <ChatFrom />}
    </main>
  );
}
