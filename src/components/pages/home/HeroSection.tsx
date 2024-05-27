import SubHeaderText from "./reuse/SubHeaderText";
import HeaderText from "./reuse/HeaderText";
import PlainText from "./reuse/PlainText";
import Button from "../../buttons/Button";
import IMAGES from "../../../assets/images/Images";
import "./reuse/Home.css";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <SubHeaderText text="Smartline Dispensers" />
          <HeaderText text="Smart, Durable" styling={true} />
          <PlainText>
            The ultimate solution for your fueling needs! With its sleek design
            and advanced features, Smartline dispensers are the perfect choice
            for businesses looking to streamline their operations and provide
            their customers with a top-notch fueling experience. From durable
            stainless-steel constructon to customizable options, the Smartline
            series offers everything you need to take your business to the next
            level.
          </PlainText>
          <div className="cta">
            <Button text="Order Now" type="primary" />
            <Button text="Explore Dispensers" type="primary" outline={true} />
          </div>
        </div>
        <img
          className="hero-img"
          src={IMAGES.PH_VISUAL_HEADLINE}
          alt="Hero Image"
        />
      </section>
    </>
  );
}

export default HeroSection;
