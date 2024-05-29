import "./Button.css";

interface props {
  text: string;
  type: string;
  outline?: boolean;
  fullwidth?: boolean;
  onClick?: any;
}

const Button = ({
  text,
  type = "primary" || "secondary",
  outline = false,
  fullwidth = false,
  onClick,
}: props) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={
          "button-" +
          type +
          `${outline ? "-outline" : ""}` +
          `${fullwidth ? "-fullwidth" : ""}`
        }
      >
        {text}
      </button>
    </>
  );
};

export default Button;
