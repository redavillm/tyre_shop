import styled from "styled-components";
import { Card } from "../../../components/Card/Card";
import { Link } from "react-router-dom";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const AccumulatorsList = ({ accumList }) => {
  return (
    <StyledTyresCatalog>
      {accumList.map((el) => (
        <Link to={`/accumulators/${el.id}`} key={el.id}>
          <Card
            title={el.brand + " " + el.model}
            params={el.length + "x" + el.width + "x" + el.height}
            price={el.price}
            imgSrc="https://pngimg.com/uploads/automotive_battery/automotive_battery_PNG12100.png"
          />
        </Link>
      ))}
    </StyledTyresCatalog>
  );
};
