import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  return (
    <button
      className="btn-primary small"
      onClick={() => setIsLight((s) => !s)}
      aria-pressed={isLight}
    >
      {isLight ? "Dark 🌙" : "Light ☀️"}
    </button>
  );
}
