import React from "react";
import { Link } from "react-router-dom";
import {
  DNavbar,
  DNavbarLocation,
  DNavbarLocationBorder,
  DNavbarLocationIcon,
  DNavbarLocationText,
  DNavbarLogo,
  DNavbarLogoImage,
  DNavbarNotification,
  DNavbarNotificationBorder,
  DNavbarNotificationLink,
  MNavbar,
  MNavbarInput,
  MNavbarInputIcon,
} from "./index";
import Logo from "../../images/Brand.svg";
import Location from "../../images/icon/location.svg";
const NavbarMenu = () => {
  return (
    <>
      {/* <div className="navbar">
        <div className="logo">1</div>
        <div className="location">2</div>
        <div className="notification">3</div>
      </div> */}
      {/* <div className="input-search-item">
        <input type="text" placeholder="Taom, mahsulotlarni izlang" />
      </div> */}
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
            </DNavbarNotificationBorder>
          </DNavbarNotificationLink>
          <DNavbarNotificationLink>
            <DNavbarNotificationBorder>
              <i className="fa-regular fa-user"></i>
            </DNavbarNotificationBorder>
          </DNavbarNotificationLink>
        </DNavbarNotification>
      </DNavbar>
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
