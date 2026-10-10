import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  speedAlpha: number;
}

interface FloatingSkill {
  name: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  glow: string;
  size: number;
  type: 'tech' | 'glyph';
}

interface ThrusterParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
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

    // Rocket Boost state
    let isBoosting = false;
    let boostIntensity = 0; // 0 to 1
    const particles: ThrusterParticle[] = [];

    const handleRocketBoost = (e: Event) => {
      const customEvent = e as CustomEvent;
      isBoosting = !!customEvent.detail?.boosting;
    };
    window.addEventListener('rocket-boost', handleRocketBoost);

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseOver = true;
    };
    const handleMouseLeave = () => {
      isMouseOver = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 1. Warp-capable 3D Starfield
    const STAR_COUNT = 110;
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1000 + 1,
      radius: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      speedAlpha: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
    }));

    // 2. High-Tech Floating Skills & Glyphs with Anti-Cluster Spacing
    const SKILLS_LIST = [
      'DJANGO', 'PYTHON', 'POSTGRESQL', 'REDIS',
      'CELERY', 'AWS', 'DOCKER', 'TERRAFORM',
      'FASTAPI', 'AI • RAG', 'REST API', 'C++',
      'SQL', 'JWT AUTH', '✦', '✧', '◈', '🪐'
    ];

    const PALETTES = [
      { color: '#00F0FF', glow: 'rgba(0, 240, 255, 0.45)' }, // Cyan
      { color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.45)' }, // Purple
      { color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.45)' }, // Sky
      { color: '#34D399', glow: 'rgba(52, 211, 153, 0.45)' }, // Emerald
      { color: '#FCD34D', glow: 'rgba(252, 211, 77, 0.45)' }, // Gold
    ];

    // Distribute skills across screen sectors to prevent any clustering on spawn
    const cols = 5;
    const rows = 4;
    const colWidth = width / cols;
    const rowHeight = height / rows;

    const floatingItems: FloatingSkill[] = SKILLS_LIST.map((name, i) => {
      const palette = PALETTES[i % PALETTES.length];
      const isGlyph = ['✦', '✧', '◈', '🪐'].includes(name);
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;

      return {
        name,
        type: isGlyph ? 'glyph' : 'tech',
        x: col * colWidth + Math.random() * (colWidth * 0.7) + 30,
        y: row * rowHeight + Math.random() * (rowHeight * 0.7) + 40,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.06,
        color: palette.color,
        glow: palette.glow,
        size: isGlyph ? 18 : 11,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth boost intensity transition
      if (isBoosting) {
        boostIntensity = Math.min(1, boostIntensity + 0.08);
      } else {
        boostIntensity = Math.max(0, boostIntensity - 0.03);
      }

      // 1. Draw Starfield (Transforms into Warp Speed Streaks during Rocket Boost!)
      stars.forEach((star) => {
        if (boostIntensity > 0.05) {
          // Warp Speed Streak Mode
          const streakLength = 25 + boostIntensity * 120;
          const streakSpeed = 8 + boostIntensity * 32;
          star.y += streakSpeed;
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }

          ctx.save();
          const gradient = ctx.createLinearGradient(star.x, star.y - streakLength, star.x, star.y);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.7, `rgba(0, 240, 255, ${0.4 * boostIntensity})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${0.9 * boostIntensity})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = star.radius * (1 + boostIntensity);
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - streakLength);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();
          ctx.restore();
        } else {
          // Normal Gentle Star Twinkle
          star.alpha += star.speedAlpha;
          if (star.alpha <= 0.1 || star.alpha >= 0.8) {
            star.speedAlpha = -star.speedAlpha;
          }
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 220, 255, ${star.alpha})`;
          ctx.fill();
        }
      });

      // 2. Spawn Rocket Flame Exhaust Particles when Boosting
      if (boostIntensity > 0.1) {
        for (let p = 0; p < 4; p++) {
          const pColors = ['#FF4500', '#FFA500', '#FFD700', '#00F0FF', '#FFFFFF'];
          particles.push({
            x: width * 0.85 + (Math.random() - 0.5) * 30, // Positioned near rocket
            y: height - 60 + Math.random() * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 12 + 6,
            size: Math.random() * 8 + 3,
            alpha: 1,
            color: pColors[Math.floor(Math.random() * pColors.length)],
            life: 0,
            maxLife: Math.random() * 30 + 20,
          });
        }
      }

      // Draw & Update Thruster Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - p.life / p.maxLife), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.restore();
      }

      // 3. Anti-Clustering Physics for Floating Skills
      for (let i = 0; i < floatingItems.length; i++) {
        for (let j = i + 1; j < floatingItems.length; j++) {
          const itemA = floatingItems[i];
          const itemB = floatingItems[j];
          const dx = itemB.x - itemA.x;
          const dy = itemB.y - itemA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSafeDist = 130; // Minimum distance to prevent clustering!

          if (dist < minSafeDist && dist > 0) {
            // Smooth repulsion push
            const overlap = (minSafeDist - dist) / minSafeDist;
            const pushX = (dx / dist) * overlap * 0.4;
            const pushY = (dy / dist) * overlap * 0.4;
            itemA.x -= pushX;
            itemA.y -= pushY;
            itemB.x += pushX;
            itemB.y += pushY;
          }
        }
      }

      // 4. Interactive Constellation Lines (Connects cursor to nearby skills)
      if (isMouseOver && boostIntensity < 0.2) {
        floatingItems.forEach((item) => {
          const dx = mouseX - item.x;
          const dy = mouseY - item.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.save();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.35 * (1 - dist / 180)})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(item.x, item.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            ctx.restore();
          }
        });
      }

      // 5. Draw Floating Skills with Clean Futuristic Capsules
      floatingItems.forEach((item) => {
        // Accelerate downwards if rocket is blasting off
        if (boostIntensity > 0.05) {
          item.y += 4 + boostIntensity * 16;
        } else {
          item.x += item.vx;
          item.y += item.vy;
        }

        // Mouse Gravitational Deflection
        if (isMouseOver && boostIntensity < 0.2) {
          const dx = item.x - mouseX;
          const dy = item.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            item.x += (dx / dist) * force * 1.8;
            item.y += (dy / dist) * force * 1.8;
          }
        }

        // Boundary wrap
        if (item.x < -80) item.x = width + 80;
        if (item.x > width + 80) item.x = -80;
        if (item.y < -50) item.y = height + 50;
        if (item.y > height + 50) item.y = -50;

        ctx.save();

        if (item.type === 'glyph') {
          // Render cosmic star/planet glyph
          ctx.font = `${item.size}px "Playfair Display", serif`;
          ctx.fillStyle = item.color;
          ctx.shadowColor = item.glow;
          ctx.shadowBlur = 10;
          ctx.globalAlpha = 0.6 + boostIntensity * 0.3;
          ctx.fillText(item.name, item.x, item.y);
        } else {
          // Render Clean Orbital Tech Capsule Pill
          ctx.font = `600 ${item.size}px "JetBrains Mono", monospace`;
          const textMetrics = ctx.measureText(item.name);
          const textWidth = textMetrics.width;
          const padX = 10;
          const padY = 5;
          const capsuleW = textWidth + padX * 2;
          const capsuleH = item.size + padY * 2;
          const rx = item.x - capsuleW / 2;
          const ry = item.y - capsuleH / 2;

          // Capsule background
          ctx.fillStyle = 'rgba(7, 10, 18, 0.65)';
          ctx.strokeStyle = item.color;
          ctx.lineWidth = 1;
          ctx.shadowColor = item.glow;
          ctx.shadowBlur = 8;
          ctx.globalAlpha = 0.75 + boostIntensity * 0.2;

          // Draw rounded capsule
          ctx.beginPath();
          ctx.roundRect(rx, ry, capsuleW, capsuleH, 6);
          ctx.fill();
          ctx.stroke();

          // Capsule dot
          ctx.beginPath();
          ctx.arc(rx + 7, ry + capsuleH / 2, 2, 0, Math.PI * 2);
          ctx.fillStyle = item.color;
          ctx.fill();

          // Capsule text
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 4;
          ctx.fillText(item.name, rx + 14, ry + capsuleH / 2 + item.size / 3);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('rocket-boost', handleRocketBoost);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};
