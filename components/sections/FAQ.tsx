"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "@/lib/gsap";

const FAQ_ITEMS = [
  {
    q: "Is teeth whitening safe for sensitive teeth?",
    a: "Yes, our whitening treatments use gentle, enamel-safe formulas. Dr. Priya personally assesses sensitivity levels before recommending the most suitable protocol for each patient."
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care, dental implants can last a lifetime. We use only premium-grade titanium implants and provide comprehensive aftercare guidance to ensure lasting results."
  },
  {
    q: "Are braces or aligners painful?",
    a: "There may be mild discomfort for a few days after adjustments, but it's very manageable. Clear aligners tend to be more comfortable than traditional braces for most patients."
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a routine check-up and cleaning every 6 months. Regular visits allow us to catch any issues early and keep your smile in peak condition."
  },
  {
    q: "What exactly is a smile makeover?",
    a: "A smile makeover is a personalised combination of cosmetic treatments — such as veneers, whitening, and contouring — designed to address your unique aesthetic goals and facial features."
  },
  {
    q: "Do you offer treatment for children?",
    a: "Absolutely. Dr. Priya has a wonderful way with young patients. We create a fun, calm environment so children develop healthy dental habits from an early age."
  },
  {
    q: "What payment options are available?",
    a: "We accept all major cards, UPI, net banking, and offer no-cost EMI options through leading providers. We also work with most major dental insurance plans."
  },
  {
    q: "How do I book an appointment?",
    a: "You can book directly through our website using the 'Book Appointment' button, call us at our Mumbai clinic, or send us a WhatsApp message. We'll confirm within a few hours."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".faq-item");
      gsap.fromTo(items,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );
    }
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[var(--color-ivory)] py-16 lg:py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[860px] mx-auto flex flex-col gap-16">
        
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
            Common Questions
          </h2>
          <p className="text-[18px] text-[var(--color-text-muted)] mt-4" style={{ fontFamily: "var(--font-body)" }}>
            We believe in honest, transparent, patient-first communication.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="faq-item border-b border-[var(--color-blush-deep)]">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-[var(--color-rose)] group"
              >
                <span className="text-[17px] font-medium text-[var(--color-text-dark)] group-hover:text-[var(--color-rose)] transition-colors pr-8" style={{ fontFamily: "var(--font-body)" }}>
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-[var(--color-rose)]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[16px] text-[var(--color-text-muted)] pb-5 leading-[1.8]" style={{ fontFamily: "var(--font-body)" }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
