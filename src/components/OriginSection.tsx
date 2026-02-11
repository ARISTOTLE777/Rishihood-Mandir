import { FadeIn, Section, SectionHeading, Divider, ScaleIn, SlideIn } from "./SectionPrimitives";

const OriginSection = () => (
  <Section id="origin">
    <FadeIn>
      <Divider />
      <SectionHeading>A Temple Envisioned by Students</SectionHeading>
    </FadeIn>
    <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
      <SlideIn direction="up" delay={0.2}>
        <p>
          Through immersive Soul Treks to Haridwar, students engaged deeply with India's
          living spiritual traditions. Walking along the ghats of Har Ki Pauri, sitting in
          silence, and learning at spaces such as Shantikunj and Dev Sanskriti
          Vishwavidyalaya, they encountered the essence of Raja Yoga, Karma Yoga, Jnana
          Yoga, and Bhakti Yoga as lived practices.
        </p>
      </SlideIn>
      <SlideIn direction="up" delay={0.3}>
        <p>
          On returning to campus, a shared realization emerged. The need for a sacred space
          where students could pause, reflect, and reconnect with themselves amid the rhythm
          of academic life.
        </p>
      </SlideIn>
    </div>
    <ScaleIn delay={0.25}>
      <div className="my-12 text-center font-heading text-primary/80 text-xl md:text-2xl italic leading-relaxed bg-secondary/5 py-8 rounded-full px-4">
        <span className="block mb-2">A space for stillness.</span>
        <span className="block mb-2">A space for balance.</span>
        <span className="block">A space for inner grounding.</span>
      </div>
    </ScaleIn>
    <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
      <SlideIn direction="left" delay={0.3}>
        <p>
          This sacred initiative is unique in its origin. The vision for the temple emerged
          not from administrative planning, but from the collective voice of students.
        </p>
      </SlideIn>
      <SlideIn direction="right" delay={0.4}>
        <p>
          Students stepped forward not as passive beneficiaries, but as active participants
          — contributing time, effort, and resources to shape this shared vision.
        </p>
      </SlideIn>
      <ScaleIn delay={0.5}>
        <p className="font-medium text-primary">
          This temple stands as a testament to a generation that seeks progress alongside
          purpose, and innovation rooted in values.
        </p>
      </ScaleIn>
    </div>
  </Section>
);

export default OriginSection;
