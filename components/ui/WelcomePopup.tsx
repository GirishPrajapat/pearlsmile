"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [whatsappAgreed, setWhatsappAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.mobile || !agreed) return;

    // Save to Google Sheets
    await sendToGoogleSheets({
      name: `${form.firstName} ${form.lastName}`,
      phone: form.mobile,
      visitType: "Not specified",
      date: "Not specified",
      message: "Enquiry from welcome popup",
      source: "Welcome Popup",
    });

    // Open WhatsApp
    const message = encodeURIComponent(
      `Hi Dr. Priya! I'd like to book an appointment.\n\nName: ${form.firstName} ${form.lastName}\nMobile: ${form.mobile}`
    );
    
    sessionStorage.setItem("pearlsmile_popup", "true");
    setIsOpen(false);
    window.open(
      `https://wa.me/919082179832?text=${message}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div
              className="relative w-full max-w-md rounded-3xl p-8 shadow-2xl"
              style={{ background: "var(--color-ivory)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full 
                flex items-center justify-center text-gray-400 
                hover:text-gray-600 transition-colors"
                style={{ background: "var(--color-blush)" }}
              >
                ✕
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🦷</div>
                <h2 className="text-2xl font-semibold"
                  style={{ 
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-dark)" 
                  }}>
                  Welcome to PearlSmile
                </h2>
                <p className="text-sm mt-1"
                  style={{ color: "var(--color-text-muted)" }}>
                  Book your free consultation today
                </p>
              </div>

              {/* Form fields */}
              <div className="flex flex-col gap-3">
                
                {/* First + Last name row */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                    style={{
                      border: "1px solid var(--color-blush-deep)",
                      background: "white",
                      color: "var(--color-text-dark)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                    style={{
                      border: "1px solid var(--color-blush-deep)",
                      background: "white",
                      color: "var(--color-text-dark)",
                    }}
                  />
                </div>

                {/* Mobile */}
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                  style={{
                    border: "1px solid var(--color-blush-deep)",
                    background: "white",
                    color: "var(--color-text-dark)",
                  }}
                />

                {/* Terms checkbox */}
                <label className="flex items-start gap-2 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 accent-rose-400"
                  />
                  <span className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}>
                    I agree to the{" "}
                    <a href="/terms" target="_blank"
                      style={{ color: "var(--color-rose)" }}
                      className="underline hover:opacity-80">
                      Terms & Conditions
                    </a>
                    {" "}and{" "}
                    <a href="/privacy" target="_blank"
                      style={{ color: "var(--color-rose)" }}
                      className="underline hover:opacity-80">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                {/* WhatsApp checkbox */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={whatsappAgreed}
                    onChange={(e) => setWhatsappAgreed(e.target.checked)}
                    className="mt-0.5 accent-rose-400"
                  />
                  <span className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}>
                    I agree to receive appointment updates 
                    and communications via WhatsApp
                  </span>
                </label>

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={!form.firstName || !form.mobile || !agreed}
                  className="w-full rounded-full py-3 text-white 
                  font-medium text-sm mt-2 transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  hover:shadow-lg hover:scale-[1.02]"
                  style={{ background: "var(--color-rose)" }}
                >
                  Book via WhatsApp 🦷
                </button>

                {/* Skip */}
                <button
                  onClick={handleClose}
                  className="text-xs text-center w-full mt-1
                  hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
