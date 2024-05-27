import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import IMAGES from "../../../assets/images/Images";
import "./reuse/Home.css";
import SubHeaderText from "./reuse/SubHeaderText";
import HeaderText from "./reuse/HeaderText";
import Button from "../../buttons/Button";

interface Dispenser {
  name: string;
  active: boolean;
  description: string;
}

const OurDispensersCarouselSection = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([
    {
      name: IMAGES.SMARTLINE_L_HOSE,
      active: false,
      description: "Smartline L-Hose",
    },
    { name: IMAGES.SMARTLINE_H, active: false, description: "Smartline H" },
    {
      name: IMAGES.SMARTLINE_R,
      active: true,
      description: "Smartline R",
    },
    { name: IMAGES.SMARTLINE_C, active: false, description: "Smartline C" },
    {
      name: IMAGES.SMARTLINE_L,
      active: false,
      description: "Smartline L",
    },
    {
      name: IMAGES.SMARTLINE_LX,
      active: false,
      description: "Smartline LX",
    },
  ]);

  const middleIndex = Math.floor(dispensers.length / 2); // Calculate the index of the middle element
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Initial active index set to middle element
  const [currentDisplayName, setCurrentDisplayName] = useState<string>(
    dispensers[2].description
  );

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? dispensers.length - 1 : currentIndex - 1;
    setDispensers(updateDispensers(currentIndex, newIndex));
    setCurrentDisplayName(dispensers[newIndex].description);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === dispensers.length - 1 ? 0 : currentIndex + 1;
    setDispensers(updateDispensers(currentIndex, newIndex));
    setCurrentDisplayName(dispensers[newIndex].description);
    setCurrentIndex(newIndex);
  };

  const updateDispensers = (_prevIndex: number, newIndex: number) => {
    return dispensers.map((dispenser, index) => ({
      ...dispenser,
      active: index === newIndex,
    }));
  };

  const getTranslationValue = (index: number) => {
    if (isMobileScreen()) {
      // Return translation values for mobile screens
      if (index === middleIndex - 2) return "100%";
      if (index === middleIndex - 1) return "70%";
      if (index === middleIndex) return "0%";
      if (index === middleIndex + 1) return "-60%";
      if (index === middleIndex + 2) return "-130%";
    } else {
      // Return translation values for non-mobile screens
      if (index === middleIndex - 3) return "100%";
      if (index === middleIndex - 2) return "60%";
      if (index === middleIndex - 1) return "20%";
      if (index === middleIndex) return "-20%";
      if (index === middleIndex + 1) return "-60%";
      if (index === middleIndex + 2) return "-100%";
    }
    return "0%";
  };

  const isMobileScreen = () => {
    // Custom function to check if screen size is mobile
    const screenWidth = window.innerWidth;
    return screenWidth <= 768; // Example threshold for mobile screens
  };

  return (
    <>
      <section className="odc-section">
        <div className="odc-headers">
          <SubHeaderText text="Smartline Dispensers Catalogue" />
          <HeaderText text="Our Dispensers" />
        </div>
        <div className="dispenser-name">
          <h3 className="disp-name">{currentDisplayName}</h3>
        </div>
        <div className="carousel">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(${getTranslationValue(currentIndex)})`,
            }}
          >
            {dispensers.map((dispenser, index) => (
              <div key={index} className="dispenser-name-image">
                <div
                  className={
                    dispenser.active ? "dispenser-active" : "dispenser"
                  }
                >
                  <img
                    className="carousel-image"
                    src={dispenser.name}
                    alt="PlaceHolder"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="buttons-toggle-carousel">
            <div className="button-prev" onClick={handlePrev}>
              <FaArrowCircleLeft size={"32"} />
            </div>
            <div className="button-next" onClick={handleNext}>
              <FaArrowCircleRight size={"32"} />
            </div>
          </div>
          <div className="odc-button">
            <Button text="Order Now" type="primary" fullwidth={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurDispensersCarouselSection;
