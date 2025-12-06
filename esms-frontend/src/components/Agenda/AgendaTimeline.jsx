import React from "react";
import TimelineDay from "./TimelineDay.jsx";


export default function AgendaTimeline() {
  const events = {
    day1: [
      {
        time: "08:00–09:00",
        title: "CHECK IN",
        speaker: "",
        color: "#F41824", // Red
      },
      {
        time: "09:30–10:00",
        title: "Opening Ceremony",
        speaker: "",
        color: "#0EF9FD", // Blue Cyan
      },
      {
        time: "10:00–12:00",
        title: "Challenge 1: Code Breaking",
        speaker: "",
        color: "#E9DB3A", // Yellow
      },
      {
        time: "12:00–14:00",
        title: "Lunch Break",
        speaker: "",
        color: "#F41824", // Red
      },
      {
        time: "14:00–16:00",
        title: "Challenge 2: System Attack",
        speaker: "",
        color: "#0EF9FD", // Blue Cyan
      },
      {
        time: "16:00",
        title: "Coffee Break & Activities",
        speaker: "",
        color: "#E9DB3A", // Yellow
      },
    ],
    day2: [
      {
        time: "09:30–12:00",
        title: "Challenge 3: Hack & Defend",
        speaker: "",
        color: "#F41824", // Red
      },
      {
        time: "12:00–14:00",
        title: "Lunch Break",
        speaker: "",
        color: "#0EF9FD", // Blue Cyan
      },
      {
        time: "14:00–16:00",
        title: "Final Combination",
        speaker: "",
        color: "#E9DB3A", // Yellow
      },
      {
        time: "16:00",
        title: "Winner Announcement",
        speaker: "",
        color: "#F41824", // Red
      },
    ],
  };
  
  
  return (
    <div className="min-h-[60vh] p-6 sm:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          style={{ color: "#F41824" }}
        >
          AGENDA
        </h1>

       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
  <TimelineDay day="day1" events={events.day1} label="DAY 1" color="#0EF9FD" /> {/* Blue Cyan */}
  <TimelineDay day="day2" events={events.day2} label="DAY 2" color="#E9DB3A" /> {/* Yellow */}
</div>


      </div>
    </div>
  );

}
