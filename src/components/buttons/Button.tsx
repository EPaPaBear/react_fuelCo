import { Link } from "react-router-dom";
import "./Button.css";

interface props {
  text: string;
  type: string;
  outline?: boolean;
  fullwidth?: boolean;
  onClick?: any;
  disabled?: any;
}

const Button = ({
  text,
  type = "primary" || "secondary",
  outline = false,
  fullwidth = false,
  onClick,
  disabled,
}: props) => {
  return (
    <>
      <Link to={"/contact"} className="link-full">
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={
            "button-" +
            type +
            `${outline ? "-outline" : ""}` +
            `${fullwidth ? "-fullwidth" : ""}`
          }
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
