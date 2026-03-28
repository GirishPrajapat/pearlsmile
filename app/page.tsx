
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import BookAppointment from "@/components/sections/BookAppointment";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="gallery"><Gallery /></section>
      <section id="faq"><FAQ /></section>
      <section id="book"><BookAppointment /></section>
      <Footer />
    </main>
  );
}
