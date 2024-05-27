interface DispenserCard {
  dispenserName: string;
  dispenserImagePath: string;
  altInfo?: string;
  className?: string;
}

function DispenserCards({
  dispenserName,
  dispenserImagePath,
  altInfo = "Image of a dispenser",
}: DispenserCard) {
  return (
    <>
      {/* <div className="dispenser-card"> */}
      <div className="dispenser-image">
        <img src={dispenserImagePath} alt={altInfo} />
      </div>
      <h4 className="dispenser-description-name">{dispenserName}</h4>
      {/* </div> */}
    </>
  );
}

export default DispenserCards;
