"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Particles } from "@/components/ui/highlighter";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-[var(--color-ivory)]"
      onMouseMove={handleMouseMove}
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute w-96 h-96 rounded-full bg-[var(--color-blush)] opacity-40 blur-3xl -top-20 -right-20 pointer-events-none z-0" />
      <div className="absolute w-64 h-64 rounded-full bg-[var(--color-sage-light)] opacity-20 blur-3xl bottom-10 -left-20 pointer-events-none z-0" />
      <Particles className="absolute inset-0 z-0 pointer-events-none" quantity={60} color="#F0B8D0" vy={-0.1} />

      {/* CONTENT ENTRANCE STAGGER WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto min-h-screen items-center px-6 lg:px-16 gap-4 pt-24 pb-12 relative z-10 max-w-[1400px] mx-auto">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center gap-6 z-10 text-left">
          
          {/* 1. BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-blush)] border border-[var(--color-blush-deep)] text-[var(--color-rose)] text-[13px] font-medium w-fit"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>✨</span> Mumbai&apos;s Most Trusted Dental Clinic
          </motion.div>

          {/* 2. HEADLINE */}
          <motion.h1 
            className="text-4xl lg:text-[80px] leading-[1.1] text-[var(--color-text-dark)] flex flex-col" 
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span>Your Perfect Smile</span>
            <span className="italic text-[var(--color-rose)]">Starts Here</span>
          </motion.h1>

          {/* 3. SUBTEXT */}
          <motion.p
            className="text-base lg:text-[18px] text-[var(--color-text-muted)] max-w-[520px] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Dr. Priya Sharma and her team bring warmth, precision, and artistry to every smile.
          </motion.p>

          {/* 4. CTA BUTTONS */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 w-full mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#book"
              className="w-full sm:w-auto text-center rounded-full bg-[var(--color-rose)] text-white px-8 py-3.5 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto text-center rounded-full border-2 border-[var(--color-sage)] text-[var(--color-sage-dark)] px-8 py-3.5 hover:bg-[var(--color-sage-light)]/20 transition-all duration-300 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Services
            </a>
          </motion.div>

          {/* 6. STATS ROW */}
          <motion.div 
            className="flex items-center gap-4 lg:gap-6 mt-8 divide-x divide-[var(--color-blush-deep)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col pr-4 lg:pr-6">
              <span className="text-2xl lg:text-[32px] text-[var(--color-rose)]" style={{ fontFamily: "var(--font-display)" }}>2000+</span>
              <span className="text-xs lg:text-[13px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>Happy Patients</span>
            </div>
            <div className="flex flex-col px-4 lg:px-6">
              <span className="text-2xl lg:text-[32px] text-[var(--color-rose)]" style={{ fontFamily: "var(--font-display)" }}>15+</span>
              <span className="text-xs lg:text-[13px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>Years Experience</span>
            </div>
            <div className="flex flex-col pl-4 lg:pl-6">
              <span className="text-2xl lg:text-[32px] text-[var(--color-rose)]" style={{ fontFamily: "var(--font-display)" }}>50+</span>
              <span className="text-xs lg:text-[13px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>Smiles Transformed</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN */}
        <div 
          className="flex items-center justify-center relative w-full order-first lg:order-last py-8 lg:py-0 z-10 h-full"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: (e.clientX - rect.left - rect.width / 2) / rect.width,
              y: (e.clientY - rect.top - rect.height / 2) / rect.height,
            });
          }}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
          {/* 5. THE 2D INTERACTIVE TOOTH CENTERPIECE */}
          <div style={{ perspective: "1000px" }} 
            className="relative w-48 h-56 lg:w-[420px] lg:h-[480px] mx-auto">
            
            {/* Glow behind tooth */}
            <div className="absolute inset-0 rounded-full scale-50 lg:scale-[0.8] translate-y-[10%]"
              style={{
                background: "radial-gradient(circle, #F0B8D0 0%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            />

            {/* Main tooth image with 3D tilt */}
            <motion.div
              animate={{
                rotateX: mousePos.y * -20,
                rotateY: mousePos.x * 20,
                y: [0, -12, 0],
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 200, damping: 20 },
                rotateY: { type: "spring", stiffness: 200, damping: 20 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/tooth.png"
                alt="3D Tooth"
                fill
                className="object-contain"
                style={{
                  filter: "drop-shadow(0px 30px 60px rgba(212, 113, 138, 0.4)) drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
                }}
                priority
              />
            </motion.div>

            {/* Floating sparkle dots */}
            {[
              { top: "10%", left: "5%", color: "#F0B8D0", size: 10, delay: 0, hide: false },
              { top: "20%", right: "8%", color: "#B8D4BB", size: 8, delay: 0.4, hide: true },
              { top: "60%", left: "2%", color: "#D4718A", size: 6, delay: 0.8, hide: false },
              { top: "70%", right: "5%", color: "#F0B8D0", size: 10, delay: 1.2, hide: true },
              { top: "40%", left: "8%", color: "#B8D4BB", size: 7, delay: 0.6, hide: false },
              { top: "85%", left: "30%", color: "#D4718A", size: 8, delay: 1.0, hide: true },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full pointer-events-none ${dot.hide ? 'hidden lg:block' : ''}`}
                style={{
                  width: dot.size,
                  height: dot.size,
                  background: dot.color,
                  top: dot.top,
                  left: dot.left,
                  right: dot.right,
                }}
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }}
              />
            ))}

            {/* Floating stat pills */}
            <motion.div
              className="absolute left-[-40px] lg:left-[-40px] top-[25%] bg-white rounded-full shadow-lg border flex items-center gap-2 px-3 py-1.5 lg:px-5 lg:py-3"
              style={{ borderColor: "var(--color-blush-deep)" }}
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-base">⭐</span>
              <span className="text-xs lg:text-sm font-semibold"
                style={{ color: "var(--color-rose-dark)" }}>
                4.9 Rating
              </span>
            </motion.div>

            <motion.div
              className="absolute right-[-40px] lg:right-[-40px] top-[15%] bg-white rounded-full shadow-lg border flex items-center gap-2 px-3 py-1.5 lg:px-5 lg:py-3"
              style={{ borderColor: "var(--color-blush-deep)" }}
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-base">🦷</span>
              <span className="text-xs lg:text-sm font-semibold"
                style={{ color: "var(--color-rose-dark)" }}>
                2000+ Smiles
              </span>
            </motion.div>

            <motion.div
              className="absolute right-[-35px] lg:right-[-35px] bottom-[25%] bg-white rounded-full shadow-lg border flex items-center gap-2 px-3 py-1.5 lg:px-5 lg:py-3"
              style={{ borderColor: "var(--color-blush-deep)" }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-base">✨</span>
              <span className="text-xs lg:text-sm font-semibold"
                style={{ color: "var(--color-rose-dark)" }}>
                Pain Free
              </span>
            </motion.div>

            {/* Bottom shadow */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-48 h-6 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(212,113,138,0.3) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
