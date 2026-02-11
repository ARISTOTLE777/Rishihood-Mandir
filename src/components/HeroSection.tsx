import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ChakraSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
    <circle cx="100" cy="100" r="70" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="100" r="50" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.3" />
    {/* Spokes */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x1 = 100 + 50 * Math.cos(angle);
      const y1 = 100 + 50 * Math.sin(angle);
      const x2 = 100 + 90 * Math.cos(angle);
      const y2 = 100 + 90 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.35" />;
    })}
    {/* Petal shapes */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const cx = 100 + 80 * Math.cos(angle);
      const cy = 100 + 80 * Math.sin(angle);
      return <circle key={`p-${i}`} cx={cx} cy={cy} r="6" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.3" fill="none" />;
    })}
  </svg>
);

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

      {/* Rotating Chakra */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none z-[1]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <ChakraSVG />
      </motion.div>

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
