import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="github-footer">
      <a
        href="https://github.com/cmmsnow/weather-react"
        target="_blank"
        className="github-link"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>
      {} by Christine Snow
    </p>
  );
}
