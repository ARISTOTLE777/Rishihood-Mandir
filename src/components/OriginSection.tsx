import { FadeIn, Section, SectionHeading, Divider } from "./SectionPrimitives";

const OriginSection = () => (
  <Section id="origin">
    <FadeIn>
      <Divider />
      <SectionHeading>A Temple Envisioned by Students</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.15}>
      <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
        <p>
          Through immersive Soul Treks to Haridwar, students engaged deeply with India's
          living spiritual traditions. Walking along the ghats of Har Ki Pauri, sitting in
          silence, and learning at spaces such as Shantikunj and Dev Sanskriti
          Vishwavidyalaya, they encountered the essence of Raja Yoga, Karma Yoga, Jnana
          Yoga, and Bhakti Yoga as lived practices.
        </p>
        <p>
          On returning to campus, a shared realization emerged. The need for a sacred space
          where students could pause, reflect, and reconnect with themselves amid the rhythm
          of academic life.
        </p>
      </div>
    </FadeIn>
    <FadeIn delay={0.25}>
      <div className="my-10 text-center font-heading text-primary/70 text-lg md:text-xl italic leading-relaxed">
        A space for stillness.
        <br />
        A space for balance.
        <br />
        A space for inner grounding.
      </div>
    </FadeIn>
    <FadeIn delay={0.3}>
      <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
        <p>
          This sacred initiative is unique in its origin. The vision for the temple emerged
          not from administrative planning, but from the collective voice of students.
        </p>
        <p>
          Students stepped forward not as passive beneficiaries, but as active participants
          — contributing time, effort, and resources to shape this shared vision.
        </p>
        <p>
          This temple stands as a testament to a generation that seeks progress alongside
          purpose, and innovation rooted in values.
        </p>
      </div>
    </FadeIn>
  </Section>
);

export default OriginSection;
