import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { getVisitTimestamp } from "../utils/date";

export default function Home() {
  const sortedDestinations = [...destinations].sort(
    (a, b) =>
      getVisitTimestamp(b.visitDate) - getVisitTimestamp(a.visitDate)
  );

  const recentDestinations = sortedDestinations.slice(0, 3);

  const [backendMessage, setBackendMessage] = useState("");
  const [visitors, setVisitors] = useState(null);

  // 🔹 Read-only backend check (NO increment)
  useEffect(() => {
    fetch("https://soft-atlas.onrender.com/api/data")
      .then((res) => res.json())
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch(() => {});
  }, []);

  // 🔹 Visitor count (increment ONCE per session)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("soft-atlas-visited");

    const url = hasVisited
      ? "https://soft-atlas.onrender.com/api/visitors?peek=true"
      : "https://soft-atlas.onrender.com/api/visitors";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.visitors);
        sessionStorage.setItem("soft-atlas-visited", "true");
      })
      .catch(() => {});
  }, []);

  return (
    <section className="page">
      <Hero />

      <section className="destinations">
        <h2>Here are a few of my recent travel destinations :</h2>
        <div className="container grid">
          {recentDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              title={dest.title}
              description={dest.description.short}
              images={dest.images.home}
            />
          ))}
        </div>
      </section>

      <p className="atlas-cta">
        These are only glimpses.{" "}
        <Link to="/atlas">Explore the Atlas →</Link>
      </p>

      {backendMessage && (
        <p
          style={{
            marginTop: "40px",
            fontSize: "0.85rem",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          {backendMessage}
        </p>
      )}

      {visitors !== null ? (
        <p className="visitor-count">
          Travelers who’ve passed through: {visitors}
        </p>
      ) : (
        <p className="visitor-count muted">
          Travelers who’ve passed through: ✦
        </p>
      )}
    </section>
  );
}