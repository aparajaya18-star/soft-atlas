export default function DestinationCard({ title, description, images }) {
  return (
    <div className="destination-card">
      <h3>{title}</h3>

      <div className="destinations-images">
        <div className="image-track">
          {images.map((src, index) => (
            <img key={index} src={src} alt={title} />
          ))}
        </div>

        <div className="scroll-hint">›</div>
      </div>

      <div className="destinations-text">
        <p>{description}</p>
      </div>
    </div>
  );
}
