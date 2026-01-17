import { useRef, useState, useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function DestinationCard({id, isWanderTarget, title, description, images, visitDate }) {
  const trackRef = useRef(null);
  const fadeRef = useFadeIn();
  const [index, setIndex] = useState(0);

  const scrollToIndex = (newIndex) => {
    if (!trackRef.current) return;

    const img = trackRef.current.querySelector("img");
    if (!img) return;

    const gap = 24;
    const width = img.offsetWidth + gap;

    trackRef.current.scrollTo({
      left: width * newIndex,
      behavior: "smooth",
    });

    setIndex(newIndex);
  };

  const scrollRight = () => {
    if (index < images.length - 1) {
      scrollToIndex(index + 1);
    }
  };

  const scrollLeft = () => {
    if (index > 0) {
      scrollToIndex(index - 1);
    }
  };

    useEffect(() => {
      if (!isWanderTarget || !fadeRef.current) return;

      const el = fadeRef.current;

      // Restart glow safely
      el.classList.remove("wander-highlight");
      void el.offsetWidth; // force reflow
      el.classList.add("wander-highlight");
    }, [isWanderTarget]);

  return (
    <div ref={fadeRef} 
      id={`dest-${id}`}
      className="destination-card fade-in"
    >
      <div className="destination-info">
        <h3>{title}</h3>

        {visitDate?.month && visitDate?.year && (
          <p className="visit-date">
            Visited on {visitDate.month} <span className="dot">•</span> {visitDate.year}
          </p>
        )}
        
      </div>

      <div className="destinations-images">
        <div className="image-track" ref={trackRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={title} />
          ))}
        </div>

        {/* Left arrow */}
        <button
          className={`scroll-hint left ${index === 0 ? "hidden" : ""}`}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>


        {/* Right arrow */}
        <button
          className={`scroll-hint right ${index === images.length - 1 ? "hidden" : ""}`}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          ›
      </button>
      </div>

      <div className="destinations-text">
        <p>{description}</p>
      </div>
    </div>
  );
}
