"use client";

import { useEffect, useRef, useState } from "react";
import { LightbulbIcon } from "lucide-react";

const FUN_FACTS = [
  "Wist je dat de formatie begint zodra de verkiezingsuitslag officieel is vastgesteld?",
  "Wist je dat de langste formatie ooit 299 dagen duurde?",
  "Wist je dat de koning geen rol meer speelt in de formatie sinds 2012?",
  "Wist je dat een formatie soms mislukt en er dan opnieuw onderhandeld moet worden?",
  "Wist je dat de nieuwe ministers pas worden benoemd als alle partijen akkoord zijn met het regeerakkoord?",
  "Wist je dat de Tweede Kamer eerst een informateur aanstelt om te verkennen welke coalitie mogelijk is?",
];

type Props = {
  facts?: string[];
  rotationInterval?: number;
};

export function FunFactCard({
  facts = FUN_FACTS,
  rotationInterval = 3000,
}: Props) {
  const [currentFactIndex, setCurrentFactIndex] = useState(() =>
    Math.floor(Math.random() * facts.length)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const TRANSITION_DURATION = 300; // Fade out/in duration in ms

    const rotate = () => {
      setIsTransitioning(true);

      // Wait for fade out, then switch to next fact and fade in
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentFactIndex((prevIndex) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * facts.length);
          } while (newIndex === prevIndex && facts.length > 1);
          return newIndex;
        });
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    };

    // Start rotating immediately and then at intervals
    rotationIntervalRef.current = setInterval(rotate, rotationInterval);

    return () => {
      if (rotationIntervalRef.current)
        clearInterval(rotationIntervalRef.current);
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, [facts.length, rotationInterval]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="border rounded-4xl p-8 bg-background shadow-sm">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <LightbulbIcon className="size-6 text-primary" />
          </div>
          <div className="flex-1 min-h-[80px] flex items-center">
            <p
              className={`text-lg leading-relaxed transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {facts[currentFactIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
