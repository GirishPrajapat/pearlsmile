"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PAIRS = [
  {
    title: "Teeth Whitening",
    before: "/images/whitening-before.png",
    after: "/images/whitening-after.png"
  },
  {
    title: "Aligner Treatment",
    before: "/images/aligners-before.png",
    after: "/images/aligners-after.png"
  },
  {
    title: "Smile Makeover",
    before: "https://images.unsplash.com/photo-1628155930542-3c7a64e2aed0?w=600&q=80",
    after: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&q=80"
  }
];

function BeforeAfterSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const onMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => isDragging && handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl cursor-ew-resize touch-none select-none group"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After image (background) */}
      <Image src={afterSrc} alt="After" fill className="object-cover pointer-events-none" />

      {/* Before image (clipped) */}
      <div 
        className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image src={beforeSrc} alt="Before" fill className="object-cover grayscale brightness-90 contrast-75 pointer-events-none" />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none transition-transform duration-200 group-hover:scale-110">
          <ChevronLeft className="w-4 h-4 text-gray-400 -mr-1" />
          <ChevronRight className="w-4 h-4 text-gray-400 -ml-1" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium tracking-wide">BEFORE</div>
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium tracking-wide">AFTER</div>
    </div>
  );
}

export default function Gallery() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headerRef.current) {
      const chars = headerRef.current.querySelectorAll(".split-char");
      gsap.fromTo(chars, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, y: 0, 
          duration: 0.6, stagger: 0.03, ease: "back.out(1.7)",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" }
        }
      );
    }
  }, []);

  const title = "The PearlSmile Transformation";

  return (
    <div 
      className="w-full py-28 px-6 md:px-12"
      style={{ background: "linear-gradient(135deg, var(--color-blush) 0%, var(--color-ivory) 50%, var(--color-blush-deep) 100%)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 ref={headerRef} className="text-[40px] md:text-[52px] leading-tight text-[var(--color-text-dark)] flex flex-wrap justify-center overflow-hidden" style={{ fontFamily: "var(--font-display)" }}>
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em] overflow-visible">
                {word.split("").map((c, j) => (
                  <span key={j} className="split-char inline-block">{c}</span>
                ))}
              </span>
            ))}
          </h2>
          <p className="text-[18px] text-[var(--color-text-muted)] mt-2" style={{ fontFamily: "var(--font-body)" }}>
            See real results from real patients
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {PAIRS.map((pair, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6">
              <BeforeAfterSlider beforeSrc={pair.before} afterSrc={pair.after} />
              <div className="bg-white rounded-full px-5 py-2 text-sm font-medium shadow-sm text-[var(--color-text-dark)] border border-[var(--color-blush-deep)] shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                {pair.title}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center mt-8 gap-6 text-center">
          <p className="text-[28px] italic text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
            Every smile is unique. Yours could be next.
          </p>
          <a href="#book" className="rounded-full bg-[var(--color-rose)] text-white px-8 py-3.5 hover:bg-[var(--color-rose-dark)] hover:shadow-lg transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Start Your Transformation
          </a>
        </div>

      </div>
    </div>
  );
}
