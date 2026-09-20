export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-shop",
    title: "E-Shop",
    description:
      "Fullstack e-commerce platform with a NestJS backend, Next.js storefront, and a live admin dashboard.",
    longDescription:
      "A complete fullstack e-commerce platform pairing a modular NestJS backend with a Next.js frontend, covering the customer storefront, checkout, and an admin dashboard. Built a multi-strategy authentication system with Passport.js — JWT access/refresh tokens with rotation and reuse detection, plus Google OAuth — enforced through global guards and role-based access control. The admin dashboard covers full CRUD on the product catalog, order status tracking, and user role management. Payment processing is integrated with the Stripe API, and file uploads are handled with Multer and Sharp for image optimization. All APIs are documented with Swagger.",
    stack: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Stripe API",
      "Passport.js",
      "JWT",
      "Tailwind CSS",
      "Zustand",
    ],
    liveUrl: "https://e-shop-frontend-48s8.vercel.app/",
    githubUrl: "https://github.com/Ziad",
    featured: true,
    image:"E-Shop.png"
  },
  {
    slug: "inbajasat",
    title: "InBajasat — Food ordering platform",
    description:
      "Backend systems for a two-sided food ordering marketplace serving customer and chef mobile apps.",
    longDescription:
      "Built and maintained backend systems for two mobile apps — Customer and Chef — as part of a freelance team serving a client in Saudi Arabia. Developed secure authentication and authorization using OAuth (Google, Facebook, Apple) alongside JWT. Integrated PayPal for digital payments and AWS S3 for image uploads and management. Designed APIs for user profiles, order management, menus, reviews, and notifications, with data validation, error handling, and role-based access control across all endpoints.",
    stack: [
      "Node.js",
      "NestJS",
      "MongoDB",
      "JWT",
      "OAuth",
      "PayPal API",
      "AWS S3",
    ],
    githubUrl: "https://github.com/Ziad2019/Inbajasat",
    featured: true,
  },
  {
    slug: "transport",
    title: "Transport — Car booking platform",
    description:
      "Multi-dashboard backend for a car booking system spanning customer, admin, and provider apps.",
    longDescription:
      "Developed backend services for a multi-dashboard system covering a Customer App, Admin Dashboard, and Provider Dashboard. Designed APIs for car booking, trip scheduling, and driver management. Implemented MyFatoorah payment integration and AWS S3 for media uploads. Built authentication and role-based access between the different dashboards (Admin, Provider, Client), with a focus on performance optimization, database consistency, and seamless communication between services via NestJS, TypeScript, and MongoDB.",
    stack: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "MyFatoorah",
      "AWS S3",
      "JWT",
    ],
    githubUrl: "https://github.com/Ziad2019/Transport",
    featured: true,
  },
    {
    slug: "champify",
    title: "Champify — Athlete investment platform",
    description:
      "Fintech-style platform where investors buy and trade fractional \"stock\" shares in professional athletes.",
    longDescription:
      "Engineering the backend for Champify, a fintech-style platform where investors buy and trade fractional \"stock\" shares in professional athletes. Architected a multi-tier auth system — OTP verification, JWT, and Google OAuth2 — enforcing granular role-based permissions across investor, admin, and supervisor roles. Built a dual-asset trading engine handling both athlete stocks and signature merchandise, each with independent inventory validation. Designed MongoDB aggregation pipelines powering real-time athlete analytics segmented by sport, rank, country, age, and gender, with full Arabic/English localization across the API layer.",
    stack: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Google OAuth2",
      "nestjs-i18n",
    ],
    githubUrl: "https://github.com/Ziad2019/champify-backend",
    featured: true,
  },
];