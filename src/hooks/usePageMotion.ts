import { useEffect } from "react";

/** Enhance visible content without hiding it when motion or observers are unavailable. */
export function usePageMotion(expanded: boolean) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            observer?.unobserve(target);
            const element = target as HTMLElement;
            if (element.dataset.revealed) return;
            element.dataset.revealed = "true";
            const animation = element.animate(
              [
                { opacity: 0, transform: "translateY(22px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll<HTMLElement>(
          ".hero-copy > *, .portrait-block, .hero-foot, .section-heading, .project, .experience, .about-grid > div:first-child, .toolkit-row, .working-note, .contact-section > *, footer",
        )
        .forEach((element) => observer?.observe(element));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, [expanded]);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty(
        "--progress",
        String(
          distance > 0
            ? Math.min(1, Math.max(0, window.scrollY / distance))
            : 0,
        ),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}
