"use client";

import { useState } from "react";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import { MapPin, Phone, Clock } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQKQf-fHJRXB0whfSbfI1I2DF6rQbUwL-5-tA6oYo4s0vHX_olAuYg7m9A2jREHwkG/exec";

const sendToGoogleSheets = async (data: object) => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Failed to send data:", error);
  }
};

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitType, setVisitType] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    // Open WhatsApp IMMEDIATELY
    const whatsappMessage = encodeURIComponent(
      `Hi Dr. Priya! I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nVisit Type: ${visitType}\nPreferred Date: ${date}\nMessage: ${message}`
    );
    window.open(
      `https://wa.me/919082179832?text=${whatsappMessage}`,
      "_blank"
    );

    // Save to Google Sheets in background (no await)
    sendToGoogleSheets({
      name: name,
      phone: phone,
      visitType: visitType,
      date: date,
      message: message,
      source: "Booking Form",
    });
  };

  return (
    <div id="book" className="w-full bg-gradient-to-b from-[var(--color-rose)] to-[var(--color-rose-dark)] py-16 lg:py-28 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HighlightGroup className="w-full h-full relative">
          <HighlighterItem className="rounded-3xl bg-white shadow-2xl relative">
            
            <Particles 
              className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden z-0 opacity-40 mix-blend-plus-lighter" 
              quantity={120} color="#FFFFFF" staticity={30} ease={50} vy={-0.1} 
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-6 sm:p-10 lg:p-16">
              
              {/* Left Column - Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-display)" }}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <div>
                    <label className="block text-xs text-[var(--color-text-muted)] mb-2" style={{ fontFamily: "var(--font-body)" }}>
                      Type of Visit
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["First Visit", "Follow-up", "Emergency"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setVisitType(type)}
                          className={`rounded-full px-4 py-2.5 text-sm cursor-pointer transition-all ${
                            visitType === type 
                              ? "bg-[var(--color-rose)] text-white border border-[var(--color-rose)] shadow-md" 
                              : "border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] text-[var(--color-text-muted)]"
                          }`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-blush-deep)] bg-[var(--color-ivory)] px-5 py-3.5 text-[15px] text-[var(--color-text-dark)] focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-rose)] focus:border-transparent transition-all text-gray-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  
                  <textarea
                    placeholder="Any specific concern or question for Dr. Priya?"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      border: "1px solid var(--color-blush-deep)",
                      background: "var(--color-ivory)",
                      color: "var(--color-text-dark)",
                      fontFamily: "var(--font-body)"
                    }}
                  />
                  
                  <button 
                    type="button"
                    onClick={handleBooking}
                    className="w-full mt-2 rounded-full bg-[var(--color-rose)] text-white py-4 text-[18px] font-medium hover:bg-[var(--color-rose-dark)] hover:shadow-[0_8px_20px_rgba(212,113,138,0.3)] transition-all duration-300 text-center inline-block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Book Appointment
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
