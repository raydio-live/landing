"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Ion } from "./ionicons";

/**
 * Copies `text`, then morphs "Copy link" into "Copied ✓" with a 150ms width
 * tween and morphs back after a moment.
 */
export function CopyButton({
  text,
  label = "Copy link",
  copiedLabel = "Copied",
  onCopy,
  className = "",
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  onCopy?: () => void;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    onCopy?.();
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <motion.button
        type="button"
        layout
        onClick={copy}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ borderRadius: 999 }}
        className={`inline-flex min-h-10 shrink-0 items-center justify-center overflow-hidden px-4 text-caption font-semibold text-white transition-colors ${
          copied ? "bg-deep" : "bg-primary hover:bg-primary-hover"
        } active:scale-98 ${className}`.trim()}
      >
        <motion.span layout="position" className="flex items-center gap-1.5 whitespace-nowrap">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={copied ? "done" : "idle"}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.12 }}
              className="flex"
            >
              {copied ? <Ion name="checkmark" size={15} /> : <Ion name="copy-outline" size={15} />}
            </motion.span>
          </AnimatePresence>
          {copied ? copiedLabel : label}
        </motion.span>
      </motion.button>
      <span className="sr-only" role="status">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </>
  );
}
