"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

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

  const handleShare = (platform: string) => {
    const shareUrls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    };

    const shareUrl = shareUrls[platform];
    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=600"
      );
    }
  };

  return (
    <div className="w-full rounded-2xl space-y-6 bg-background/20 backdrop-blur-2xl p-4 text-background">
      <div>
        <h3 className="text-lg font-bold text-center">
          Deel dit formatiegesprek
        </h3>
        <p className="text-sm text-center text-background/90">
          Laat zien dat politieke partijen wél tot een compromis kunnen komen.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 text-foreground">
        <button
          onClick={() => handleShare("whatsapp")}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Deel op WhatsApp"
        >
          <WhatsappIcon className="size-8 rounded-md" />
        </button>

        <button
          onClick={() => handleShare("twitter")}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Deel op Twitter"
        >
          <TwitterIcon className="size-8 rounded-md" />
        </button>

        <button
          onClick={() => handleShare("linkedin")}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Deel op LinkedIn"
        >
          <LinkedinIcon className="size-8 rounded-md" />
        </button>

        <button
          onClick={() => handleShare("facebook")}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Deel op Facebook"
        >
          <FacebookIcon className="size-8 rounded-md" />
        </button>

        <Button variant="outline" size="sm" onClick={handleCopy}>
          <CopyIcon className="size-4 mr-2" />
          {copied ? "Gekopieerd!" : "Kopieer link"}
        </Button>
      </div>
    </div>
  );
}
