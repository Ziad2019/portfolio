"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2 } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-border bg-background-elevated py-0 transition-[border-color,box-shadow] duration-300 hover:border-accent-border hover:shadow-[0_16px_40px_-8px_rgba(93,202,165,0.18),0_0_0_1px_var(--accent-border)]">
        {/* Preview area */}
        <div
          className="relative flex h-50 items-center justify-center overflow-hidden border-b border-border"
          style={{
            background: project.image
              ? "var(--background)"
              : "linear-gradient(135deg, rgba(93,202,165,0.08), rgba(127,119,221,0.08))",
          }}
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <Code2
              className="size-10 text-border-strong opacity-60 transition-all duration-300 group-hover:rotate-[-4deg] group-hover:scale-110 group-hover:opacity-90"
              strokeWidth={1.5}
            />
          )}

          {/* subtle corner glow accent */}
          <div className="pointer-events-none absolute -right-[30px] -top-[30px] h-[100px] w-[100px] rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.15),transparent_70%)]" />
        </div>

        <div className="flex flex-1 flex-col p-[22px]">
          <h3 className="mb-2 text-[17px] font-bold text-foreground">
            {project.title}
          </h3>

          <p className="mb-4 flex-1 text-sm leading-[1.7] text-muted-foreground">
            {project.description}
          </p>

          <div className="mb-[18px] flex flex-wrap gap-2">
            {project.stack.slice(0, 8).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-md border-accent-border bg-accent-dim px-2.5 py-1 text-[11px] font-semibold text-accent transition-colors group-hover:border-accent/45"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Link
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-[18px] py-2.5 text-sm font-semibold text-foreground transition-[background,border-color,color,transform] duration-200 hover:border-accent hover:bg-accent hover:text-[#04342C] active:scale-[0.97]"
          >
            {project.liveUrl ? "View Site" : "View on GitHub"}
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-[3px]" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}