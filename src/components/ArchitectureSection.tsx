import { FadeIn, Section, SectionHeading, Divider, ScaleIn, SlideIn } from "./SectionPrimitives";

const ArchitectureSection = () => (
  <Section id="architecture" alternate>
    <FadeIn>
      <Divider />
      <SectionHeading>Designed in the Traditional Nagara Style</SectionHeading>
    </FadeIn>
    <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
      <ScaleIn delay={0.2}>
        <p>
          The temple is being designed in the traditional Nagara style of North Indian
          temple architecture — a form revered for its sacred geometry, vertical shikhara,
          and spiritual symbolism.
        </p>
      </ScaleIn>

      <SlideIn direction="up" delay={0.3}>
        <p>
          Guided by the principles of Vastu Shastra and Shilpa Shastras, every proportion,
          direction, and spatial alignment has been carefully considered to create an
          environment that supports contemplation, harmony, and positive energy.
        </p>
      </SlideIn>

      <SlideIn direction="up" delay={0.4}>
        <p>
          The temple's west-facing orientation holds symbolic significance — inviting
          seekers to turn inward at the close of the day, much like the setting sun
          encourages reflection and stillness.
        </p>
      </SlideIn>

      <ScaleIn delay={0.5}>
        <div className="p-6 border border-primary/20 rounded-lg bg-primary/5 mx-auto max-w-2xl mt-8">
          <p className="italic">
            To ensure authenticity, the project is guided by a traditional temple craftsman
            whose lineage has been associated with temple construction for generations,
            bringing a deep understanding of sacred form, material, and meaning.
          </p>
        </div>
      </ScaleIn>
    </div>
  </Section>
);

export default ArchitectureSection;
