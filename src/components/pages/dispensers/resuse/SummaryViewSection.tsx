import { ReactNode } from "react";
import "./Dispensers.css";

interface SummaryAnd3dView {
  children: ReactNode;
}

function SummaryViewSection({ children }: SummaryAnd3dView) {
  return (
    <section className="summary-3d-view">
      {/* <div className="threeD-view">
        <img src="" alt="" />
      </div> */}
      <div className="summary">{children}</div>
    </section>
  );
}

export default SummaryViewSection;
