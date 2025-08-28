"use client";

import { useMemo } from "react";

type FloatingLogo = {
  src: string;
  alt: string;
  left: number;
  top: number;
  size: number; // px
  duration: number; // s
  delay: number; // s
  anim: "floatDiag" | "floatDiag2" | "floatDiag3";
  opacity: number;
};

const LOGOS = [
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/nextdotjs.svg", alt: "Next.js" },
  { src: "/logos/typescript.svg", alt: "TypeScript" },
  { src: "/logos/javascript.svg", alt: "JavaScript" },
  { src: "/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/logos/nodedotjs.svg", alt: "Node.js" },
  { src: "/logos/express.svg", alt: "Express" },
  { src: "/logos/prisma.svg", alt: "Prisma" },
  { src: "/logos/postgresql.svg", alt: "PostgreSQL" },
  { src: "/logos/mongodb.svg", alt: "MongoDB" },
  { src: "/logos/redis.svg", alt: "Redis" },
  { src: "/logos/docker.svg", alt: "Docker" },
  { src: "/logos/git.svg", alt: "Git" },
  { src: "/logos/vercel.svg", alt: "Vercel" },
];

function seededRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export default function TechBackground() {
  const items = useMemo<FloatingLogo[]>(() => {
    const result: FloatingLogo[] = [];
    for (let i = 0; i < 22; i++) {
      const r = seededRandom(i * 97 + 13);
      const r2 = seededRandom(i * 131 + 29);
      const r3 = seededRandom(i * 173 + 41);
      const r4 = seededRandom(i * 197 + 53);
      const r5 = seededRandom(i * 211 + 71);
      const logo = LOGOS[i % LOGOS.length];
      result.push({
        src: logo.src,
        alt: logo.alt,
        left: Math.round(r * 100),
        top: Math.round(r2 * 100),
        size: Math.round(24 + r3 * 48),
        duration: 24 + r4 * 36,
        delay: -r * 30,
        anim: (i % 3 === 0 ? "floatDiag" : i % 3 === 1 ? "floatDiag2" : "floatDiag3"),
        opacity: 0.15 + r5 * 0.25,
      });
    }
    return result;
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {items.map((it, idx) => (
          <img
            key={idx}
            src={it.src}
            alt=""
            aria-hidden
            className="tech-float will-change-transform"
            style={{
              left: `${it.left}%`,
              top: `${it.top}%`,
              width: it.size,
              height: it.size,
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
              animationName: it.anim,
              opacity: it.opacity,
              filter: "saturate(0.8)",
            }}
          />
        ))}
      </div>
    </div>
  );
}


