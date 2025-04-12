import Benefits from "@/components/Benefits";
import BookSection from "@/components/BookSection";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <BookSection />
      <Benefits />
      <ContactUs />
      <ServicesSection />
      <HowWeWork />
      <Testimonials />
    </section>
  );
};
export default Home;
