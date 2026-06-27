"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="mb-3.5 text-3xl font-bold text-foreground">
          Experience
        </h2>
        <div className="h-1 w-14 rounded-full bg-accent" />
      </motion.div>

      <div className="relative max-w-[760px]">
        {/* vertical timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent to-border-strong" />

        <div className="flex flex-col gap-10">
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative pl-8"
            >
              {/* timeline dot */}
              <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--accent-dim)]" />

              <p className="mb-1.5 font-mono text-[13px] text-accent">
                {job.period}
              </p>

              <Card className="rounded-xl border-border bg-background-elevated">
                <CardContent className="p-5">
                  <h3 className="mb-1 text-[17px] font-bold text-foreground">
                    {job.role}
                  </h3>
                  <p className="mb-2.5 text-sm font-medium text-muted-dim">
                    {job.company}
                  </p>
                  <p className="text-sm leading-[1.7] text-muted-foreground">
                    {job.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}