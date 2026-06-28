"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rocket, FileText } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skills = [
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { label: "Express", icon: SiExpress, color: "#ffffff" },
  { label: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Git", icon: SiGit, color: "#F05032" },
];

export default function HeroSection() {
  return (
    <section id="home" className="section container">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Photo with gradient ring */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.18),transparent_70%)]" />
          <div className="relative h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#5DCAA5] via-[#378ADD] to-[#7F77DD] p-[3px]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-background">
              <Image
                src="/Ziad.png"
                alt="Ziad Fayez"
                fill
                sizes="200px"
                priority
                // className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          Ziad Fayez
        </motion.h1>

        {/* Description with highlighted words */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 text-base leading-relaxed text-muted-foreground"
        >
          Fullstack developer specialized in{" "}
          <span className="font-semibold text-accent">NestJS</span> and{" "}
          <span className="font-semibold text-[#79c0ff]">Next.js</span>. I
          build secure backend systems — auth, payments, role-based access —
          and the React interfaces that connect to them. Based in Giza,
          Egypt, with{" "}
          <span className="font-semibold text-accent">1+ year</span> of
          remote experience.
        </motion.p>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={skill.label}
                className="inline-flex items-center gap-2 rounded-full border-[0.5px] border-border-strong bg-background-elevated px-4 py-2 text-sm font-medium"
              >
                <Icon size={14} style={{ color: skill.color }} />
                {skill.label}
              </span>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex gap-4"
        >
          <Button
            size="lg"
            className="rounded-lg bg-accent font-bold text-[#04342C] transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Rocket className="size-4" />
            View My Work
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-lg border-border-strong font-bold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <a href="/_ZiadCV.pdf" download>
              <FileText className="size-4" />
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}