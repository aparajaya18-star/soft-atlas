import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

export default function Home() {
  return (
    <section className="page">
      <Hero />

      <section className="destinations">
        <h2>Here are a few of my recent travel destinations :</h2>
        <div className="container grid">
          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              title={place.title}
              description={place.description.short}
              images={place.images.home}
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