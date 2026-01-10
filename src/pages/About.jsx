export default function About() {
  return (
    <section className="page">
    <section className="about-section">
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about_banner.jpeg)`
        }}
      >
        <div className="about-hero-overlay">
          <h1>About Soft Atlas</h1>

          <p className="about-hero-subtitle">
            A quiet archive of places, moments, and memories.
          </p>
        </div>
      </section>

      <div className="text-divider">
       ──── ✦ ────
      </div>

      <div className="about-content">
         <p>
            Soft Atlas is a personal travel journal created to document places that
            leave a lasting impression. Rather than fast-paced itineraries, this
            space focuses on slower experiences — cities, landscapes, and moments
            that feel grounding.
          </p>

          <p>
            Each destination shared here reflects a sense of calm, curiosity, and
            attention to detail. From busy streets to quiet corners, Soft Atlas
            grows as a collection of places that invite pause rather than urgency.
          </p>

          <p>
            This project continues to evolve with every journey. Soft Atlas is
            meant to be revisited — a record of movement, memory, and stillness
            over time.
          </p>

          <p className="about-signature">
            Created as a personal archive, Soft Atlas reflects the way I experience
            travel — slowly, observantly, and with an appreciation for quiet detail.
          </p>

          <div className="text-divider">
            ──── ✦ ────
          </div>
        </div>
      </section>
    </section>
  );
}
