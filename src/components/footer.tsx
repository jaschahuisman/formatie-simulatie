"use client";

import Link from "next/link";
import { InfoIcon, Linkedin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Info button - rechts */}
      <Link
        href="/hoe-het-werkt"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden"
      >
        <div className="flex items-center h-12 md:h-14 group-hover:pr-6">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
            <InfoIcon className="size-4 md:size-5" />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium text-sm md:text-base">
            Hoe werkt het?
          </span>
        </div>
      </Link>

      {/* LinkedIn links - links */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden p-0 border-0"
      >
        <div className="flex items-center h-12 md:h-14 group-hover:pr-6">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
            <Linkedin className="size-4 md:size-5" />
          </div>
          <div
            className={`${
              isExpanded ? "max-w-xs" : "max-w-0"
            } md:max-w-0 overflow-hidden md:group-hover:max-w-xs transition-all duration-300 whitespace-nowrap flex items-center gap-2`}
          >
            <span className="text-xs md:text-sm font-medium text-gray-600">Made by:</span>
            <a
              href="https://www.linkedin.com/in/jaschahuisman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:text-blue-600 transition-colors"
              title="Jascha Huisman"
              onClick={(e) => e.stopPropagation()}
            >
              Jascha
            </a>
            <span className="text-gray-400 text-xs md:text-sm">•</span>
            <a
              href="https://www.linkedin.com/in/niekvandamn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:text-blue-600 transition-colors"
              title="Niek van Damn"
              onClick={(e) => e.stopPropagation()}
            >
              Niek
            </a>
          </div>
        </div>
      </button>
    </>
  );
}

