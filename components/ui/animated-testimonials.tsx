"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials, autoplay = false, className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]); // Added testimonials.length instead of handleNext to avoid frequent re-runs if untethered

  useEffect(() => {
    setRotations(testimonials.map(() => Math.random() * 10 - 5));
    setMounted(true);
  }, [testimonials]);

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            {mounted && (
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{ opacity: 0, scale: 0.9, z: -100, rotate: rotations[index] || 0 }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : (rotations[index] || 0),
                      zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.9, z: 100, rotate: rotations[index] || 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src} alt={testimonial.name}
                      width={500} height={500} draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-dark)" }}>
              {testimonials[active].name}
            </h3>
            <p className="text-sm mt-1" style={{ color: "var(--color-rose)" }}>
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg mt-8" style={{ color: "var(--color-text-muted)" }}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={handlePrev}
              className="h-9 w-9 rounded-full flex items-center justify-center group/button transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: "var(--color-blush)" }}>
              <IconArrowLeft className="h-5 w-5 group-hover/button:rotate-12 transition-transform duration-300"
                style={{ color: "var(--color-rose)" }} />
            </button>
            <button onClick={handleNext}
              className="h-9 w-9 rounded-full flex items-center justify-center group/button transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: "var(--color-rose)" }}>
              <IconArrowRight className="h-5 w-5 group-hover/button:-rotate-12 transition-transform duration-300 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
