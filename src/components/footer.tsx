import Link from "next/link";
import { InfoIcon, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Info button - rechts */}
      <Link
        href="/hoe-het-werkt"
        className="fixed bottom-6 right-6 z-50 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden"
      >
        <div className="flex items-center h-14 group-hover:pr-6">
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <InfoIcon className="size-5" />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
            Hoe werkt het?
          </span>
        </div>
      </Link>

      {/* LinkedIn links - links */}
      <div className="fixed bottom-6 left-6 z-50 bg-white text-gray-900 rounded-full shadow-lg px-5 py-3 flex items-center gap-3">
        <span className="text-sm font-medium text-gray-600">Made by:</span>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jaschahuisman/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-blue-600 transition-colors"
            title="Jascha Huisman"
          >
            <Linkedin className="size-4" />
            <span>Jascha</span>
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://www.linkedin.com/in/niekvandamn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-blue-600 transition-colors"
            title="Niek van Damn"
          >
            <Linkedin className="size-4" />
            <span>Niek</span>
          </a>
        </div>
      </div>
    </>
  );
}

