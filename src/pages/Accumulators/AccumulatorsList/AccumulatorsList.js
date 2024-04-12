import styled from "styled-components";
import { AccumCard } from "./AccumCard/AccumCard";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AccumulatorsList = ({ accumList }) => {
  return (
    <StyledTyresCatalog>
      {accumList.map((el) => (
        <AccumCard
          title={el.brand + " " + el.model}
          accumParams={el.length + "x" + el.width + "x" + el.height}
          price={el.price}
          imgSrc="https://pngimg.com/uploads/automotive_battery/automotive_battery_PNG12100.png"
        />
      ))}
    </StyledTyresCatalog>
  );
};
