import { FaArrowLeft } from "react-icons/fa6";
import FeaturesHero from "../resuse/FeaturesHero";
import SummaryViewSection from "../resuse/SummaryViewSection";
import IMAGES from "../../../../assets/images/Images";
import SummaryContent from "../resuse/SummaryContent";
import Button from "../../../buttons/Button";
import "../resuse/Dispensers.css";
import FeaturesContent from "../resuse/FeaturesContent";
import { Link } from "react-router-dom";
import { useGLTF } from "@react-three/drei";

function SmartlineL() {
  const { scene } = useGLTF("/models/test/smartlineL.glb");
  const featuresAsList: string[] = [
    "Offers various flow rate options - 40, 80, 120 lt/min",
    "Cladded Frame System enabling easy-replacement at the field",
    "Corrosion resistant body made of robust materials",
    "Accommodates POS-Cash Registers",
    "LCD screen system which show error codes, program menu codes and instructions",
    "MID and ATEX certificated hydraulic units",
    "Hose retraction mechanism",
    "Ad Blue, LPG, CNG dispensers in same case design",
    "Vapor recovery system & Monophase motor option for suction systems",
    "PID data backup and security systems",
    "Low leakage risk by modular hydraulic system design and advanced seal system",
  ];
  return (
    <>
      <div className="dispenser-page-container">
        <div className="back-arrow">
          <Link to="/dispensers">
            <FaArrowLeft size={"32"} />
          </Link>
        </div>
        <SummaryViewSection threeDModel={scene}>
          <SummaryContent
            headerText="Sales Screen"
            paragraphText="New generation backlight sales screen transmits not only sales information to customers but also station information and any other message on the lower section of the screen."
            imagePath={IMAGES.SMARTLINE_L_SCREEN}
          />
          <SummaryContent
            headerText="Design"
            paragraphText="Dispensers are distinguished with their single part hydraulic section, front plastic panel, door design, cladded column, large corporate cladding area, plastic pediment and large label area."
            imagePath={IMAGES.SMARTLINE_L_DESIGN}
          />
          <SummaryContent
            headerText="Payment Terminal"
            paragraphText="Dispensers enable customers to make payment over the dispenser with its self-service fueling option thus reducing waiting times and increasing customer-service throughput."
            imagePath={IMAGES.SMARTLINE_L_TERMINAL}
          />
          <Button text="Order Now" type="primary" fullwidth={true} />
        </SummaryViewSection>
        <FeaturesHero heroImagePath={IMAGES.SMARTLINE_L}>
          <FeaturesContent subHeaderText="Smartline L" headerText="Features">
            <p>
              Designed, developed and tested by Mepsan R&D engineers. Smartline
              L is one of the most common dispensers out of the Smartline
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

export default SmartlineL;
