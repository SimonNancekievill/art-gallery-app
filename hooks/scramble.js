import { useEffect, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";

export default function Scramble(text, trigger) {
  const [display, setDisplay] = useState(text.toUpperCase());

  useEffect(() => {
    if (!trigger) return;

    const resolved = new Array(text.length).fill(false);
    let resolvedCount = 0;

    const interval = setInterval(() => {
      // randomly resolve one unresolved character
      if (Math.random() < 0.15 && resolvedCount < text.length) {
        const unresolved = resolved
          .map((r, i) => (!r && text[i] !== " " ? i : null))
          .filter((i) => i !== null);

        if (unresolved.length > 0) {
          const pick =
            unresolved[Math.floor(Math.random() * unresolved.length)];
          resolved[pick] = true;
          resolvedCount++;
        }
      }

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (resolved[i]) return text[i].toUpperCase();
            return letters[
              Math.floor(Math.random() * letters.length)
            ].toUpperCase();
          })
          .join("")
      );

      if (resolvedCount >= text.length) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, [trigger, text]);

  return display;
}
