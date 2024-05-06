import styled from "styled-components";
import { Card } from "../../../components/Card/Card";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AccumulatorsList = ({ accumList }) => {
  return (
    <StyledTyresCatalog>
      {accumList.map(({ id, brand, model, length, width, height, price }) => (
        <Card
          key={id}
          id={id}
          title={brand + " " + model}
          params={length + "x" + width + "x" + height}
          price={price}
          imgSrc="https://pngimg.com/uploads/automotive_battery/automotive_battery_PNG12100.png"
        />
      ))}
    </StyledTyresCatalog>
  );
};
