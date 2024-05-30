import IMAGES from "../../../assets/Images";
import HeaderText from "./reuse/HeaderText";
import "./reuse/Home.css";
import PlainText from "./reuse/PlainText";
import SubHeaderText from "./reuse/SubHeaderText";

function WhoWeAreSection() {
  return (
    <>
      <section className="our-partners-section">
        <div className="wwa-content header-text">
          <HeaderText text="Who We Are" />
        </div>
        <div className="color-bkg-orange">
          <div className="wwa-content our-vision-subsection">
            <div className="founder-images">
              <div className="founder-card">
                <img
                  className="founder-img"
                  src={IMAGES.IMG_7}
                  alt="PlaceHolder"
                />
                <div className="card-description">
                  <h4>Mr. Michael Tawiah Ashie</h4>
                  <p>Board Chairman</p>
                </div>
              </div>
              <div className="founder-card">
                <img
                  className="founder-img"
                  src={IMAGES.IMG_8}
                  alt="PlaceHolder"
                />
                <div className="card-description">
                  <h4>Mr. Edmund Torto</h4>
                  <p>Executive Director (Projects/Sales Manager)</p>
                </div>
              </div>
            </div>
            <div className="vision-text">
              <SubHeaderText className="wwa-subheader" text="Our Vision" />
              <PlainText className="wwa-paragraph">
                To become a first-choice service provider in the Ghanaian
                petroleum industry and across our continent using well
                experienced and skilled human resources and modern technology to
                provide quality and top-class services to stakeholders in order
                to bring about increment in stake-holders profitability.
              </PlainText>
            </div>
          </div>
        </div>
        <div className="color-bkg-blue">
          <div className="wwa-content our-vision-subsection">
            <div className="vision-text-blue">
              <SubHeaderText className="wwa-subheader" text="Our Mission" />
              <PlainText className="wwa-paragraph-blue">
                To provide expert services in the area of petroleum equipment to
                enhance efficiency and effectiveness of businesses through
                sales, repairs and servicing of petroleum equipment for the
                various oil companies. Also helping them to meet their
                expectations concerning efficient petroleum distribution in the
                country, thereby assisting them to achieve their marketer’s
                margin.
              </PlainText>
            </div>
            <div className="founder-images">
              <div className="founder-card">
                <img
                  className="founder-img"
                  src={IMAGES.IMG_7}
                  alt="PlaceHolder"
                />
                <div className="card-description">
                  <h4>Ishmael Kotey Ashie</h4>
                  <p>Executive Director (Human Resource/ Finance Manager)</p>
                </div>
              </div>
              <div className="founder-card">
                <img
                  className="founder-img"
                  src={IMAGES.IMG_8}
                  alt="PlaceHolder"
                />
                <div className="card-description">
                  <h4>Mr. Paul Oklu</h4>
                  <p>Operations Supervisor (Projects Coordinator)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAreSection;
