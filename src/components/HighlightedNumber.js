import React from "react";

export default function HighlightedNumber({ text }) {
  return <mark className="number-mark">{text}</mark>;
}
