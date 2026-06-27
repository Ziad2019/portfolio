"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    name: "Email",
    description: "Send me a message",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ziadfayezmahmoud@gmail.com",
    color: "#5DCAA5",
    bg: "rgba(93,202,165,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 6.5l8.4 6.2a1 1 0 0 0 1.2 0L21 6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5YDUbG8PR5aIisZW%2Bk2Syg%3D%3D",
    color: "#378ADD",
    bg: "rgba(55,138,221,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8.5h3V21h-3V8.5ZM8.5 8.5h2.9v1.7h.04c.4-.76 1.4-1.96 3.4-1.96 3.6 0 4.16 2.4 4.16 5.5V21h-3v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.36 1.6-2.36 3.24V21h-3V8.5Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    description: "Check out my code",
    href: "https://github.com/Ziad2019",
    color: "#f0f6fc",
    bg: "rgba(240,246,252,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.95c-2.9.63-3.52-1.27-3.52-1.27-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.42 1.12 3.01.86.1-.67.36-1.12.65-1.38-2.32-.26-4.76-1.16-4.76-5.17 0-1.14.41-2.07 1.08-2.8-.11-.26-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.07a10 10 0 0 1 5.26 0c2-1.35 2.88-1.07 2.88-1.07.58 1.45.22 2.53.11 2.79.68.73 1.08 1.66 1.08 2.8 0 4.02-2.45 4.9-4.78 5.16.38.33.71.96.71 1.95v2.88c0 .27.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    description: "Chat with me instantly",
    href: "https://wa.me/20115392185",
    color: "#3DBA6B",
    bg: "rgba(61,186,107,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 1.5c-5.8 0-10.5 4.7-10.5 10.5 0 1.86.49 3.6 1.34 5.1L1.5 22.5l5.6-1.34a10.46 10.46 0 0 0 4.94 1.24c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.4-10.5-10.4Zm0 19.1c-1.7 0-3.3-.46-4.7-1.27l-.34-.2-3.13.75.76-3.05-.22-.35a8.6 8.6 0 0 1-1.37-4.58c0-4.76 3.87-8.63 8.62-8.63 4.76 0 8.63 3.87 8.63 8.63s-3.87 8.7-8.25 8.7Zm4.76-6.45c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.19-.56.06-1.5-.75-2.49-1.34-3.48-3.04-.26-.45.26-.42.75-1.4.08-.17.04-.31-.04-.44-.08-.13-.59-1.42-.8-1.94-.21-.5-.43-.43-.6-.44-.15-.01-.33-.01-.5-.01-.18 0-.46.06-.7.32-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.17 1.8 2.75 4.36 3.75 2.16.84 2.6.67 3.07.63.46-.04 1.54-.63 1.76-1.23.21-.6.21-1.12.15-1.23-.06-.11-.24-.18-.5-.31Z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  // contactMethods.map((method, idx) => {
  // const isMailLink = method.href.startsWith("mailto:");
  return (
    <section id="contact" className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center pt-20"
      >
        {/* <p className="mb-3 font-mono text-sm text-accent">&gt; send mail</p> */}
        <h2 className="mb-3.5 text-4xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-[460px] leading-[1.7] text-muted-foreground">
          I&apos;m currently open to new opportunities and freelance work.
          Let&apos;s connect and discuss how I can help.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-[720px] gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {contactMethods.map((method, idx) => (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <a
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="group flex flex-row items-center gap-4 rounded-[14px] border-border bg-background-elevated p-5 transition-[border-color,box-shadow] duration-200 hover:border-[var(--contact-color)] hover:shadow-[0_12px_28px_-8px_var(--contact-shadow)]"
                style={
                  {
                    "--contact-color": `${method.color}55`,
                    "--contact-shadow": `${method.color}33`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full"
                  style={{ background: method.bg, color: method.color }}
                >
                  {method.icon}
                </div>
                <div>
                  <p className="mb-0.5 text-base font-bold text-foreground">
                    {method.name}
                  </p>
                  <p className="text-[13px] text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}