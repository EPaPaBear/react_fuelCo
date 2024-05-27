import "./dispensers/resuse/Dispensers.css";
import IMAGES from "../../assets/images/Images";
import HeaderText from "./home/reuse/HeaderText";
import { Link, useLocation } from "react-router-dom";
import DispenserCards from "./dispensers/resuse/DispenserCards";
import PlainText from "./home/reuse/PlainText";

interface DispenserInformation {
  dispenserName: string;
  dispenserImagePath: string;
  page: string;
}

function Dispensers() {
  const location = useLocation().pathname;
  const availableDispensers: DispenserInformation[] = [
    {
      dispenserName: "Smartline L-Hose",
      dispenserImagePath: IMAGES.SMARTLINE_L_HOSE,
      page: "",
    },
    {
      dispenserName: "Smartline H",
      dispenserImagePath: IMAGES.SMARTLINE_H,
      page: location + "/smartline_h",
    },
    {
      dispenserName: "Smartline R",
      dispenserImagePath: IMAGES.SMARTLINE_R,
      page: location + "/smartline_r",
    },
    {
      dispenserName: "Smartline C",
      dispenserImagePath: IMAGES.SMARTLINE_C,
      page: location + "/smartline_c",
    },
    {
      dispenserName: "Smartline L",
      dispenserImagePath: IMAGES.SMARTLINE_L,
      page: location + "/smartline_l",
    },
    {
      dispenserName: "Smartline LX",
      dispenserImagePath: IMAGES.SMARTLINE_LX,
      page: location + "/smartline_lx",
    },
  ];

  return (
    <>
      <section className="dispensers-section">
        <div className="dispensers-header">
          <HeaderText text="Dispensers Catalogue" />
        </div>
        <div className="dispensers-paragraph">
          <PlainText>
            Our catalogue of dispensers is ever-expanding. Peruse below to find
            a dispenser you may like. If you do not find a dispenser of your
            search or to your liking, we encourage you to contact us.
          </PlainText>
        </div>
        <div className="dispensers-container">
          {availableDispensers.map((dispenser, index) => (
            <Link key={index} className="dispenser-card" to={dispenser.page}>
              <DispenserCards
                dispenserName={dispenser.dispenserName}
                dispenserImagePath={dispenser.dispenserImagePath}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Dispensers;
