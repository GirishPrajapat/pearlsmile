"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dr. Priya completely transformed my smile. I was nervous about veneers but she made me feel so comfortable throughout. My results look completely natural — I get compliments every single day.",
      name: "Ananya R.",
      designation: "Smile Makeover · Bandra, Mumbai",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
    },
    {
      quote: "Got my clear aligners from PearlSmile and the result is beyond what I expected. The staff is so warm and Dr. Priya checked in personally after every appointment.",
      name: "Rohan M.",
      designation: "Braces & Aligners · Juhu, Mumbai",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    },
    {
      quote: "Best root canal experience — if that's even possible! I was terrified walking in but it was completely painless. The clinic is so calm and beautiful, nothing like a typical dentist's office.",
      name: "Sneha K.",
      designation: "Root Canal Treatment · Powai, Mumbai",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    },
    {
      quote: "My daughter loves going to the dentist now thanks to Dr. Priya's incredible patience and warmth. As a mum, that means the world to me.",
      name: "Priti S.",
      designation: "Kids Dental Care · Andheri, Mumbai",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80",
    },
    {
      quote: "The smile makeover was genuinely life-changing. I hadn't smiled openly in photos for years. Now I can't stop. Worth every rupee and every visit.",
      name: "Kavya T.",
      designation: "Full Smile Makeover · Worli, Mumbai",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    },
  ];

  return (
    <div className="w-full bg-[var(--color-blush)] relative py-28 px-6 overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-blush-deep)_0%,transparent_70%)] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-4">
          <div className="flex items-center gap-1 mb-2 text-[var(--color-rose)]">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-[11px] tracking-[0.15em] text-[var(--color-rose-dark)] font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
            PATIENT STORIES
          </span>
          <h2 className="text-[40px] md:text-[52px] leading-tight text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
            Smiles We&apos;ve Transformed
          </h2>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} className="w-full" />
      </div>
    </div>
  );
}
