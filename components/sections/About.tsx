"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      gsap.fromTo(leftRef.current, 
        { x: -60, opacity: 0 }, 
        { 
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%" } 
        }
      );
      gsap.fromTo(rightRef.current, 
        { x: 60, opacity: 0 }, 
        { 
          x: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%" } 
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-[var(--color-ivory)] py-16 lg:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Image */}
        <div ref={leftRef} className="relative rounded-3xl z-10">
          {/* Decorative Back Circle */}
          <div className="absolute -z-10 w-72 h-72 rounded-full bg-[var(--color-blush)] blur-3xl opacity-60 top-10 -left-10" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[520px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600"
              alt="Dr. Priya Sharma"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-4 w-48 flex flex-col gap-1 items-center text-center">
            <span className="text-[20px] font-bold text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
              ⭐ 4.9 / 5.0
            </span>
            <span className="text-[12px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
              From 800+ Google Reviews
            </span>
          </div>
        </div>

        {/* Right Column - Content */}
        <div ref={rightRef} className="flex flex-col items-start gap-6">
          <span className="text-[11px] tracking-[0.15em] text-[var(--color-rose)] font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
            MEET YOUR DOCTOR
          </span>
          
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-dark)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Dr. Priya Sharma
            </h2>
            <p className="text-[18px] text-[var(--color-rose)]" style={{ fontFamily: "var(--font-body)" }}>
              BDS · MDS Prosthodontics
            </p>
          </div>

          <p className="text-[16px] md:text-[18px] text-[var(--color-text-muted)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            With over 15 years of practice in cosmetic and restorative dentistry, Dr. Priya Sharma founded PearlSmile Dental with a single mission — to make every patient feel seen, heard, and genuinely cared for. Trained at Mumbai&apos;s top dental institute, she combines clinical precision with a warmth that turns anxious first-visits into lifelong dental health journeys.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["MDS Prosthodontics", "15+ Years", "2000+ Smiles", "Featured in Vogue India"].map((pill) => (
              <span key={pill} className="rounded-full border border-[var(--color-blush-deep)] bg-[var(--color-blush)] px-4 py-1.5 text-sm font-medium text-[var(--color-rose-dark)]" style={{ fontFamily: "var(--font-body)" }}>
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-6 text-[28px] italic text-[var(--color-rose)]" style={{ fontFamily: "var(--font-display)" }}>
            Dr. Priya Sharma
          </div>
        </div>

      </div>
    </div>
  );
}
