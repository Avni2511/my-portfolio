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
  baseSpeed: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  phase: number;
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

interface ExclusionZone {
  left: number;
  top: number;
  right: number;
  bottom: number;
  cx: number;
  cy: number;
  hw: number;
  hh: number;
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

    // Track text exclusion zones so floating skills NEVER overlap with text
    let exclusionZones: ExclusionZone[] = [];

    const createZone = (left: number, top: number, right: number, bottom: number): ExclusionZone => ({
      left,
      top,
      right,
      bottom,
      cx: (left + right) / 2,
      cy: (top + bottom) / 2,
      hw: (right - left) / 2,
      hh: (bottom - top) / 2,
    });

    const updateExclusionZones = () => {
      const zones: ExclusionZone[] = [];

      // 1. Top Header / Navbar (full width safe banner)
      const header = document.querySelector('header');
      if (header) {
        const hr = header.getBoundingClientRect();
        if (hr.bottom > 0 && hr.top < height) {
          zones.push(createZone(-20, 0, width + 20, Math.max(hr.bottom, 75) + 15));
        }
      }

      // 2. Hero Section: Unified Protected Text Sanctuary (zero gap for skills to squeeze into)
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.bottom > 0 && heroRect.top < height) {
          const statusBar = heroSection.querySelector('[data-floating-avoid="true"]');
          const leftCol = heroSection.querySelector('.lg\\:col-span-7');
          const rightCol = heroSection.querySelector('.lg\\:col-span-5');

          // Full top status bar protection (covers AVAILABLE FOR ROLES and KIET GROUP / JHANSI)
          if (statusBar) {
            const sr = statusBar.getBoundingClientRect();
            zones.push(createZone(sr.left - 25, sr.top - 18, sr.right + 25, sr.bottom + 18));
          }

          if (leftCol) {
            const lr = leftCol.getBoundingClientRect();
            // Start from status bar top to encompass ALL hero text, bio, pills, and CTAs without cracks
            const statusTop = statusBar ? statusBar.getBoundingClientRect().top : lr.top - 50;
            const topY = Math.min(statusTop, lr.top) - 15;
            const bottomY = lr.bottom + 25;
            const leftX = lr.left - 25;
            const rightX = lr.right + 30;
            zones.push(createZone(leftX, topY, rightX, bottomY));
          }

          if (rightCol) {
            const rr = rightCol.getBoundingClientRect();
            zones.push(createZone(rr.left - 20, rr.top - 20, rr.right + 20, rr.bottom + 20));
          }
        }
      }

      // 3. Subsequent section headings & cards across the page
      const otherCards = document.querySelectorAll(
        '#projects .group, #skills .cosmic-card, #about .cosmic-card, #contact form, h1, h2'
      );
      otherCards.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (
          r.bottom > 0 &&
          r.top < height &&
          r.right > 0 &&
          r.left < width &&
          r.width > 30 &&
          r.height > 30
        ) {
          zones.push(createZone(r.left - 25, r.top - 20, r.right + 25, r.bottom + 20));
        }
      });

      exclusionZones = zones;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateExclusionZones();
    };

    const handleScroll = () => {
      updateExclusionZones();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial update + periodic sync for layout/font stabilization
    updateExclusionZones();
    const syncInterval = setInterval(updateExclusionZones, 400);

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

    // 2. High-Tech Floating Skills & Glyphs
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

    // Spawn along clear peripheral cosmic lanes
    const getSafePeripheralSpawn = (index: number) => {
      const lane = index % 5;
      let sx = 0;
      let sy = 0;

      switch (lane) {
        case 0:
          // Left outer margin stream
          sx = 20 + Math.random() * (Math.max(45, width * 0.08));
          sy = 120 + Math.random() * (height - 200);
          break;
        case 1:
          // Right outer margin stream (past portrait card)
          sx = width - (25 + Math.random() * (Math.max(45, width * 0.09)));
          sy = 110 + Math.random() * (height - 190);
          break;
        case 2:
          // Mid-corridor space (between left text block and right portrait)
          sx = width * 0.54 + (Math.random() - 0.5) * (width * 0.08);
          sy = 140 + Math.random() * (height - 250);
          break;
        case 3:
          // Bottom orbital stream
          sx = 60 + Math.random() * (width - 120);
          sy = height - (65 + Math.random() * 65);
          break;
        case 4:
        default:
          // Lower-mid atmospheric space
          sx = width * 0.35 + (Math.random() - 0.5) * (width * 0.15);
          sy = height - (140 + Math.random() * 80);
          break;
      }

      return { sx, sy };
    };

    const floatingItems: FloatingSkill[] = SKILLS_LIST.map((name, i) => {
      const palette = PALETTES[i % PALETTES.length];
      const isGlyph = ['✦', '✧', '◈', '🪐'].includes(name);
      const { sx, sy } = getSafePeripheralSpawn(i);

      // Lively, noticeable movement speed: 1.2 to 2.0 px/frame
      const baseSpeed = 1.2 + Math.random() * 0.8;
      const angle = (i * ((Math.PI * 2) / SKILLS_LIST.length)) + (Math.random() * 0.5 - 0.25);

      return {
        name,
        type: isGlyph ? 'glyph' : 'tech',
        x: sx,
        y: sy,
        vx: Math.cos(angle) * baseSpeed,
        vy: Math.sin(angle) * baseSpeed,
        baseSpeed,
        wobbleSpeed: 0.002 + Math.random() * 0.0015,
        wobbleAmp: 0.4 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        color: palette.color,
        glow: palette.glow,
        size: isGlyph ? 16 : 10.5,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = performance.now();

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
            x: width * 0.85 + (Math.random() - 0.5) * 30,
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

      // 3. Interactive Constellation Lines (Connects cursor to nearby skills)
      if (isMouseOver && boostIntensity < 0.2) {
        floatingItems.forEach((item) => {
          const dx = mouseX - item.x;
          const dy = mouseY - item.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.save();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.35 * (1 - dist / 160)})`;
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

      // 4. Update Floating Skills: Lively Motion + Strict Zero-Text-Overlap Repulsion
      floatingItems.forEach((item) => {
        // Continuous fluid drift + celestial sinusoidal wave float
        if (boostIntensity > 0.05) {
          item.y += 7 + boostIntensity * 22;
        } else {
          const waveX = Math.cos(time * item.wobbleSpeed + item.phase) * item.wobbleAmp;
          const waveY = Math.sin(time * item.wobbleSpeed * 1.1 + item.phase) * item.wobbleAmp;
          item.x += item.vx + waveX;
          item.y += item.vy + waveY;
        }

        // Mouse Gravitational Deflection
        if (isMouseOver && boostIntensity < 0.2) {
          const dx = item.x - mouseX;
          const dy = item.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            const force = (150 - dist) / 150;
            item.vx += (dx / dist) * force * 1.3;
            item.vy += (dy / dist) * force * 1.3;
          }
        }

        // TEXT EXCLUSION ZONES AVOIDANCE (Guarantees skills never overlap text)
        for (let z = 0; z < exclusionZones.length; z++) {
          const zone = exclusionZones[z];
          const dx = item.x - zone.cx;
          const dy = item.y - zone.cy;
          const absX = Math.abs(dx);
          const absY = Math.abs(dy);

          // Buffer where repulsion smoothly steers skill away from text
          const steerBuffer = 70;
          if (absX < zone.hw + steerBuffer && absY < zone.hh + steerBuffer) {
            const penX = zone.hw + steerBuffer - absX;
            const penY = zone.hh + steerBuffer - absY;
            const dirX = dx >= 0 ? 1 : -1;
            const dirY = dy >= 0 ? 1 : -1;

            const steerStrength = 2.0;
            if (penX < penY) {
              item.vx += dirX * steerStrength * (penX / steerBuffer);
            } else {
              item.vy += dirY * steerStrength * (penY / steerBuffer);
            }

            // Hard boundary check: strictly eject if penetrated inside text box
            if (absX < zone.hw && absY < zone.hh) {
              const overlapX = zone.hw - absX;
              const overlapY = zone.hh - absY;
              if (overlapX < overlapY) {
                item.x = zone.cx + dirX * (zone.hw + 10);
                item.vx = dirX * Math.max(Math.abs(item.vx), item.baseSpeed * 1.4);
              } else {
                item.y = zone.cy + dirY * (zone.hh + 10);
                item.vy = dirY * Math.max(Math.abs(item.vy), item.baseSpeed * 1.4);
              }
            }
          }
        }

        // Speed Normalization: Keep them moving noticeably & gracefully
        const currentSpeed = Math.hypot(item.vx, item.vy);
        if (currentSpeed < 1.0) {
          // Never let skills stall or freeze in place
          const norm = currentSpeed || 1;
          item.vx = (item.vx / norm) * item.baseSpeed;
          item.vy = (item.vy / norm) * item.baseSpeed;
        } else if (currentSpeed > 3.2) {
          // Cap excessive velocity
          item.vx = (item.vx / currentSpeed) * 3.2;
          item.vy = (item.vy / currentSpeed) * 3.2;
        }

        // Gentle friction on high speed impulses
        if (currentSpeed > item.baseSpeed) {
          item.vx *= 0.99;
          item.vy *= 0.99;
        }

        // Smooth Screen Boundary Wrap
        if (item.x < -70) {
          item.x = width + 50;
        } else if (item.x > width + 70) {
          item.x = -50;
        }
        if (item.y < -40) {
          item.y = height + 30;
        } else if (item.y > height + 40) {
          item.y = -30;
        }
      });

      // 5. Anti-Clustering Physics (Run AFTER movement to prevent skills from stacking on each other)
      for (let i = 0; i < floatingItems.length; i++) {
        for (let j = i + 1; j < floatingItems.length; j++) {
          const itemA = floatingItems[i];
          const itemB = floatingItems[j];
          let dx = itemB.x - itemA.x;
          let dy = itemB.y - itemA.y;
          let dist = Math.hypot(dx, dy);
          const minSafeDist = 120; // Minimum distance to prevent skills from grouping

          if (dist < 4) {
            // Overlapping in the same point: forcefully separate them
            dx = (Math.random() - 0.5) * 2 || 1;
            dy = (Math.random() - 0.5) * 2 || 1;
            dist = Math.hypot(dx, dy);
          }

          if (dist < minSafeDist) {
            const overlap = (minSafeDist - dist) / minSafeDist;
            const pushX = (dx / dist) * overlap * 1.2;
            const pushY = (dy / dist) * overlap * 1.2;
            itemA.x -= pushX;
            itemA.y -= pushY;
            itemB.x += pushX;
            itemB.y += pushY;
          }
        }
      }

      // 6. Draw Floating Skills with Clean Futuristic Capsules
      floatingItems.forEach((item) => {
        ctx.save();

        if (item.type === 'glyph') {
          // Render cosmic star/planet glyph
          ctx.font = `${item.size}px "Playfair Display", serif`;
          ctx.fillStyle = item.color;
          ctx.shadowColor = item.glow;
          ctx.shadowBlur = 12;
          ctx.globalAlpha = 0.65 + boostIntensity * 0.3;
          ctx.fillText(item.name, item.x, item.y);
        } else {
          // Render Clean Orbital Tech Capsule Pill
          ctx.font = `600 ${item.size}px "JetBrains Mono", monospace`;
          const textMetrics = ctx.measureText(item.name);
          const textWidth = textMetrics.width;
          const padX = 9;
          const padY = 4.5;
          const capsuleW = textWidth + padX * 2 + 8;
          const capsuleH = item.size + padY * 2;
          const rx = item.x - capsuleW / 2;
          const ry = item.y - capsuleH / 2;

          // Proximity fade: if approaching any text zone, soften alpha to avoid visual competition
          let proximityAlpha = 1;
          for (let z = 0; z < exclusionZones.length; z++) {
            const zone = exclusionZones[z];
            const dist = Math.hypot(item.x - zone.cx, item.y - zone.cy);
            const safeR = Math.max(zone.hw, zone.hh) + 70;
            if (dist < safeR) {
              const factor = (dist - Math.max(zone.hw, zone.hh)) / 70;
              proximityAlpha = Math.min(proximityAlpha, Math.max(0.15, factor));
            }
          }

          // Subtle background pill
          ctx.fillStyle = 'rgba(6, 9, 18, 0.72)';
          ctx.strokeStyle = item.color;
          ctx.lineWidth = 1;
          ctx.shadowColor = item.glow;
          ctx.shadowBlur = 8;
          ctx.globalAlpha = (0.75 + boostIntensity * 0.25) * proximityAlpha;

          // Rounded capsule pill
          ctx.beginPath();
          ctx.roundRect(rx, ry, capsuleW, capsuleH, 6);
          ctx.fill();
          ctx.stroke();

          // Capsule glowing status dot
          ctx.beginPath();
          ctx.arc(rx + 8, ry + capsuleH / 2, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = item.color;
          ctx.shadowColor = item.glow;
          ctx.shadowBlur = 6;
          ctx.fill();

          // Capsule text
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 3;
          ctx.fillText(item.name, rx + 16, ry + capsuleH / 2 + item.size / 3);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearInterval(syncInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
export default FloatingLettersCanvas;
