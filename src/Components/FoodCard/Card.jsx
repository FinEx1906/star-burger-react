import React from "react";
import {
  CardContainer,
  CardImg,
  DeliverContentt,
  ExportOrder,
  OrderButton,
  OrderDeliver,
  OrderPrice,
  OrderPriceContainer,
} from ".";
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
        <OrderDeliver>
          <DeliverContentt>Yetkazish: 3 000 so'm</DeliverContentt>
        </OrderDeliver>
        <ExportOrder className="d-flex align-items-center justify-content-between my-2">
          <OrderPriceContainer>
            <OrderPrice className="opacity-50">
              <strike>17 000 so'm</strike>
            </OrderPrice>
            <OrderPrice>15 000 so'm</OrderPrice>
          </OrderPriceContainer>
          <OrderButton className="outline-0 bg-body fs-1">
            <i style={{ color: "#000000bd" }} className="bx bx-store"></i>
          </OrderButton>
        </ExportOrder>
      </CardContainer>
    </>
  );
};

export default FoodCard;
