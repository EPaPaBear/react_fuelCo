import { ReactNode } from "react";
import "./Dispensers.css";

interface FeaturesAndHeroImage {
  children: ReactNode;
  heroImagePath: string;
}

function FeaturesHero({ children, heroImagePath }: FeaturesAndHeroImage) {
  return (
    <section className="features-hero-section">
      <div className="features">{children}</div>
      <div className="features-hero-image">
        <div className="features-hero-image-container">
          <img src={heroImagePath} alt="Placeholder" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
