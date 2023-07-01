"use client";
import { useEffect, useState } from "react";

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

export default function SetUserProfile() {
  const [showProfileForm, setShowProfileForm] = useState();
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("Pakistan");

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    profile ? setShowProfileForm(false) : setShowProfileForm(true);
  }, []);

  const addProfileToLocalStorage = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify({ gender, country }));
    setShowProfileForm(false);
  };

  return (
    <>
      {showProfileForm ? (
        <form onSubmit={addProfileToLocalStorage}>
          Your profile:
          <select
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            onChange={(e) => setCountry(e.target.value)}
            className="capitalize"
            name="country"
          >
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button type="Submit">Add to Profile</button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}
