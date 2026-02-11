import { FadeIn, Section, SectionHeading, Divider } from "./SectionPrimitives";

const GratitudeSection = () => (
  <Section id="gratitude">
    <FadeIn>
      <Divider />
      <SectionHeading>With Gratitude</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.15}>
      <div className="text-foreground/80 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto space-y-5">
        <p>
          We extend our heartfelt thanks to all students, faculty members, alumni, and
          well wishers whose faith, support and participation have helped bring this
          sacred vision to life.
        </p>
        <p>
          Your contribution of time, intention, and belief nurtures not only a temple, but
          the spiritual and moral foundation of future generations.
        </p>
      </div>
    </FadeIn>
  </Section>
);

export default GratitudeSection;
