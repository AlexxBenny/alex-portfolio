"use client";

import { useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseOpacity: number;
  opacity: number;
  fadeDir: number;
  hue: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  pulsePhase: number;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
  size: number;
}

interface Orbital {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  speed: number;
  opacity: number;
  hue: number;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const distBetween = (ax: number, ay: number, bx: number, by: number) =>
  Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);

const CONNECTION_DIST = 200;
const NODE_COUNT = 30;
const STAR_COUNT = 140;
const PARTICLE_COUNT = 40;
const ORBITAL_COUNT = 4;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function SystemsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  const updateScroll = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    /* ============================================================== */
    /* 1. Stars — all in VIEWPORT space, small and subtle             */
    /* ============================================================== */
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: rand(0, w || 1920),
      y: rand(0, h || 1080),
      z: rand(0.15, 1),
      radius: rand(0.2, 0.8),        // smaller than before
      baseOpacity: rand(0.15, 0.5),   // dimmer
      opacity: rand(0.15, 0.5),
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      hue: Math.random() > 0.75 ? rand(190, 230) : 0,
    }));

    /* ============================================================== */
    /* 2. Neural network nodes — viewport space                        */
    /* ============================================================== */
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: rand(30, (w || 1920) - 30),
      y: rand(30, (h || 1080) - 30),
      vx: rand(-0.1, 0.1),
      vy: rand(-0.1, 0.1),
      radius: rand(1.2, 2),
      hue: 0, // all white
      pulsePhase: rand(0, Math.PI * 2),
    }));

    /* ============================================================== */
    /* 3. Data-flow particles                                          */
    /* ============================================================== */
    const spawnParticle = (): Particle => {
      const fromIdx = Math.floor(rand(0, NODE_COUNT));
      let toIdx = Math.floor(rand(0, NODE_COUNT));
      if (toIdx === fromIdx) toIdx = (toIdx + 1) % NODE_COUNT;
      return {
        fromIdx,
        toIdx,
        t: 0,
        speed: rand(0.002, 0.006),
        size: rand(0.6, 1.5),
      };
    };
    const particles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => {
        const p = spawnParticle();
        p.t = rand(0, 1);
        return p;
      }
    );

    /* ============================================================== */
    /* 4. Orbital rings — viewport space                               */
    /* ============================================================== */
    const orbitals: Orbital[] = Array.from({ length: ORBITAL_COUNT }, (_, i) => ({
      cx: (w || 1920) * rand(0.2, 0.8),
      cy: (h || 1080) * rand(0.15, 0.7),
      rx: rand(180, 450),
      ry: rand(60, 160),
      rotation: rand(0, Math.PI * 2),
      speed: rand(0.0003, 0.001) * (i % 2 === 0 ? 1 : -1),
      opacity: rand(0.08, 0.15),
      hue: [210, 250, 190, 220][i % 4],
    }));

    /* ============================================================== */
    /* Render loop — everything in viewport coordinates                */
    /* ============================================================== */
    const render = () => {
      const sp = scrollRef.current; // 0-1 scroll progress
      ctx.clearRect(0, 0, w, h);

      /* ---- Grid layer ---- */
      const gridOpacity = lerp(0.012, 0.04, sp);
      ctx.strokeStyle = `rgba(96, 165, 250, ${gridOpacity})`;
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      // Parallax: grid drifts slightly with scroll
      const scrollPx = window.scrollY;
      const gridOffY = -(scrollPx * 0.03) % gridSize;

      ctx.beginPath();
      for (let gx = 0; gx <= w; gx += gridSize) {
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
      }
      for (let gy = gridOffY; gy <= h; gy += gridSize) {
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
      }
      ctx.stroke();

      /* ---- Stars ---- */
      for (const star of stars) {
        // Twinkle
        star.opacity += star.fadeDir * 0.0015;
        if (star.opacity <= 0.08 || star.opacity >= star.baseOpacity + 0.1) {
          star.fadeDir *= -1;
        }

        // Slow upward drift (parallax by depth)
        star.y -= star.z * 0.02;
        if (star.y < -2) {
          star.y = h + 2;
          star.x = rand(0, w);
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        if (star.hue === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        } else {
          ctx.fillStyle = `hsla(${star.hue}, 70%, 70%, ${star.opacity})`;
        }
        ctx.fill();
      }

      /* ---- Neural nodes: move ---- */
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 10 || node.x > w - 10) node.vx *= -1;
        if (node.y < 10 || node.y > h - 10) node.vy *= -1;
        node.pulsePhase += 0.012;
      }

      /* ---- Neural connections ---- */
      const glowIntensity = lerp(0.12, 0.3, sp);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = distBetween(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * glowIntensity;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      /* ---- Neural nodes: draw ---- */
      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.15 + 0.85;
        const nodeAlpha = lerp(0.4, 0.7, sp) * pulse;

        // Subtle white glow halo
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${nodeAlpha * 0.35})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot — white
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
        ctx.fill();
      }

      /* ---- Data-flow particles ---- */
      const particleSpeedMul = lerp(0.7, 1.6, sp);
      for (const p of particles) {
        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        p.t += p.speed * particleSpeedMul;

        if (p.t >= 1) {
          const np = spawnParticle();
          p.fromIdx = np.fromIdx;
          p.toIdx = np.toIdx;
          p.t = 0;
          p.speed = np.speed;
          p.size = np.size;
          continue;
        }

        const px = lerp(from.x, to.x, p.t);
        const py = lerp(from.y, to.y, p.t);

        const trailAlpha = lerp(0.35, 0.75, sp) * (1 - Math.abs(p.t - 0.5) * 2);

        // Glow trail — white
        const tg = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
        tg.addColorStop(0, `rgba(255, 255, 255, ${trailAlpha * 0.4})`);
        tg.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = tg;
        ctx.fill();

        // Core dot — white
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${trailAlpha})`;
        ctx.fill();
      }

      /* ---- Orbital arcs ---- */
      for (const orb of orbitals) {
        orb.rotation += orb.speed;
        const orbAlpha = orb.opacity * lerp(0.7, 1.2, sp);

        ctx.save();
        ctx.translate(orb.cx, orb.cy);
        ctx.rotate(orb.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, orb.rx, orb.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${orbAlpha})`;
        ctx.lineWidth = 0.7;
        ctx.setLineDash([4, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
    };
  }, [updateScroll]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
