"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type OrnamentType = "dot" | "star" | "turd" | "wiggle";
type OrnamentColor = "#38418B" | "#5ED18F" | "#E97A3B" | "#6ECBE2" | "#F88195";

interface OrnamentProps {
  type: OrnamentType;
  color: OrnamentColor;
  initialX?: number;
  initialY?: number;
  size?: number;
  floatSpeed?: number;
  floatRange?: number;
}

export function Ornament({
  type,
  color,
  initialX = Math.random() * 100,
  initialY = Math.random() * 100,
  size = 40,
  floatSpeed = 0.5,
  floatRange = 20,
}: OrnamentProps) {
  const ornamentRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(Math.random() * 1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ornamentRef.current) return;

      timeRef.current += 0.008 * floatSpeed;

      const rect = ornamentRef.current.getBoundingClientRect();
      const ornamentCenterX = rect.left + rect.width / 2;
      const ornamentCenterY = rect.top + rect.height / 2;

      // Calculate distance from cursor
      const dx = cursorPosition.x - ornamentCenterX;
      const dy = cursorPosition.y - ornamentCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Interactive repulsion when cursor is close
      const interactionRadius = 200;
      let interactionX = 0;
      let interactionY = 0;

      if (distance < interactionRadius && distance > 0) {
        const force = (1 - distance / interactionRadius) * 20;
        interactionX = -(dx / distance) * force;
        interactionY = -(dy / distance) * force;
      }

      // Floating animation - much slower
      const floatX =
        Math.sin(timeRef.current * 0.3) * floatRange + interactionX;
      const floatY =
        Math.cos(timeRef.current * 0.2) * floatRange + interactionY;
      const rotation = Math.sin(timeRef.current * 0.15) * 10;

      ornamentRef.current.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${rotation}deg)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cursorPosition, floatSpeed, floatRange]);

  return (
    <div
      ref={ornamentRef}
      className="fixed pointer-events-none transition-all duration-200 ease-out"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
        zIndex: 1,
      }}
    >
      <div className="relative w-full h-full">
        {/* Base grayscale image with lighting details */}
        <Image
          src={`/images/ornaments/${type}.png`}
          alt=""
          width={size}
          height={size}
          className="w-full h-full object-contain grayscale"
          style={{ opacity: 0.8 }}
        />
        {/* Color overlay masked by the image, using multiply blend mode */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: color,
            maskImage: `url(/images/ornaments/${type}.png)`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(/images/ornaments/${type}.png)`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

