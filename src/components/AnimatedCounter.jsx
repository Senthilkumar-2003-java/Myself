import { useEffect, useRef } from 'react';

export default function AnimatedCounter({ value }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const match = value.match(/^(\d+)(.*)$/);
    if (!match || preference.matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const target = Number(match[1]);
      const tick = (time) => {
        const progress = Math.min(1, (time - start) / 1000);
        element.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${match[2]}`;
        if (progress < 1) frame = requestAnimationFrame(tick);
        else element.textContent = value;
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    const stop = () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.textContent = value;
    };
    preference.addEventListener('change', stop);
    observer.observe(element);
    return () => {
      stop();
      preference.removeEventListener('change', stop);
    };
  }, [value]);

  return <span className="stat-number" aria-label={value}><span ref={numberRef} aria-hidden="true">{value}</span></span>;
}
