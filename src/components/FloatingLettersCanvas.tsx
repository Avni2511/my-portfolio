import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speedAlpha: number;
}

interface CosmicLetter {
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  glow: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

export const FloatingLettersCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 1. Starfield
    const stars: Star[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speedAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
    }));

    // 2. Cosmic Floating Letters & Starlight Glyphs
    const chars = [
      'A', 'V', 'N', 'I', 'G', 'U', 'P', 'T', 'A',
      '✦', '★', '✧', '◈', '01', '02', '03', '04',
      'DJANGO', 'POSTGRESQL', 'REDIS', 'CELERY', 'AWS', 'TERRAFORM', 'ORBIT', 'COSMOS', 'DOCKER'
    ];

    const colors = [
      { color: 'rgba(0, 240, 255, 0.4)', glow: 'rgba(0, 240, 255, 0.6)' },
      { color: 'rgba(139, 92, 246, 0.4)', glow: 'rgba(139, 92, 246, 0.6)' },
      { color: 'rgba(245, 158, 11, 0.4)', glow: 'rgba(245, 158, 11, 0.6)' },
      { color: 'rgba(240, 244, 252, 0.3)', glow: 'rgba(255, 255, 255, 0.5)' },
    ];

    const letters: CosmicLetter[] = Array.from({ length: 28 }, () => {
      const c = colors[Math.floor(Math.random() * colors.length)];
      return {
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.05,
        size: Math.random() > 0.7 ? Math.floor(Math.random() * 32 + 22) : Math.floor(Math.random() * 16 + 10),
        opacity: Math.random() * 0.5 + 0.3,
        color: c.color,
        glow: c.glow,
      };
    });

    // 3. Shooting stars
    const shootingStars: ShootingStar[] = [];
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.5),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 12,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
        opacity: 1,
      });
    };

    let shootingStarTimer = setInterval(() => {
      if (Math.random() > 0.4) createShootingStar();
    }, 3500);

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Twinkling Starfield
      stars.forEach((star) => {
        star.alpha += star.speedAlpha;
        if (star.alpha <= 0.1 || star.alpha >= 0.9) {
          star.speedAlpha = -star.speedAlpha;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Draw Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.02;

        if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        gradient.addColorStop(0, `rgba(0, 240, 255, ${ss.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.stroke();
        ctx.restore();
      }

      // Draw Floating Cosmic Letters & Celestial Glyphs
      letters.forEach((letter) => {
        letter.x += letter.vx;
        letter.y += letter.vy;

        // Mouse Gravitational Deflection
        const dx = letter.x - mouseX;
        const dy = letter.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const force = (160 - dist) / 160;
          letter.x += (dx / dist) * force * 1.5;
          letter.y += (dy / dist) * force * 1.5;
        }

        if (letter.x < -100) letter.x = width + 100;
        if (letter.x > width + 100) letter.x = -100;
        if (letter.y < -100) letter.y = height + 100;
        if (letter.y > height + 100) letter.y = -100;

        ctx.save();
        ctx.font = `${letter.size}px "JetBrains Mono", "Playfair Display", monospace`;
        ctx.fillStyle = letter.color;
        ctx.shadowColor = letter.glow;
        ctx.shadowBlur = 8;
        ctx.fillText(letter.char, letter.x, letter.y);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shootingStarTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-80"
      aria-hidden="true"
    />
  );
};
