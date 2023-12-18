import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 145px;
  z-index: -1;
  @media (min-width: 375px) {
    min-width: 165px;
  }
  @media (min-width: 425px) {
    max-width: 175px;
  }
`;
export const CardImg = styled.div`
  max-width: 140px;
  background-color: #e9e9e9;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 375px) {
    min-width: 165px;
  }
  @media (min-width: 425px) {
    max-width: 175px;
  }
`;
export const OrderDeliver = styled.div`
  background: #ffff006b;
  padding: 2.5px;
  border-radius: 3px;
  margin: 0;
`;
export const DeliverContentt = styled.span`
  letter-spacing: -1px;
  font-size: 15px;
`;
export const ExportOrder = styled.div``;
export const OrderPriceContainer = styled.div``;
export const OrderPrice = styled.p`
  margin: 0;
  font-size: 13px;
`;
export const OrderButton = styled.button`
  border: 1px solid #0000007d;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
