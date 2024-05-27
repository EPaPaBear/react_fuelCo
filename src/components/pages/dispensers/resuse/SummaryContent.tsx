import "../resuse/Dispensers.css";

interface SummaryDescription {
  imagePath: string;
  headerText: string;
  paragraphText: string;
}

function SummaryContent({
  headerText,
  paragraphText,
  imagePath,
}: SummaryDescription) {
  return (
    <div className="summary-content-img">
      <div className="summary-image">
        <img src={imagePath} alt="Placeholder" />
      </div>
      <div className="summary-content-description">
        <h4>{headerText}</h4>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
}

export default SummaryContent;
