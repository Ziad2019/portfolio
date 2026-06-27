export type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experience: Job[] = [
  {
    role: "Backend developer",
    company: "Freelance team — Saudi clients",
    period: "06/2025 — 05/2026",
    summary:
      "Contributing as a backend developer on two production applications: InBajasat, a food-ordering platform with customer and chef mobile apps, and Transport, a multi-dashboard car-booking system. Built authentication with OAuth and JWT, integrated PayPal and MyFatoorah for payments, and designed role-based APIs across admin, provider, and client dashboards.",
  },
  {
    role: "Backend developer intern",
    company: "The Baker",
    period: "04/2025 — 06/2025",
    summary:
      "Completed a remote internship focused on backend development with Node.js — building and testing RESTful APIs with MongoDB, and implementing authentication and secure route handling with JWT and Bcrypt.",
  },
];