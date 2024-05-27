import SubHeaderText from "./reuse/SubHeaderText";
import HeaderText from "./reuse/HeaderText";
import PlainText from "./reuse/PlainText";
import Button from "../../buttons/Button";
import IMAGES from "../../../assets/images/Images";
import "./reuse/Home.css";

function WhatWeOfferSection() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-img"
          src={IMAGES.PH_VISUAL_PRODUCTINFO}
          alt="Product Demo Dispenser"
        />
        <div className="hero-text">
          <SubHeaderText text="What We Offer" />
          <HeaderText text="Synopsis" />
          <PlainText>
            Introducing the <strong>Smartline Series</strong>. <br /> Elevate
            your fuel station experience with our cutting-edge Smartline
            dispensers. Designed for precision, safety, and style, these
            dispensers seamlessly blend form and function. From the sleek
            Smartline L to the versatile Smartline L-X, our series caters to all
            your fueling needs. Explore customization options for a branded
            touch. Discover innovation at the pump, choose Smartline!
          </PlainText>
          <div className="cta-what-we-offer">
            <Button text="Order Now" type="primary" fullwidth={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeOfferSection;
