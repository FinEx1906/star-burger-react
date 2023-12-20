import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DNavbar,
  DNavbarInput,
  DNavbarInputIcon,
  DNavbarLocation,
  DNavbarLocationBorder,
  DNavbarLocationIcon,
  DNavbarLocationText,
  DNavbarLogo,
  DNavbarLogoImage,
  DNavbarNotification,
  DNavbarNotificationBorder,
  DNavbarNotificationLink,
  FormContainer,
  MNavbar,
  MNavbarInput,
  MNavbarInputIcon,
  NavbarContainer,
} from "./index";
import Logo from "../../images/Brand.svg";
import Location from "../../images/icon/location.svg";
import FoodCard from "../FoodCard/Card";
// import FoodCard from "../FoodCard/Card";

const NavbarMenu = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  const cardCountProps = () => {
    setNotificationCount(notificationCount + 1);
  };
  console.log(notificationCount);
  return (
    <>
      <NavbarContainer>
        <DNavbar className="navbar">
          <DNavbarLogo>
            <DNavbarLogoImage src={Logo} alt="Error Logo" />
          </DNavbarLogo>
          <DNavbarLocation>
            <DNavbarLocationBorder>
              <DNavbarLocationIcon src={Location} alt="Error Location Icon" />
              <DNavbarLocationText>Beruniy ko’chasi, 5</DNavbarLocationText>
            </DNavbarLocationBorder>
          </DNavbarLocation>
          <DNavbarNotification className="d-flex align-items-center">
            <DNavbarNotificationLink>
              <DNavbarNotificationBorder>
                <i className="fa-regular fa-heart"></i>
              </DNavbarNotificationBorder>
            </DNavbarNotificationLink>
            <DNavbarNotificationLink>
              <DNavbarNotificationBorder>
                <i className="fa fa-cart-shopping"></i>
                <span
                  className="badge text-light position-absolute"
                  style={{
                    background: "#4e40a1",
                    transform: "translate(21px, -15px)",
                    borderRadius: "100%",
                    width: "21px",
                    height: "21px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    justifyContent: "center",
                  }}
                >
                  {notificationCount}
                </span>
              </DNavbarNotificationBorder>
            </DNavbarNotificationLink>

            {/* <FoodCard cardCountProps={cardCountProps} /> */}

            <DNavbarNotificationLink to={"/login"}>
              <DNavbarNotificationBorder>
                <i className="fa-regular fa-user"></i>
              </DNavbarNotificationBorder>
            </DNavbarNotificationLink>
          </DNavbarNotification>
        </DNavbar>
        <FormContainer className="my-3">
          <DNavbarInputIcon htmlFor="icon">
            <i
              className="fa fa-search"
              style={{ color: "rgb(73 80 87 / 70%)" }}
            ></i>
          </DNavbarInputIcon>
          <DNavbarInput
            className="w-100"
            type="search"
            placeholder="Taom, mahsulotlarni izlang"
          />
        </FormContainer>
      </NavbarContainer>
      <MNavbar className="my-2">
        <MNavbarInputIcon htmlFor="icon">
          <i
            className="fa fa-search"
            style={{ color: "rgb(73 80 87 / 70%)" }}
          ></i>
        </MNavbarInputIcon>
        <MNavbarInput
          className="w-100"
          type="search"
          placeholder="Taom, mahsulotlarni izlang"
        />
      </MNavbar>
    </>
  );
};

export default NavbarMenu;
