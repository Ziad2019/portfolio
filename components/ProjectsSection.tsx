"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className=" pt-20 pb-10"
      >
        <h2 className="mb-3.5 text-3xl font-bold text-foreground">
          Projects
        </h2>
        <div className="mb-[18px] h-1 w-14 rounded-full bg-accent" />
        <p className="max-w-[520px] leading-[1.7] text-muted-foreground">
          A mix of client work and personal builds, mostly backend-heavy:
          authentication, payments, and the APIs that hold everything
          together.
        </p>
      </motion.div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}