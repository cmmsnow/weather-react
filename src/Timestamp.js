import React from "react";
import "./Timestamp.css";

export default function Timestamp() {
  return (
    <p class="day-and-time">
      Updated <span id="current-day">Monday </span>
      <span id="current-time">15:30</span>
    </p>
  );
}
