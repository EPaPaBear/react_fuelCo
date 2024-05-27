import "./Button.css";

interface props {
  text: string;
  type: string;
  outline?: boolean;
  fullwidth?: boolean;
}

const Button = ({
  text,
  type = "primary" || "secondary",
  outline = false,
  fullwidth = false,
}: props) => {
  return (
    <>
      <button
        type="button"
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
