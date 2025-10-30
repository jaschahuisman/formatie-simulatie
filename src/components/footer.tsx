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
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all group overflow-hidden">
        <div className="flex items-center h-12 md:h-14">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
            <Linkedin className="size-4 md:size-5" />
          </div>
          <div className="pr-4 md:pr-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:transition-all md:duration-300 whitespace-nowrap flex items-center gap-2 md:group-hover:pr-6">
            <span className="text-xs md:text-sm font-medium text-gray-600">Made by:</span>
            <a
              href="https://www.linkedin.com/in/jaschahuisman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:text-blue-600 transition-colors"
              title="Jascha Huisman"
            >
              Jascha
            </a>
            <span className="text-gray-400 text-xs">•</span>
            <a
              href="https://www.linkedin.com/in/niekvandamn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:text-blue-600 transition-colors"
              title="Niek van Damn"
            >
              Niek
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

