import { FadeIn, Section, SectionHeading, Divider } from "./SectionPrimitives";

const AboutSection = () => (
  <Section id="about">
    <FadeIn>
      <Divider />
      <SectionHeading>A Space Beyond Structure</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.15}>
      <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
        <p>
          The temple at Rishihood University is envisioned as more than a physical form.
          It is a quiet presence — a space for stillness, reflection, and inner alignment
          within a place of learning.
        </p>
        <p>
          Rooted in timeless tradition and shaped by the collective aspirations of students,
          this sacred space stands as a reminder that education is not only the pursuit of
          knowledge but also the cultivation of awareness, values, and purpose.
        </p>
        <p>
          As generations of students pass through this temple, may it continue to offer
          clarity in moments of doubt, calm in moments of restlessness, and gratitude in
          moments of growth.
        </p>
      </div>
    </FadeIn>
  </Section>
);

export default AboutSection;
