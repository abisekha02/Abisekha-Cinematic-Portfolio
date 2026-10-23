'use client';
import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; r: number; speed: number; alpha: number; phase: number };

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0; let height = 0; let raf = 0; let tick = 0;
    let particles: Particle[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth; height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(105, Math.floor(width / 10));
      particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.8 + .35, speed: Math.random() * .32 + .08, alpha: Math.random() * .55 + .12, phase: Math.random() * Math.PI * 2 }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height); tick += .006;
      for (const p of particles) {
        const x = p.x + Math.sin(tick + p.phase) * 11;
        if (!reduce) p.y -= p.speed;
        if (p.y < -5) p.y = height + 5;
        ctx.beginPath(); ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${90 + Math.floor(p.alpha * 60)}, ${115 + Math.floor(p.alpha * 55)}, ${p.alpha})`; ctx.fill();
      }
      if (!reduce) raf = window.requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { window.cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />;
}
