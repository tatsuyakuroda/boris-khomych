"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#terminal", label: "Terminal" },
  { href: "#experience", label: "Experience" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMaxScroll(
        document.documentElement.scrollHeight - window.innerHeight || 1
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && reducedMotion) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70"
      role="banner"
    >
      {/* Scroll progress bar — 2px at top */}
      {!reducedMotion && (
        <div
          className="absolute left-0 top-0 h-0.5 bg-blue transition-transform duration-150 ease-out"
          style={{
            width: "100%",
            transform: `scaleX(${progress})`,
            transformOrigin: "left",
          }}
          aria-hidden
        />
      )}

      <nav
        className="container-custom flex h-14 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="font-semibold text-text no-underline transition-colors hover:text-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          Andrii Palamarchuk
        </Link>

        <ul className="flex list-none flex-wrap items-center gap-6 gap-x-4 p-0 m-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted no-underline transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
