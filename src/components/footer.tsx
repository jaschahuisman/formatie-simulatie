import Link from "next/link";
import { InfoIcon } from "lucide-react";

export function Footer() {
  return (
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
  );
}

