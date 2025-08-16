
"use client";
import "./about.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function About() {

   const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      // Redirect to home/login if not logged in
      router.push("/");
    }
  }, [router]);

  return (
   <div className="about-container">
  {/* Hero Section */}
 
  {/* Special Note */}
  <section className="note">
    <h2>My Special Note for You</h2>
    <p>
       💖 Dear Garima 💖, <br />
      As you start this exciting new journey in <strong>Bangalore</strong>, I want you to know how proud I am of you. Moving to a new city and chasing your dreams takes courage — and you have it in abundance. <br />
      I know you are searching for a job there, and I have no doubt that your talent, determination, and positivity will open the right doors. <br />
      Embrace this adventure, make new friends, explore the city, and always trust yourself. I’m cheering for you every single moment. 💖
    </p>

    {/* Signature */}
    <p className="signature">— Yashwant</p>
  </section>
</div>

  );
}
