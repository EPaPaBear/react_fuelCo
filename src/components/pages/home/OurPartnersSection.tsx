import IMAGES from "../../../assets/Images";
import HeaderText from "./reuse/HeaderText";

function OurPartnersSection() {
  const images = [
    IMAGES.JP_TRUSTEE,
    IMAGES.BLOOM_PETRROLEUM,
    IMAGES.DESERT_OIL,
    IMAGES.ENGEN_PETROLEUM,
    IMAGES.GLORY_OIL,
    IMAGES.GSPL,
    IMAGES.ICON_ENERGY,
    IMAGES.MAXX,
    IMAGES.ONYXMA,
    IMAGES.PETRON,
    IMAGES.RADIANCE_PETROLEUM,
    IMAGES.TEL_ENERGY,
  ];
  return (
    <>
      <section className="our-partners-section">
        <div className="wwa-content header">
          <HeaderText text="Our partners" />
        </div>
        <div className="logos">
          <div className="logos-slide">
            {images.map((image, key) => (
              <img key={key} src={image} alt="" />
            ))}
          </div>
          <div className="logos-slide">
            {images.map((image, key) => (
              <img key={key} src={image} alt="" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartnersSection;
