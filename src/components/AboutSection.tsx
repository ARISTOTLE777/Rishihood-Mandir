import { FadeIn, Section, SectionHeading, Divider, SlideIn } from "./SectionPrimitives";

const AboutSection = () => (
  <Section id="about">
    <FadeIn>
      <Divider />
      <SectionHeading>A Space Beyond Structure</SectionHeading>
    </FadeIn>
    <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed text-center overflow-hidden">
      <SlideIn direction="left" delay={0.2}>
        <p>
          The temple at Rishihood University is envisioned as more than a physical form.
          It is a quiet presence — a space for stillness, reflection, and inner alignment
          within a place of learning.
        </p>
      </SlideIn>
      <SlideIn direction="right" delay={0.3}>
        <p>
          Rooted in timeless tradition and shaped by the collective aspirations of students,
          this sacred space stands as a reminder that education is not only the pursuit of
          knowledge but also the cultivation of awareness, values, and purpose.
        </p>
      </SlideIn>
      <SlideIn direction="up" delay={0.4}>
        <p>
          As generations of students pass through this temple, may it continue to offer
          clarity in moments of doubt, calm in moments of restlessness, and gratitude in
          moments of growth.
        </p>
      </SlideIn>
    </div>
  </Section>
);

export default AboutSection;
