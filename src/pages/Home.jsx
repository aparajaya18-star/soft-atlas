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
    </section>
  );
}