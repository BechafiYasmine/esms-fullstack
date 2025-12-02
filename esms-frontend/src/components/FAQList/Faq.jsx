import React from "react";

export default function FAQComponent() {
  const faqs = [
    {
      question: "What is HACK ESCAPE event ?",
      answer:
        "HACK ESCAPE is a competitive cybersecurity event where students solve progressive challenges in cracking security system exploitations,defensive and ethical hacking",
      color: "#E9DB3A",
    },
    {
      question: "Who can participate in HACK ESCAPE ?",
      answer:
        "HACK ESCAPE is a competitive cybersecurity event where students solve progressive challenges in cracking security system event is open to students passionate about cybersecurity, whether they are beginners or experienced in fields of system exploitation,defensive and ethical hacking",
      color: "#F41824",
    },
    {
      question: "How does the competition work?",
      answer:
        "Participants from teams move through 4 challenges : CODE BREAKING,SYSTEM ATTACK,HACK & DEFEND,FINAL CTF CHALLENGE. Each stage must be completed to unlock the next challenge.",
      color: "#0EF9FD",
    },
    {
      question: "How many members are allowed per team ?",
      answer:
        "Each team consists of 6 members.The number of participating teams is limited.",
      color: "#E9DB3A",
    },
    {
      question: "What skills I need to join ?",
      answer:
        "You don't need to be an expert.Basic knowledge in cybersecurity,logic,or programming is helpful,but learning during the event is encouraged.",
      color: "#F41824",
    },
    {
      question: "How are teams evaluated and the winners determined ?",
      answer:
        "Teams are judged based on their performance in each challenge , the speed of solving tasks,the accuracy of their solutions and the effectiveness of their attack or defense strategies. The team that successfully demonstrates the best combination of cybersecurity skills and completes the challenges with the highest score is declared the winner.",
      color: "#0EF9FD",
    },
  ];

  return (
    <div className="min-h-[50vh] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center"
            style={{ color: "#0EF9FD" }}
          >
            FAQ
          </h1>
          <p className="text-gray-400 text-sm sm:text-base text-center">//Questions</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800 backdrop-blur-sm rounded-lg p-4 sm:p-6"
            >
              {/* Question */}
              <h3
                className="font-bold text-base sm:text-lg mb-3 sm:mb-4"
                style={{ color: faq.color }}
              >
                {index + 1}_{faq.question}
              </h3>

              {/* Answer */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}