import React from "react";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { getVisitTimestamp } from "../utils/date";

export default function Atlas() {
  const [showFilters, setShowFilters] = React.useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredAndSortedDestinations = destinations
    .filter(dest =>
      activeFilters.length === 0 ||
      activeFilters.every(tag => dest.tags?.includes(tag))
    )
    .sort(
      (a, b) =>
        getVisitTimestamp(b.visitDate) - getVisitTimestamp(a.visitDate)
  );

  const FILTER_TAGS = [
    "sunlit",
    "wintered",
    "cultural",
    "nature-led",
    "fun",
    "historical",
    "slow",
    "lively",
    "peaceful"
  ];

  return (
    <section className="atlas-page">
      <h1 className="page-title">Atlas</h1>

      <p className="page-intro">
        The Atlas is a personal archive of places that have shaped my understanding
        of travel, culture, and stillness. Each destination here holds memories,
        emotions, and moments that go beyond photographs.
      </p>

      <div className="atlas-controls">
        <button className="filter-toggle"
          onClick={() => setShowFilters(prev => !prev)}
        >
          ⟡ Refine
        </button>

        {/* Random Wander will sit here later */}
      </div>

      {showFilters && (
        <div className="atlas-filters">
          {FILTER_TAGS.map(tag => (
            <button
              key={tag}
              className={`filter-pill ${
                activeFilters.includes(tag) ? "active" : ""
              }`}
              onClick={() =>
                setActiveFilters(prev =>
                  prev.includes(tag)
                    ? prev.filter(t => t !== tag)
                    : [...prev, tag]
                )
              }
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filteredAndSortedDestinations.length === 0 ? (
        <div className="no-results-wrapper">
          <p className="no-results">
            No places yet — but they’ll find their way here.
          </p>
        </div>
      ) : (
      <div className="atlas-grid">
        {filteredAndSortedDestinations.map((dest) => (
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
      )}
    </section>
  );
}