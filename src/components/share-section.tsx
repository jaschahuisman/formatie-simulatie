"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
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

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  };

  return (
    <div className="w-full rounded-2xl space-y-6 bg-background/20 backdrop-blur-2xl p-4 text-background">
      <div>
        <h3 className="text-lg font-bold text-center">Deel dit formatiegesprek</h3>
        <p className="text-sm text-center text-background/80">
          Laat zien dat politieke partijen wél tot een compromis kunnen komen.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 text-foreground">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon className="size-8 rounded-md" />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon className="size-8 rounded-md" />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon className="size-8 rounded-md" />
        </LinkedinShareButton>

        <FacebookShareButton url={url} title={title}>
          {" "}
          <FacebookIcon className="size-8 rounded-md" />{" "}
        </FacebookShareButton>

        <Button variant="outline" size="sm" onClick={handleCopy}>
          <CopyIcon className="size-4 mr-2" />
          {copied ? "Gekopieerd!" : "Kopieer link"}
        </Button>
      </div>
    </div>
  );
}
