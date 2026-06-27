"use client";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Ziad2019",
    color: "#f0f6fc",
    bg: "rgba(240,246,252,0.1)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.95c-2.9.63-3.52-1.27-3.52-1.27-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.42 1.12 3.01.86.1-.67.36-1.12.65-1.38-2.32-.26-4.76-1.16-4.76-5.17 0-1.14.41-2.07 1.08-2.8-.11-.26-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.07a10 10 0 0 1 5.26 0c2-1.35 2.88-1.07 2.88-1.07.58 1.45.22 2.53.11 2.79.68.73 1.08 1.66 1.08 2.8 0 4.02-2.45 4.9-4.78 5.16.38.33.71.96.71 1.95v2.88c0 .27.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5YDUbG8PR5aIisZW%2Bk2Syg%3D%3D",
    color: "#378ADD",
    bg: "rgba(55,138,221,0.12)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8.5h3V21h-3V8.5ZM8.5 8.5h2.9v1.7h.04c.4-.76 1.4-1.96 3.4-1.96 3.6 0 4.16 2.4 4.16 5.5V21h-3v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.36 1.6-2.36 3.24V21h-3V8.5Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ziadfayezmahmoud@gmail.com",
    color: "#5DCAA5",
    bg: "rgba(93,202,165,0.12)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 border-t border-border">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 pb-4 pt-10">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-accent-border bg-accent-dim font-mono text-xs font-bold text-accent">
              {"</>"}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Ziad Fayez
              </p>
              <p className="text-[13px] text-muted-foreground">
                Fullstack developer — Giza, Egypt
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[0.5px] transition-transform duration-200 hover:-translate-y-0.5"
                style={
                  {
                    background: social.bg,
                    borderColor: `${social.color}40`,
                    color: social.color,
                  } as React.CSSProperties
                }
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pb-6 pt-4 text-center">
          <p className="text-xs text-muted-dim">
            © {year} Ziad Fayez. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}