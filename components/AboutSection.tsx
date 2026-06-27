"use client";

import { motion } from "framer-motion";

const bioParagraphs = [
  "I'm a fullstack developer based in Giza, Egypt, with a backend-heavy background in Node.js, Express, and NestJS. Over the past year I've worked remotely with teams building production platforms for clients in Saudi Arabia — a food-ordering marketplace and a multi-dashboard car-booking system among them.",
  "Most of my work centers on the parts of an application users never see directly: authentication flows, role-based access control, payment integrations, and the database design that holds it all together. Over time I picked up React and Next.js to build the interfaces that sit on top of that backend work, so I can take a feature from schema to screen without handing it off.",
  "I graduated from Helwan University in 2023 with a degree in Computers and Artificial Intelligence, and I've been building production systems and personal projects ever since.",
];

export default function AboutSection() {
  return (
    <section id="about" className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="mb-3.5 text-3xl font-bold text-foreground">
          About me
        </h2>
        <div className="h-1 w-14 rounded-full bg-accent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex max-w-[700px] flex-col gap-4 leading-loose text-muted-foreground"
      >
        {bioParagraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </motion.div>
    </section>
  );
}