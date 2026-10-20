import { logger } from "../lib/logger";

const modifierKeys = [
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "ControlRight",
  "AltLeft",
  "AltRight",
  "MetaLeft",
  "MetaRight",
  "Backspace",
  "Escape",
];

function registerKey(e: KeyboardEvent, currentKeyStrokes: string[]) {
  logger.debug("Key Stroke code", {
    feature: "Lesson area",
    action: "registering key",
  });

  if (e.code === "Backspace") {
    return currentKeyStrokes.slice(0, -1);
  }

  const isLetter = !modifierKeys.includes(e.code);
  if (isLetter) {
    return [...currentKeyStrokes, e.key];
  }

  return currentKeyStrokes;
}

function updateClassName(
  targetChar: string,
  targetCharIndex: number,
  currentKeyStrokes: string[],
) {
  let classNames: string[] = ["letter"];
  const isCorrect = targetChar === currentKeyStrokes[targetCharIndex];
  const beenTyped = targetCharIndex < currentKeyStrokes.length;

  if (beenTyped && isCorrect) {
    classNames.push("correct");
  } else if (beenTyped && !isCorrect) {
    classNames.push("incorrect");
  }

  return classNames.join(" ");
}

export { registerKey, updateClassName };
