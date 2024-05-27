import { ReactNode } from "react";
import "./Home.css";

interface props {
  children: ReactNode;
  className?: string;
}

function PlainText({ children, className = "plain-text" }: props) {
  return (
    <>
      <div className={className}>
        <p>{children}</p>
      </div>
    </>
  );
}

export default PlainText;
