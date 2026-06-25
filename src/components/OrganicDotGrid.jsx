import React, { useEffect, useRef } from "react";

const OrganicDotGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse interactive state
    const mouse = { x: undefined, y: undefined, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.003; // smooth slow flow animation
      ctx.clearRect(0, 0, width, height);

      // Define grid parameters
      const spacingX = 35;
      const spacingY = 35;
      const cols = Math.ceil(width / spacingX) + 2;
      const rows = Math.ceil(height / spacingY) + 2;

      // Draw dot grid
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const startX = (c - 1) * spacingX;
          const startY = (r - 1) * spacingY;

          // Organic wave motion
          const waveX = Math.sin(c * 0.15 + time * 1.5) * Math.cos(r * 0.15 + time * 1.2) * 12;
          const waveY = Math.cos(c * 0.12 + time * 1.3) * Math.sin(r * 0.12 + time * 1.6) * 12;

          let x = startX + waveX;
          let y = startY + waveY;

          // Mouse deflection
          if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              x += Math.cos(angle) * force * 30;
              y += Math.sin(angle) * force * 30;
            }
          }

          // Wavy lighting/pulsing effect
          const waveVal = Math.sin(c * 0.08 + r * 0.08 + time * 2);
          const size = 1.0 + Math.max(0, waveVal * 1.2);
          const opacity = 0.08 + Math.max(0, (waveVal + 1) * 0.22);

          // Cyberpunk color interpolation: Aqua -> Purple -> Pink
          const ratio = (c / cols + waveVal * 0.15 + 1) / 2.2;
          let r_color, g_color, b_color;
          if (ratio < 0.5) {
            const t = ratio * 2;
            r_color = Math.floor(51 + t * (122 - 51));
            g_color = Math.floor(194 + t * (87 - 194));
            b_color = Math.floor(204 + t * (219 - 204));
          } else {
            const t = (ratio - 0.5) * 2;
            r_color = Math.floor(122 + t * (234 - 122));
            g_color = Math.floor(87 + t * (72 - 87));
            b_color = Math.floor(219 + t * (132 - 219));
          }

          ctx.fillStyle = `rgba(${r_color}, ${g_color}, ${b_color}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full block" />;
};

export default OrganicDotGrid;
