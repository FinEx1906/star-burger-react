import styled from "styled-components";

export const BottomNavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111111 1;
  background-color: white;
`;
export const FoodNameSection = styled.div``;
export const FoodName = styled.p`
  font-family: sans-serif;
  letter-spacing: -0.8px;
  line-height: 1.2;
`;

export const NavbarBottom = styled.div`
  box-shadow: 0 0 10px -5px black;
  width: 100%;
  @media (min-width: 769px) {
    display: none;
  }
`;
