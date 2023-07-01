"use client";
import React from "react";
import { Collapse, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Questions() {
  const questions = [
    {
      question: "What is the adoption process like?",
      answer: [
        "1. Contact us through our socials to indicate your interest.",
        "2. Complete an initial screening questionnaire.",
        "3. Arrange visits for familiarisation.",
        "4. Arrange a home visit and begin a 2-week home trial.",
        "5. Confirm adoption and sign relevant adoption papers.",
        "6. We will facilitate the arrangement of ADORE obedience training for you and a certified trainer (only for HDB homes).",
        "7. Register ownership of your dog with AVS.",
      ],
    },
    {
      question: "I'm interested to adopt, what do I do now?",
      answer: [
        "Great to hear! Please reach out to us through our socials below and we will get back to you as soon as we can.",
      ],
    },
    {
      question: "I'd like to volunteer, how may I help?",
      answer: [
        "Please get in touch with us through our socials below, we'd love to have you aboard!",
      ],
    },
    {
      question:
        "I sent a message but did not receive a reply, what's going on?",
      answer: [
        "We may have unintentionally missed your message (sorry!). Please feel free to give us a bump, or try another one of our socials.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 sm:p-10 bg-[#F6F6F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full"
      >
        <div className="mt-10 mb-10">
          <h2 className="text-4xl font-bold text-center">FAQs</h2>
        </div>
        <Collapse.Group>
          {questions.map((question, index) => (
            <Collapse key={index} title={question.question} className="text-xl font-medium">
              {question.answer.map((line, index) => (
                <Text className="font-normal" key={index}>
                  {line}
                </Text>
              ))}
            </Collapse>
          ))}
        </Collapse.Group>
      </motion.div>
    </div>
  );
}
