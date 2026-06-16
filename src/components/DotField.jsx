import { memo, useEffect, useRef } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(85, 247, 236, 0.26)",
  gradientTo = "rgba(133, 181, 60, 0.16)",
  glowColor = "#3B82F6",
  className = "",
  ...rest
}) {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const propsRef = useRef({});
  const rebuildRef = useRef(null);
  const isActiveRef = useRef(false);
  const isVisibleRef = useRef(true);
  const glowIdRef = useRef(`dot-field-glow-${Math.random().toString(36).slice(2, 9)}`);

  propsRef.current = {
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const glowEl = glowRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.35);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let resizeTimer;

    function buildDots(w, h) {
      const p = propsRef.current;
      const step = p.dotRadius + p.dotSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
          idx += 1;
        }
      }

      dotsRef.current = dots;
    }

    function doResize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      };

      buildDots(w, h);
      if (reduceMotion) drawFrame(false);
    }

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function onMouseMove(event) {
      const s = sizeRef.current;
      mouseRef.current.x = event.pageX - s.offsetX;
      mouseRef.current.y = event.pageY - s.offsetY;
    }

    function updateMouseSpeed() {
      const m = mouseRef.current;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }

    const speedInterval = reduceMotion ? null : setInterval(updateMouseSpeed, 40);
    let frameCount = 0;

    function drawFrame(scheduleNext = true) {
      frameCount += 1;
      const dots = dotsRef.current;
      const m = mouseRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const time = frameCount * 0.02;

      const targetEngagement = Math.min(m.speed / 5, 1);
      engagement.current += (targetEngagement - engagement.current) * 0.06;
      if (engagement.current < 0.001) engagement.current = 0;

      const eng = engagement.current;
      glowOpacity.current += (eng - glowOpacity.current) * 0.08;

      if (glowEl) {
        glowEl.setAttribute("cx", m.x);
        glowEl.setAttribute("cy", m.y);
        glowEl.style.opacity = glowOpacity.current;
      }

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      const crSq = p.cursorRadius * p.cursorRadius;
      const rad = p.dotRadius / 2;
      ctx.beginPath();

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const dx = m.x - dot.ax;
        const dy = m.y - dot.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < crSq && eng > 0.01) {
          const dist = Math.sqrt(distSq);
          if (p.bulgeOnly) {
            const t = 1 - dist / p.cursorRadius;
            const push = t * t * p.bulgeStrength * eng;
            const angle = Math.atan2(dy, dx);
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const angle = Math.atan2(dy, dx);
            const move = (500 / dist) * (m.speed * p.cursorForce);
            dot.vx += Math.cos(angle) * -move;
            dot.vy += Math.sin(angle) * -move;
          }
        } else if (p.bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }

        if (!p.bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.x = dot.ax + dot.vx;
          dot.y = dot.ay + dot.vy;
          dot.sx += (dot.x - dot.sx) * 0.1;
          dot.sy += (dot.y - dot.sy) * 0.1;
        }

        let drawX = dot.sx;
        let drawY = dot.sy;
        if (p.waveAmplitude > 0) {
          drawY += Math.sin(dot.ax * 0.03 + time) * p.waveAmplitude;
          drawX += Math.cos(dot.ay * 0.03 + time * 0.7) * p.waveAmplitude * 0.5;
        }

        if (p.sparkle) {
          const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
          const scale = hash % 100 < 3 ? 1.8 : 1;
          ctx.moveTo(drawX + rad * scale, drawY);
          ctx.arc(drawX, drawY, rad * scale, 0, TWO_PI);
        } else {
          ctx.moveTo(drawX + rad, drawY);
          ctx.arc(drawX, drawY, rad, 0, TWO_PI);
        }
      }

      ctx.fill();
      if (scheduleNext && isActiveRef.current) {
        rafRef.current = requestAnimationFrame(() => drawFrame(true));
      }
    }

    function start() {
      if (reduceMotion || isActiveRef.current || !isVisibleRef.current || document.hidden) return;
      isActiveRef.current = true;
      rafRef.current = requestAnimationFrame(() => drawFrame(true));
    }

    function stop() {
      isActiveRef.current = false;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    function handleVisibilityChange() {
      if (document.hidden) stop();
      else start();
    }

    doResize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.01 },
    );
    observer.observe(canvas.parentElement);

    if (reduceMotion) drawFrame(false);
    else start();

    rebuildRef.current = () => {
      const { w, h } = sizeRef.current;
      if (w > 0 && h > 0) buildDots(w, h);
      if (reduceMotion) drawFrame(false);
    };

    return () => {
      stop();
      if (speedInterval) clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    rebuildRef.current?.();
  }, [dotRadius, dotSpacing]);

  return (
    <div className={`dot-field-container ${className}`} {...rest}>
      <canvas ref={canvasRef} className="dot-field-canvas" />
      <svg className="dot-field-glow" aria-hidden="true">
        <defs>
          <radialGradient id={glowIdRef.current}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle ref={glowRef} cx="-9999" cy="-9999" r={glowRadius} fill={`url(#${glowIdRef.current})`} />
      </svg>
    </div>
  );
});

export default DotField;
