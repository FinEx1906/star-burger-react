import React from "react";
import { CarouselImage } from ".";

const Adsense = () => {
  const getImage = {
    image:
      "https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg",
    error: "status error",
  };
  return (
    <div className="ads-container my-3">
      <CarouselImage
        className="img-fluid"
        src={getImage.image}
        alt={getImage.error}
      />
    </div>
  );
};

export default Adsense;
