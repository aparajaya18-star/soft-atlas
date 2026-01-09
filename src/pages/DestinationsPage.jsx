import React from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { getVisitTimestamp } from "../utils/date";

export default function DestinationsPage() {
  const sortedDestinations = [...destinations].sort(
    (a, b) =>
      getVisitTimestamp(b.visitDate) - getVisitTimestamp(a.visitDate)
  );

  return (
    <section className="atlas-page">
      <h1 className="page-title">Atlas</h1>

      <p className="page-intro">
        The Atlas is a personal archive of places that have shaped my understanding
        of travel, culture, and stillness. Each destination here holds memories,
        emotions, and moments that go beyond photographs.
      </p>

      <div className="atlas-grid">
        {sortedDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            title={dest.title}
            description={
              <>
                {dest.description.long.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </>
            }
            images={dest.images.atlas}
            visitDate={dest.visitDate}
          />
        ))}
      </div>
    </section>
  );
}