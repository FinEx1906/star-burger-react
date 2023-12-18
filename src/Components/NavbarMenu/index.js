import { Link } from "react-router-dom";
import styled from "styled-components";

export const DNavbar = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: flex;
  }
`;
export const DNavbarLogo = styled.div`
  max-widht: 100%;
`;
export const DNavbarLogoImage = styled.img``;
export const DNavbarLocation = styled.div``;
export const DNavbarLocationBorder = styled.div`
  border-radius: 16px;
  background: #dfdcf5;
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const DNavbarLocationIcon = styled.img``;
export const DNavbarLocationText = styled.span`
  color: #4e40a1;
  font-size: 16px;
  font-weight: 400;
`;
export const DNavbarNotification = styled.div``;
export const DNavbarNotificationBorder = styled.div`
  background: #dfdcf5;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: #4e40a1;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DNavbarNotificationLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
`;
export const MNavbar = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
export const MNavbarInput = styled.input`
  padding: 0.375rem 2.5rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: #495057;
  background-color: #e9ecef;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
export const MNavbarInputIcon = styled.label`
  position: absolute;
  transform: translate(10px, 6.5px);
`;
