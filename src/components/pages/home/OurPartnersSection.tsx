import IMAGES from "../../../assets/images/Images";
import HeaderText from "./reuse/HeaderText";

function OurPartnersSection() {
  const images = [IMAGES.IMG_1, IMAGES.IMG_2, IMAGES.IMG_2];
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
