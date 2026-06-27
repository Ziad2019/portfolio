"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiPassport,
  SiStripe,
  SiPaypal,
  
  SiCloudinary,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiRailway,
} from "react-icons/si";

import { TbApi, TbShieldLock } from "react-icons/tb";

type Skill = { label: string; icon: IconType; color: string };
type SkillGroup = {
  category: string;
  headerIcon: string;
  accentColor: string;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    headerIcon: "λ",
    accentColor: "#F7DF1E",
    items: [
      { label: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "HTML", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS", icon: IoLogoCss3 , color: "#1572B6" },
    ],
  },
  {
    category: "Backend Development",
    headerIcon: "▤",
    accentColor: "#5DCAA5",
    items: [
      { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { label: "Express.js", icon: SiExpress, color: "#ffffff" },
      { label: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { label: "REST API", icon: TbApi, color: "#5DCAA5" },
      { label: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { label: "Microservices", icon: TbApi, color: "#5DCAA5" },
    ],
  },
  {
    category: "Frontend Development",
    headerIcon: "</>",
    accentColor: "#79c0ff",
    items: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { label: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { label: "Zustand", icon: SiReact, color: "#79c0ff" },
      { label: "React Query", icon: SiReactquery, color: "#FF4154" },
      { label: "Framer Motion", icon: SiFramer, color: "#ffffff" },
    ],
  },
  {
    category: "Databases",
    headerIcon: "▦",
    accentColor: "#FAC775",
    items: [
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "TypeORM", icon: SiTypescript, color: "#FE0902" },
      { label: "Mongoose", icon: SiMongodb, color: "#880E4F" },
      { label: "Prisma", icon: SiPrisma, color: "#ffffff" },
    ],
  },
  {
    category: "Security",
    headerIcon: "✕",
    accentColor: "#D4537E",
    items: [
      { label: "JWT", icon: SiJsonwebtokens, color: "#D4537E" },
      { label: "OAuth", icon: TbShieldLock, color: "#D4537E" },
      { label: "Passport.js", icon: SiPassport, color: "#34E27A" },
      { label: "Bcrypt", icon: TbShieldLock, color: "#D4537E" },
      { label: "Helmet", icon: TbShieldLock, color: "#D4537E" },
      { label: "XSS Protection", icon: TbShieldLock, color: "#D4537E" },
      { label: "Rate Limiting", icon: TbShieldLock, color: "#D4537E" },
    ],
  },
  {
    category: "Payments & Storage",
    headerIcon: "$",
    accentColor: "#8B5CF6",
    items: [
      { label: "Stripe", icon: SiStripe, color: "#635BFF" },
      { label: "PayPal", icon: SiPaypal, color: "#00457C" },
      { label: "MyFatoorah", icon: SiStripe, color: "#8B5CF6" },
      // { label: "AWS S3", icon: SiAmazonaws, color: "#FF9900" },
      { label: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
    ],
  },
  {
    category: "DevOps & Tools",
    headerIcon: "⚙",
    accentColor: "#6E7681",
    items: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "GitHub", icon: SiGithub, color: "#ffffff" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "Postman", icon: SiPostman, color: "#FF6C37" },
      { label: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { label: "Vercel", icon: SiVercel, color: "#ffffff" },
      { label: "Railway", icon: SiRailway, color: "#0B0D0E" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "5rem 1.5rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 48 }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 14,
            color: "var(--foreground)",
          }}
        >
          Technical Arsenal
        </h2>
        <div
          style={{
            width: 56,
            height: 4,
            borderRadius: 100,
            background: "var(--accent)",
          }}
        />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 40,
        }}
      >
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: group.accentColor,
              }}
            >
              <span style={{ fontFamily: "monospace" }}>
                {group.headerIcon}
              </span>
              {group.category}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {group.items.map((skill, skillIdx) => {
                const Icon = skill.icon;
                return (
                  <motion.span
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.35,
                      delay: groupIdx * 0.08 + skillIdx * 0.04,
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: group.accentColor,
                      boxShadow: `0 8px 20px ${group.accentColor}33`,
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 16px",
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "default",
                      background: "var(--background-elevated)",
                      border: "0.5px solid var(--border-strong)",
                      color: "var(--foreground)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={16} style={{ color: skill.color }} />
                    {skill.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}