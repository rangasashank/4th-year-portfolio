import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const roles = ["Forward Deployed Engineer", "Full Stack Developer"];

export default function TypingRole() {
  const [text, setText] = useState("");
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    let role = 0;
    let length = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    setText("");
    const tick = () => {
      if (document.hidden) {
        timer = setTimeout(tick, 250);
        return;
      }
      length += deleting ? -1 : 1;
      setText(roles[role].slice(0, length));
      let delay = deleting ? 38 : 85;
      if (!deleting && length === roles[role].length) {
        deleting = true;
        delay = 1900;
      } else if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 350);
    return () => clearTimeout(timer);
  }, [paused, reducedMotion]);

  return (
    <div className="typing-role">
      <h2>
        <span className="sr-only">
          Forward Deployed Engineer & Full Stack Developer
        </span>
        <span aria-hidden="true" className="typed-role">
          {reducedMotion ? roles.join(" & ") : text}
          {!reducedMotion && (
            <span className={paused ? "typing-cursor paused" : "typing-cursor"}>
              |
            </span>
          )}
        </span>
      </h2>
      {!reducedMotion && (
        <button
          className="typing-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Resume title animation" : "Pause title animation"
          }
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      )}
    </div>
  );
}
