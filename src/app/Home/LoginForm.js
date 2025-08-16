"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ import router
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter(); // ✅ initialize router

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/hello", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            // Set login flag
            localStorage.setItem("loggedIn", "true");

            // Automatically remove after 10 seconds
            setTimeout(() => {
                localStorage.removeItem("loggedIn");
                alert("Login expired");
                 router.push("/");

            }, 50000); 

            // Navigate to /about
            router.push("/about");
        }

        else {
            setMessage(data.message);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
