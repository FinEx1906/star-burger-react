import React from "react";
import { CardContainer, CardImg } from ".";
import { FoodName, FoodNameSection } from "../BottomNavbar";

const FoodCard = () => {
  return (
    <>
      <CardContainer className="card my-2 border-0">
        <CardImg className="card-img">
          <img
            className="card-img-top img-fluid"
            src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"
            alt=""
          />
        </CardImg>
        <FoodNameSection className="my-2">
          <FoodName>Pitsali burger, qo'shimcha coca-cola</FoodName>
        </FoodNameSection>
      </CardContainer>
    </>
  );
};

export default FoodCard;
