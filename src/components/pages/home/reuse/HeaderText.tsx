import "./Home.css";

interface props {
  text: string;
  styling?: boolean;
}

function HeaderText({ text, styling = false }: props) {
  return (
    <>
      <div className={`header-text ${styling ? "styled" : ""}`}>{text}</div>
    </>
  );
}

export default HeaderText;
