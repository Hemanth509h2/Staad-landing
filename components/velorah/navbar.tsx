"use client";

import * as React from "react";
import Link from "next/link";

import { GET_STARTED_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Wordmark } from "./primitives";

export function Navbar({
  variant = "overlay",
}: {
  variant?: "overlay" | "solid";
}) {
  return (
    <nav
      className={cn(
        "relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8",
        variant === "solid" && "border-b border-border",
      )}
    >
      <Link href="/" aria-label="Staad home">
        <Wordmark className="text-3xl" />
      </Link>

      <a
        href={GET_STARTED_URL}
        className="liquid-glass rounded-full px-5 py-2 text-xs text-foreground transition-transform hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Get Started
      </a>
    </nav>
  );
}
