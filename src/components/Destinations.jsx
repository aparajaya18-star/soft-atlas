import React from "react";
import DestinationCard from "./DestinationCard";

export default function Destination() {
  return (
    <section className="destinations">
      <h2>Here are a few of my recent travel destinations :</h2>

      <div className="container grid">
        <DestinationCard
          title="Banaras"
          description="A city filled with spirituality and a showcase of India's culture and beauty"
          images={[
            "/images/banaras_1.jpeg",
            "/images/banaras_2.jpeg",
            "/images/banaras_3.jpeg",
            "/images/banaras_4.jpeg",
          ]}
        />

        <DestinationCard
          title="Goa"
          description="A hub for adventure sports, it is the best place to let loose and have fun in India"
          images={[
            "/images/goa_1.jpeg",
            "/images/goa_2.jpeg",
            "/images/goa_3.jpeg",
          ]}
        />

        <DestinationCard
          title="Uttarakhand"
          description="A place to be surrounded by nature, away from everyday busy life"
          images={[
            "/images/uttarakhand_1.jpeg",
            "/images/uttarakhand_2.jpeg",
            "/images/uttarakhand_3.jpeg",
            "/images/uttarakhand_4.jpeg",
          ]}
        />
      </div>
    </section>
  );
}
