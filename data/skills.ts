export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST API", "GraphQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Mongoose", "TypeORM", "Prisma"],
  },
  {
    category: "Security & auth",
    items: ["JWT", "OAuth", "Passport.js", "Bcrypt", "Helmet"],
  },
  {
    category: "Payments & storage",
    items: ["Stripe", "PayPal", "MyFatoorah", "AWS S3", "Cloudinary"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Postman", "Swagger", "Vercel", "Railway"],
  },
];