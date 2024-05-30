import { FaArrowLeft } from "react-icons/fa6";
import FeaturesHero from "../resuse/FeaturesHero";
import SummaryViewSection from "../resuse/SummaryViewSection";
import IMAGES from "../../../../assets/Images";
import SummaryContent from "../resuse/SummaryContent";
import Button from "../../../buttons/Button";
import "../resuse/Dispensers.css";
import FeaturesContent from "../resuse/FeaturesContent";

function DispenserPageLayout() {
  const featuresAsList: string[] = ["List of features go here"];
  return (
    <>
      <div className="dispenser-page-container">
        <div className="back-arrow">
          <FaArrowLeft />
        </div>
        <SummaryViewSection>
          <SummaryContent
            headerText="Header Text"
            paragraphText="Lorem Ipsum Dolor Sit Amet ..."
            imagePath={IMAGES.IMG_1}
          />
          <SummaryContent
            headerText="Header Text"
            paragraphText="Lorem Ipsum Dolor Sit Amet ..."
            imagePath={IMAGES.IMG_1}
          />
          <Button text="Order Now" type="primary" fullwidth={true} />
        </SummaryViewSection>
        <FeaturesHero heroImagePath={IMAGES.SMARTLINE_R}>
          <FeaturesContent subHeaderText="Subheader Text" headerText="Features">
            <p>
              Designed, developed and tested by Mepsan R&D engineers. Smartline
              R is one of the most common dispensers out of the Smartline
              series.
            </p>
            <ul>
              {featuresAsList.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </FeaturesContent>
        </FeaturesHero>
      </div>
    </>
  );
}

export default DispenserPageLayout;
