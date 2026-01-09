import { useRef } from "react";

export default function DestinationCard({ title, description, images }) {
  const trackRef = useRef(null); // ← ADD

  const scrollRight = () => {
  if (!trackRef.current) return;

  const firstImage = trackRef.current.querySelector("img");
  if (!firstImage) return;

  const imageWidth = firstImage.offsetWidth;
  const gap = 24; // matches your CSS gap

  trackRef.current.scrollBy({
    left: imageWidth + gap,
    behavior: "smooth",
  });
 };

  return (
    <div className="destination-card">
      <h3>{title}</h3>

      <div className="destinations-images">
        <div className="image-track" ref={trackRef}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={title} />
          ))}
        </div>

        {/* THIS is what was missing */}
        <button className="scroll-hint" onClick={scrollRight}>
          <span className="arrow">›</span>
        </button>
      </div>

      <div className="destinations-text">
        <p>{description}</p>
      </div>
    </div>
  );
}