import React from "react";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(/images/banner_image.jpeg)",
      }}
    >
      <div className="hero-content">
        <h1>Welcome to the Soft Atlas</h1>
        <h2>A collection of my travel adventures</h2>
      </div>
    </section>
  );
}
