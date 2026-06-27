"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

 const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  setActiveHash(href);

  if (isOpen) {
    setIsOpen(false);
    // wait for the mobile menu's collapse animation (duration: 0.25s) to finish
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <nav className="container flex h-[76px] items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-dim font-mono text-[13px] font-bold text-accent">
            {"</>"}
          </span>
          <span className="whitespace-nowrap text-[15px] font-bold">
            Ziad Fayez
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {links.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`inline-block whitespace-nowrap border-b-2 pb-1 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:text-accent ${
                      isActive
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button
            asChild
            className="rounded-full bg-accent font-bold text-[#04342C] transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
          >
            <a href="/_ZiadCV.pdf" download>
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex md:hidden p-2 text-foreground"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {links.map((link, idx) => {
                const isActive = activeHash === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className={`block rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-accent-dim text-accent"
                          : "text-muted-foreground hover:bg-background-elevated hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: links.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  asChild
                  className="w-full rounded-full bg-accent font-bold text-[#04342C] hover:bg-accent/90"
                >
                  <a href="/_ZiadCV.pdf" download>
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}