import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";

export default function Home() {
  return (
    <section className="page">
      <Hero />
      <Destinations />

      <p className="atlas-cta">
        These are only glimpses.{" "}
        <Link to="/atlas">Explore the Atlas →</Link>
      </p>
    </section>
  );
}
