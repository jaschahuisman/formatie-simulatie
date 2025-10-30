import Link from "next/link";
import { InfoIcon } from "lucide-react";

export function Footer() {
  return (
    <Link
      href="/hoe-het-werkt"
      className="fixed bottom-6 right-6 z-50 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 p-4 flex items-center gap-2 group"
    >
      <InfoIcon className="size-5" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        Hoe werkt het?
      </span>
    </Link>
  );
}

