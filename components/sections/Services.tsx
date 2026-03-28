"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Sparkles, AlignCenter, Syringe, Anchor, Star, ShieldCheck } from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments that safely brighten your smile up to 8 shades in a single visit.",
    icon: Sparkles,
    area: "md:[grid-area:1/1/2/5]",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80"
  },
  {
    title: "Braces & Aligners",
    desc: "Options like Invisalign properly align your teeth discretely and comfortably.",
    icon: AlignCenter,
    area: "md:[grid-area:1/5/2/9]",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb73f69f3?w=400&q=80"
  },
  {
    title: "Root Canal",
    desc: "Painless procedures designed to save your natural tooth seamlessly.",
    icon: Syringe,
    area: "md:[grid-area:1/9/2/13]",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80"
  },
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements meticulously placed for lifelong perfection.",
    icon: Anchor,
    area: "md:[grid-area:2/1/3/7]",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
  },
  {
    title: "Smile Makeover",
    desc: "Complete revitalizations involving veneers, contouring, and advanced restorative techniques.",
    icon: Star,
    area: "md:[grid-area:2/7/3/13]",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80"
  },
  {
    title: "Cleaning & Checkup",
    desc: "Essential preventative care encompassing deep tartar removal, polishing, and comprehensive oral health assessments to keep your smile pristine.",
    icon: ShieldCheck,
    area: "md:[grid-area:3/1/4/13]",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" }
        }
      );
    }
    
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll("li");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-[var(--color-ivory-warm)] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center gap-4">
          <span className="text-[11px] tracking-[0.15em] text-[var(--color-rose)] font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
            OUR SERVICES
          </span>
          <h2 className="text-[40px] md:text-[52px] leading-tight text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
            Crafted Care for Every Smile
          </h2>
          <p className="text-[18px] text-[var(--color-text-muted)] max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Comprehensive treatments delivered with warmth and precision
          </p>
        </div>

        {/* Grid */}
        <ul ref={gridRef} className="grid grid-cols-1 gap-2 md:grid-cols-12 md:grid-rows-3 lg:gap-2 relative">
          {SERVICES_DATA.map((service, i) => (
            <li 
              key={i} 
              className={cn("min-h-[14rem] list-none opacity-0", service.area)}
            >
              <div className="relative h-full rounded-[1.25rem] border border-[var(--color-blush-deep)] z-10">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <motion.div
                  className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-[1.25rem] bg-white p-6 shadow-sm cursor-pointer h-full"
                  whileHover="hovered"
                  initial="rest"
                >
                  {/* Background image that reveals on hover */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    variants={{
                      rest: { opacity: 0, scale: 1.1 },
                      hovered: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark overlay so text stays readable */}
                    <div className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
                      }}
                    />
                  </motion.div>

                  {/* Card content — sits above image, z-10 */}
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    
                    {/* Icon — changes color on hover */}
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      variants={{
                        rest: { backgroundColor: "var(--color-blush)" },
                        hovered: { backgroundColor: "rgba(255,255,255,0.2)" },
                      }}
                    >
                      <service.icon
                        className="w-5 h-5"
                        style={{ color: "var(--color-rose)" }}
                      />
                    </motion.div>

                    {/* Title — white on hover */}
                    <motion.h3
                      className="text-xl font-semibold mt-2"
                      style={{ fontFamily: "var(--font-display)" }}
                      variants={{
                        rest: { color: "var(--color-text-dark)" },
                        hovered: { color: "#ffffff" },
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description — white on hover */}
                    <motion.p
                      className="text-sm leading-relaxed"
                      variants={{
                        rest: { color: "var(--color-text-muted)" },
                        hovered: { color: "rgba(255,255,255,0.85)" },
                      }}
                    >
                      {service.desc}
                    </motion.p>

                    {/* Learn more — moves up on hover */}
                    <motion.span
                      className="text-sm font-medium mt-auto"
                      variants={{
                        rest: { color: "var(--color-rose)", y: 0 },
                        hovered: { color: "#ffffff", y: -4 },
                      }}
                    >
                      Learn more →
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
