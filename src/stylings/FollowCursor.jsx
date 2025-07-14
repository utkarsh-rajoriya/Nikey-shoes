import { useEffect } from "react";

const FollowCursor = ({ color = "#000" }) => {
  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024; // Tailwind 'lg'
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Exit early if it's a touch device or small screen
    if (!isLargeScreen || isTouchDevice) return;

    let canvas;
    let context;
    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    class Dot {
      constructor(x, y, radius, lag) {
        this.position = { x, y };
        this.radius = radius;
        this.lag = lag;
      }

      moveTowards(x, y, context) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = color;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 6, 10);

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, skipping cursor effect.");
        return;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      canvas.width = width;
      canvas.height = height;

      document.body.appendChild(canvas);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);

      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();
    return () => destroy();
  }, [color]);

  return null; // Nothing to render
};

export default FollowCursor;
