import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, FadeIn } from "./SectionPrimitives";

const stats = [
    { label: "Students", value: 5000, suffix: "+" },
    { label: "Faculty", value: 150, suffix: "+" },
    { label: "Acres Campus", value: 25, suffix: "" },
    { label: "Schools", value: 5, suffix: "" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <span ref={ref} className="flex justify-center">
            {isInView ? (
                <span className="tabular-nums">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CountUp end={value} duration={2} />
                    </motion.span>
                    {suffix}
                </span>
            ) : (
                <span>0{suffix}</span>
            )}
        </span>
    );
};

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const incrementTime = (duration / end) * 1000;

        // For large numbers, increment by a step
        const step = end > 100 ? Math.ceil(end / 100) : 1;
        const timerDuration = end > 100 ? (duration / 100) * 1000 : incrementTime;

        const timer = setInterval(() => {
            start += step;
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, timerDuration);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <>{count.toLocaleString()}</>;
};

import React from "react";

const StatsSection = () => {
    return (
        <Section id="stats" className="bg-primary text-primary-foreground">
            <FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading tracking-tight group-hover:scale-110 transition-transform duration-300">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
};

export default StatsSection;
