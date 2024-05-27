import { ReactNode } from "react";
import Button from "../../../buttons/Button";
import SubHeaderText from "../../home/reuse/SubHeaderText";
import HeaderText from "../../home/reuse/HeaderText";

interface Features {
  children: ReactNode;
  subHeaderText: string;
  headerText: string;
}

function FeaturesContent({ children, headerText, subHeaderText }: Features) {
  return (
    <>
      <div className="features-subHeader">
        <SubHeaderText text={subHeaderText} />
      </div>
      <div className="features-header">
        <HeaderText text={headerText} />
      </div>
      <div className="features-bullets">{children}</div>
      <Button
        text="Order Now"
        type="primary"
        outline={true} /* fullwidth={true} */
      />
    </>
  );
}

export default FeaturesContent;
