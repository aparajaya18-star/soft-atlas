import React from "react";

export default function Hero() {
  const base = process.env.PUBLIC_URL;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${base}/images/banner_image.jpeg)`,
      }}
    >
      <div className="hero-content">
        <h1>Welcome to the Soft Atlas</h1>
        <h2>A collection of my travel adventures</h2>
      </div>
    </section>
  );
}

