import { FadeIn, Section, SectionHeading, Divider } from "./SectionPrimitives";

const ArchitectureSection = () => (
  <Section id="architecture" alternate>
    <FadeIn>
      <Divider />
      <SectionHeading>Designed in the Traditional Nagara Style</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.15}>
      <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
        <p>
          The temple is being designed in the traditional Nagara style of North Indian
          temple architecture — a form revered for its sacred geometry, vertical shikhara,
          and spiritual symbolism.
        </p>
        <p>
          Guided by the principles of Vastu Shastra and Shilpa Shastras, every proportion,
          direction, and spatial alignment has been carefully considered to create an
          environment that supports contemplation, harmony, and positive energy.
        </p>
        <p>
          The temple's west-facing orientation holds symbolic significance — inviting
          seekers to turn inward at the close of the day, much like the setting sun
          encourages reflection and stillness.
        </p>
        <p>
          To ensure authenticity, the project is guided by a traditional temple craftsman
          whose lineage has been associated with temple construction for generations,
          bringing a deep understanding of sacred form, material, and meaning.
        </p>
      </div>
    </FadeIn>
  </Section>
);

export default ArchitectureSection;
