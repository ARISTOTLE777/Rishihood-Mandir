import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <p className="text-secondary font-heading text-xl md:text-2xl mb-4 tracking-wide">
          ॥ ॐ नमः शिवाय ॥
        </p>

        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary leading-tight mb-6">
          For Today's Students.
          <br />
          For Generations to Come.
        </h1>

        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          The Shiva Temple at Rishihood University — a sacred space envisioned by
          students and rooted in timeless Indian tradition.
        </p>

        <div className="flex items-center justify-center">
          <a
            href="#donate"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg"
          >
            Support This Sacred Initiative
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
