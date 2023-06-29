import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9bc9450-b1e0-4a24-8a71-0c5f7b245750");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      document.getElementById("submitButton").innerHTML = "Message sent!";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-md"
    >
      <input
        className="m-2 p-2 rounded-md w-full"
        type="text"
        name="name"
        placeholder="Your name (required)"
      />
      <input
        className="m-2 p-2 rounded-md w-full"
        type="email"
        name="email"
        placeholder="Your email (required)"
      />
      <textarea
        className="m-2 p-2 rounded-md w-full"
        name="message"
        rows={5}
        placeholder="Comment"
      ></textarea>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <button
          id="submitButton"
          className="m-5 py-2 px-5 rounded-full border-solid border-2 bg-[#FCF8F3]"
          type="submit"
        >
          Send message
        </button>
      </motion.div>
    </form>
  );
}
