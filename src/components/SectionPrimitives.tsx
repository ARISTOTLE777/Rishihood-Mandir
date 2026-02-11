import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideInProps extends FadeInProps {
  direction?: "left" | "right" | "up" | "down";
}

export const SlideIn = ({ children, delay = 0, className = "", direction = "up" }: SlideInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -50 };
      case "right": return { opacity: 0, x: 50 };
      case "up": return { opacity: 0, y: 50 };
      case "down": return { opacity: 0, y: -50 };
      default: return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export const Section = ({ id, children, className = "", alternate = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 ${alternate ? "bg-card" : "bg-background"} ${className}`}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
};

export const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
    {children}
  </h2>
);

export const Divider = () => (
  <div className="flex items-center justify-center py-2">
    <div className="w-16 h-px bg-secondary/40" />
    <div className="mx-3 text-secondary/60 text-xs">✦</div>
    <div className="w-16 h-px bg-secondary/40" />
  </div>
);
