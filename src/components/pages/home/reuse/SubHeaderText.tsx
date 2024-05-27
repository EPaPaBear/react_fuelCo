import "./Home.css";

interface props {
  text: string;
  className?: string;
}

function SubHeaderText({ text, className = "subheader" }: props) {
  return (
    <>
      <div className={className}>{text}</div>
    </>
  );
}

export default SubHeaderText;
