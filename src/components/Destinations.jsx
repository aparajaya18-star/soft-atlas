import React from "react";
import DestinationCard from "./DestinationCard";

const base = process.env.PUBLIC_URL;

export default function Destination() {
  return (
    <section className="destinations">
      <h2>Here are a few of my recent travel destinations :</h2>

      <div className="container grid">
        <DestinationCard
          title="Banaras"
          description="A city filled with spirituality and a showcase of India's culture and beauty"
          images={[
            `${base}/images/banaras_1.jpeg`,
            `${base}/images/banaras_2.jpeg`,
            `${base}/images/banaras_3.jpeg`,
            `${base}/images/banaras_4.jpeg`,
          ]}
        />

        <DestinationCard
          title="Goa"
          description="A hub for adventure sports, it is the best place to let loose and have fun in India"
          images={[
            `${base}/images/goa_1.jpeg`,
            `${base}/images/goa_2.jpeg`,
            `${base}/images/goa_3.jpeg`,
          ]}
        />

        <DestinationCard
          title="Uttarakhand"
          description="A place to be surrounded by nature, away from everyday busy life"
          images={[
            `${base}/images/uttarakhand_1.jpeg`,
            `${base}/images/uttarakhand_2.jpeg`,
            `${base}/images/uttarakhand_3.jpeg`,
            `${base}/images/uttarakhand_4.jpeg`,
          ]}
        />

        <DestinationCard
        title="Ayodhya"
        description={
          <>
            <p>
              Ayodhya is an ancient city with profound cultural and spiritual significance, where every corner echoes stories of history and devotion.
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
      />
      </div>
    </section>
  );
}