import React from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

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
        {destinations.map((place) => (
          <DestinationCard
            key={place.id}
            title={place.title}
            description={
              <>
                {place.description.long.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </>
            }
            images={place.images.atlas}
            visitDate={place.visitDate}
          />
        ))}
      </div>
    </section>
  );
}