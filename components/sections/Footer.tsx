import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-text-dark)] pt-20 pb-8 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[28px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                🦷 PearlSmile
              </h3>
              <p className="text-[15px] mt-2 italic text-gray-300" style={{ fontFamily: "var(--font-body)" }}>
                Where Every Smile Tells a Story
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[var(--color-rose)]">
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold text-white/90 tracking-wide uppercase text-sm" style={{ fontFamily: "var(--font-body)" }}>Services</h4>
            <ul className="flex flex-col gap-3 text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Braces & Aligners</a></li>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Root Canal</a></li>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Smile Makeover</a></li>
              <li><a href="#" className="hover:text-[var(--color-rose)] transition-colors">Cleaning & Checkup</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold text-white/90 tracking-wide uppercase text-sm" style={{ fontFamily: "var(--font-body)" }}>Visit Us</h4>
            <ul className="flex flex-col gap-3 text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
              <li className="leading-relaxed">Bandra West, Mumbai<br/>Maharashtra 400050</li>
              <li><a href="tel:+919820000000" className="hover:text-[var(--color-rose)] transition-colors">+91 98200 00000</a></li>
              <li><a href="mailto:hello@pearlsmile.in" className="hover:text-[var(--color-rose)] transition-colors">hello@pearlsmile.in</a></li>
              <li className="mt-2 text-white/80">Mon–Sat: 9:00 AM – 7:30 PM</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold text-white/90 tracking-wide uppercase text-sm" style={{ fontFamily: "var(--font-body)" }}>Quick Links</h4>
            <ul className="flex flex-col gap-3 text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
              <li><a href="#about" className="hover:text-[var(--color-rose)] transition-colors">About Dr. Priya</a></li>
              <li><a href="#testimonials" className="hover:text-[var(--color-rose)] transition-colors">Testimonials</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-rose)] transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-[var(--color-rose)] transition-colors">FAQ</a></li>
              <li><a href="#book" className="hover:text-[var(--color-rose)] transition-colors">Book Appointment</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500" style={{ fontFamily: "var(--font-body)" }}>
          <p>© 2025 PearlSmile Dental. All rights reserved.</p>
          <p>Designed with ❤️ in Mumbai</p>
        </div>

      </div>
    </footer>
  );
}
