"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingCVButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) return null;

  return (
    <motion.a
      href="https://wa.me/201115392185"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-[#3DBA6B] text-white shadow-[0_8px_24px_-4px_rgba(61,186,107,0.5)] [animation:float-pulse_3s_ease-in-out_infinite]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 1.5c-5.8 0-10.5 4.7-10.5 10.5 0 1.86.49 3.6 1.34 5.1L1.5 22.5l5.6-1.34a10.46 10.46 0 0 0 4.94 1.24c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.4-10.5-10.4Zm0 19.1c-1.7 0-3.3-.46-4.7-1.27l-.34-.2-3.13.75.76-3.05-.22-.35a8.6 8.6 0 0 1-1.37-4.58c0-4.76 3.87-8.63 8.62-8.63 4.76 0 8.63 3.87 8.63 8.63s-3.87 8.7-8.25 8.7Zm4.76-6.45c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.19-.56.06-1.5-.75-2.49-1.34-3.48-3.04-.26-.45.26-.42.75-1.4.08-.17.04-.31-.04-.44-.08-.13-.59-1.42-.8-1.94-.21-.5-.43-.43-.6-.44-.15-.01-.33-.01-.5-.01-.18 0-.46.06-.7.32-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.17 1.8 2.75 4.36 3.75 2.16.84 2.6.67 3.07.63.46-.04 1.54-.63 1.76-1.23.21-.6.21-1.12.15-1.23-.06-.11-.24-.18-.5-.31Z" />
      </svg>
    </motion.a>
  );
}