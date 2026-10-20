import { logger } from "../lib/logger";

import { useEffect, useState } from "react";
import type { JSX } from "react";

import { registerKey, updateClassName } from "../services/typing.service";

import "../styles/LessonArea.css";

type LessonAreaProps = {
  lessonText: string;
};

export default function LessonArea({ lessonText }: LessonAreaProps) {
  const [keyStrokes, setKeyStrokes] = useState<string[]>([]);

  const letterSpans = Array.from(lessonText).map((char, index) => {
    const className: string = updateClassName(char, index, keyStrokes);

    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    setKeyStrokes((prev) => registerKey(e, prev));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="lesson-area-container">
        <p>{letterSpans}</p>
        <p>{keyStrokes}</p>
      </div>
    </>
  );
}
