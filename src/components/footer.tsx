import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="opacity-75">
            © 2025 Live Formatie. Een educatief platform.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/hoe-het-werkt"
              className="hover:underline transition-colors"
            >
              Hoe werkt het?
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

