import React from "react";
import DestinationCard from "../components/DestinationCard";

export default function DestinationsPage() {
  return (
    <section className="destinations-page">
      <h1 className="page-title">Atlas</h1>

      <p className="page-intro">
        The Atlas is a personal archive of places that have shaped my understanding
        of travel, culture, and stillness. Each destination here holds memories,
        emotions, and moments that go beyond photographs.
      </p>

      <div className="container grid">
        <DestinationCard
          title="Banaras"
          description={
            <>
              <p>
                Banaras is not just a city—it is a living rhythm of faith, history,
                and continuity. From the early morning prayers echoing across the
                ghats to the quiet rituals performed by the river, every moment feels
                deeply intentional and rooted in centuries of tradition.
              </p>

              <p>
                Walking through its narrow lanes reveals layers of culture at every
                turn—temples tucked between homes, conversations flowing freely, and
                a sense of timelessness that blurs the line between past and present.
                It is a place that invites reflection and teaches patience.
              </p>

              <p>
                Banaras leaves you with a feeling that lingers long after you leave,
                reminding you of the beauty in continuity and belief.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/banaras_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_3.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_4.jpeg`,
            ]}

        />

        <DestinationCard
          title="Goa"
          description={
            <>
              <p>
                Goa is a contrast of energy and ease. Its beaches stretch endlessly,
                offering space to pause, while its streets pulse with music,
                conversation, and color.
              </p>

              <p>
                Mornings feel slow and golden, while evenings come alive with lights,
                laughter, and movement. Beyond the popular coastlines, quieter towns
                and markets reveal a softer, more personal side of the region.
              </p>

              <p>
                Goa represents freedom in motion—a reminder that rest and excitement
                can coexist beautifully.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/goa_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/goa_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/goa_3.jpeg`,,
          ]}
        />

        <DestinationCard
          title="Uttarakhand"
          description={
            <>
              <p>
                Uttarakhand feels like an escape into stillness. Surrounded by
                mountains and forests, the air itself seems quieter, encouraging
                introspection and calm.
              </p>

              <p>
                Rivers flow steadily through valleys, and trails lead to views that
                reward patience and presence. Life here moves at a gentler pace,
                shaped by nature rather than urgency.
              </p>

              <p>
                It is a place that restores balance—a reminder of how grounding
                simplicity and solitude can be.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/uttarakhand_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_3.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_4.jpeg`,
            ]}
        />
      </div>
    </section>
  );
}