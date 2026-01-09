import React from "react";
import DestinationCard from "../components/DestinationCard";

export default function DestinationsPage() {
  return (
    <section className="atlas-page">
      <h1 className="page-title">Atlas</h1>

      <p className="page-intro">
        The Atlas is a personal archive of places that have shaped my understanding
        of travel, culture, and stillness. Each destination here holds memories,
        emotions, and moments that go beyond photographs.
      </p>

      <div className="atlas-grid">
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

              <p>
                Banaras is a city shaped by ritual, continuity, and belief. From the flowing rhythm of the ghats to the quiet moments along the river, it carries a sense of timelessness that invites reflection and patience.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/banaras_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_3.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_4.jpeg`,
            `${process.env.PUBLIC_URL}/images/banaras_5.jpeg`,
            ]}
            visitDate={{ month: "December", year: "2025" }}
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

              <p>
                Goa’s charm goes beyond its beaches and parties. From quiet spice plantations and lush hinterlands to vibrant Portuguese-influenced architecture, the state is a mosaic of experiences waiting to be explored. Savor local cuisine, wander through serene villages, and soak in the laid-back lifestyle that makes Goa feel like a world apart from the rush of everyday life.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/goa_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/goa_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/goa_3.jpeg`,
            `${process.env.PUBLIC_URL}/images/goa_4.jpeg`,
          ]}
          visitDate={{ month: "October", year: "2024" }}
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

              <p>
                Uttarakhand offers stillness through mountains, forests, and slow-moving rivers. Life here feels guided by nature rather than urgency, creating space for calm, introspection, and balance.
              </p>
            </>
          }
          images={[
            `${process.env.PUBLIC_URL}/images/uttarakhand_1.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_2.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_3.jpeg`,
            `${process.env.PUBLIC_URL}/images/uttarakhand_4.jpeg`,
            ]}
          visitDate={{ month: "October", year: "2023" }}
        />

        <DestinationCard
        title="Ayodhya"
        description={
          <>
            <p>
              Ayodhya is a city steeped in history, legend, and spirituality. Known for its ancient temples and sacred ghats, it offers a serene and contemplative atmosphere for travelers seeking a connection with India's cultural heritage.
            </p>
            <p>
              Walking through its streets, you encounter a blend of tradition and vibrant local life — from colorful markets to the soothing sounds of ritual prayers along the Sarayu river. Each corner tells a story of devotion, architecture, and the passage of centuries.
            </p>
            <p>
              This city encourages visitors to slow down, reflect, and immerse themselves in a tapestry of history, mythology, and everyday beauty. Whether it’s sunrise by the river or exploring its historic landmarks, Ayodhya leaves a lasting impression on every traveler.
            </p>
          </>
        }
        images={[
          `${process.env.PUBLIC_URL}/images/ayodhya_1.jpeg`,
          `${process.env.PUBLIC_URL}/images/ayodhya_2.jpeg`,
          `${process.env.PUBLIC_URL}/images/ayodhya_3.jpeg`,
          `${process.env.PUBLIC_URL}/images/ayodhya_4.jpeg`,
          `${process.env.PUBLIC_URL}/images/ayodhya_5.jpeg`,
        ]}
        visitDate={{ month: "December", year: "2025" }}
      />


      <DestinationCard
        title="Agra"
        description={
          <>
            <p>
              Agra is a city steeped in history and culture, home to the iconic Taj Mahal.
              Walking through the white marble masterpiece is an unforgettable experience.
            </p>

            <p>
              Beyond the Taj Mahal, the Agra Fort and Fatehpur Sikri reveal centuries of
              Mughal architecture and stories. The bustling local bazaars offer spices,
              handicrafts, and vibrant street life that contrasts beautifully with the
              grandeur of the monuments.
            </p>

            <p>
              Agra is defined by its monumental history and enduring elegance. The Taj Mahal anchors the city in beauty and memory, while forts and markets add layers of movement, culture, and life.
            </p>
          </>
        }
        images={[
          `${process.env.PUBLIC_URL}/images/agra_1.jpeg`,
          `${process.env.PUBLIC_URL}/images/agra_2.jpeg`,
          `${process.env.PUBLIC_URL}/images/agra_3.jpeg`,
          `${process.env.PUBLIC_URL}/images/agra_4.jpeg`,
          `${process.env.PUBLIC_URL}/images/agra_5.jpeg`,
        ]}
        visitDate={{ month: "July", year: "2023" }}
      />

      <DestinationCard
        title="Jaipur"
        description={
          <>
            <p>
              Jaipur reveals itself through balance and symmetry. The city’s pink-hued
              architecture, wide streets, and historic forts create a sense of order
              that feels intentional rather than rigid.
            </p>

            <p>
              Exploring its palaces and courtyards, time seems to slow down. Light,
              stone, and space work together to create moments of quiet reflection,
              even amid the city’s constant movement.
            </p>

            <p>
              Beyond the landmarks, Jaipur’s markets and neighborhoods add texture and
              life — fabrics, craftsmanship, and everyday rituals layered into the
              city’s rhythm.
            </p>

            <p>
              Jaipur leaves behind a calm sense of structure, reminding you that beauty
              can exist in both detail and design.
            </p>
          </>
        }
        images={[
          `${process.env.PUBLIC_URL}/images/jaipur_1.jpeg`,
          `${process.env.PUBLIC_URL}/images/jaipur_2.jpeg`,
          `${process.env.PUBLIC_URL}/images/jaipur_3.jpeg`,
          `${process.env.PUBLIC_URL}/images/jaipur_4.jpeg`,
          `${process.env.PUBLIC_URL}/images/jaipur_5.jpeg`,
        ]}
        visitDate={{ month: "October", year: "2025" }}
      />
      </div>
    </section>
  );
}