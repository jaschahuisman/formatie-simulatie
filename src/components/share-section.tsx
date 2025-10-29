"use client";

import { Button } from "@/components/ui/button";
import { ShareIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  url: string;
  title: string;
};

export function ShareSection({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Kopiëren mislukt");
    }
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  };

  return (
    <div className="w-full rounded-2xl space-y-3">
      <h3 className="text-sm font-bold text-center">Deel dit gesprek</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <Button asChild variant="outline" size="sm">
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareIcon className="size-4 mr-2" />
            Deel op X
          </a>
        </Button>

        <Button asChild variant="outline" size="sm">
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareIcon className="size-4 mr-2" />
            Deel op LinkedIn
          </a>
        </Button>

        <Button variant="outline" size="sm" onClick={handleCopy}>
          <CopyIcon className="size-4 mr-2" />
          {copied ? "Gekopieerd!" : "Kopieer link"}
        </Button>
      </div>
    </div>
  );
}

