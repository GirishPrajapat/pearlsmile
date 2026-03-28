"use client";

import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import { MapPin, Phone, Clock } from "lucide-react";

export default function BookAppointment() {
  return (
    <div id="book" className="w-full bg-gradient-to-b from-[var(--color-rose)] to-[var(--color-rose-dark)] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HighlightGroup className="w-full h-full relative">
          <HighlighterItem className="rounded-3xl bg-white shadow-2xl relative">
            
            <Particles 
              className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden z-0 opacity-40 mix-blend-plus-lighter" 
              quantity={120} color="#FFFFFF" staticity={30} ease={50} vy={-0.1} 
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-14 lg:p-16">
              
              {/* Left Column - Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-[36px] md:text-[44px] leading-tight text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
                    Ready for Your Best Smile?
                  </h2>
                  <p className="text-[17px] text-[var(--color-text-muted)] mt-4 leading-[1.6]" style={{ fontFamily: "var(--font-body)" }}>
                    Book a consultation with Dr. Priya Sharma at our Mumbai clinic. First consultations are complimentary.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4" style={{ fontFamily: "var(--font-body)" }}>
                  <div className="flex items-center gap-4 py-4 border-b border-[var(--color-blush-deep)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-blush)] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-rose)]" />
                    </div>
                    <span className="text-[16px] text-[var(--color-text-dark)]">Bandra West, Mumbai, Maharashtra 400050</span>
                  </div>
                  
                  <div className="flex items-center gap-4 py-4 border-b border-[var(--color-blush-deep)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-blush)] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-rose)]" />
                    </div>
                    <span className="text-[16px] text-[var(--color-text-dark)]">+91 98200 00000</span>
                  </div>
                  
                  <div className="flex items-center gap-4 py-4 border-b border-[var(--color-blush-deep)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-blush)] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-rose)]" />
                    </div>
                    <span className="text-[16px] text-[var(--color-text-dark)]">Mon–Sat: 9:00 AM – 7:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex flex-col justify-center">
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all placeholder:text-gray-400"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="" disabled hidden>Select Service</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="braces">Braces & Aligners</option>
                      <option value="root_canal">Root Canal</option>
                      <option value="implants">Dental Implants</option>
                      <option value="makeover">Smile Makeover</option>
                      <option value="checkup">Cleaning & Checkup</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <input 
                    type="date" 
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all text-gray-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <button 
                    type="submit"
                    className="w-full mt-2 rounded-full bg-[var(--color-rose)] text-white py-4 text-[18px] font-medium hover:bg-[var(--color-rose-dark)] hover:shadow-[0_8px_20px_rgba(212,113,138,0.3)] transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Confirm Appointment &rarr;
                  </button>
                  
                  <p className="text-center text-[12px] text-[var(--color-text-muted)] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    Your first consultation is on us. No payment required today.
                  </p>
                </form>
              </div>
            </div>
            
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </div>
  );
}
