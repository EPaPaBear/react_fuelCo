import SubHeaderText from "./reuse/SubHeaderText";
import HeaderText from "./reuse/HeaderText";
import PlainText from "./reuse/PlainText";
import IMAGES from "../../../assets/Images";
import "./reuse/Home.css";

function SmartlinesInActionSection() {
  return (
    <>
      <section className="smartlines-section">
        <div className="header-text">
          <HeaderText text="Smartlines In Action" />
        </div>
        <div className="smartline-subheader">
          <div className="smartline-description">
            <PlainText>
              From small independent gas stations to large-scale fueling
              operations, Smartline dispensers are helping businesses of all
              sizes operate more efficiently and provide better service to their
              customers.
            </PlainText>
          </div>
          <div className="smartline-subheader-catchline">
            <SubHeaderText text="Discover out Impact on Real Businesses" />
          </div>
        </div>
        <div className="smartline-img-gallery">
          <div className="smartline-img-grid">
            <figure className="gallery-item gallery-item-1">
              <img src={IMAGES.IMG_1} alt="image-1" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-2">
              <img src={IMAGES.IMG_2} alt="image-2" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-3">
              <img src={IMAGES.IMG_3} alt="image-3" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-4">
              <img src={IMAGES.IMG_4} alt="image-4" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-5">
              <img src={IMAGES.IMG_5} alt="image-5" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-6">
              <img src={IMAGES.IMG_6} alt="image-6" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-7">
              <img src={IMAGES.IMG_7} alt="image-7" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-8">
              <img src={IMAGES.IMG_8} alt="image-8" className="gallery-img" />
            </figure>
            <figure className="gallery-item gallery-item-9">
              <img src={IMAGES.IMG_9} alt="image-9" className="gallery-img" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmartlinesInActionSection;
