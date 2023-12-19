import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarBottom } from "./index";

const BottomNavbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderButton = (buttonName, iconClass, label, path, badge) => (
    <Link
      to={path}
      onClick={() => handleButtonClick(buttonName)}
      className={`buttons text-dark ${
        activeButton === buttonName ? "text-danger" : "opacity-50"
      } d-flex align-items-center justify-content-center flex-column text-decoration-none`}
    >
      <button className="border-0 outline-0 bg-body">
        <i className={`bx ${iconClass} fs-1`}></i>
      </button>
      <section>
        <span style={{ fontSize: "15px", letterSpacing: "-1px" }}>{label}</span>
        {badge && (
          <span
            className="badge text-light position-absolute"
            style={{
              background: "black",
              transform: "translate(21px, -68px)",
              borderRadius: "100%",
              width: "21px",
              height: "21px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {badge}
          </span>
        )}
      </section>
    </Link>
  );

  return (
    <NavbarBottom>
      <div className="navbar w-100 p-1 py-3">
        {renderButton("home", "bx-home-circle", "Bosh Sahifa", "/")}
        {renderButton("search", "bx-search-alt", "Katalog", "/katalog")}
        {renderButton("bag", "bx-shopping-bag", "Savat", "/savat", 14)}{" "}
        {renderButton("heart", "bx-heart-circle", "Tanlangan", "/tanlangan")}
        {renderButton("user", "bx-user-circle", "Kabinet", "/kabinet")}
      </div>
    </NavbarBottom>
  );
};

export default BottomNavbar;
