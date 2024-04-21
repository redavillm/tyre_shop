import styled from "styled-components";
import { fetchTyre } from "../../../../scripts";

const StyeledCard = styled.span`
  width: 260px;
  margin: 20px 10px;
  background-color: #aec670;
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);

  h6 {
    margin: 5px 5px;
    color: #1a2902;
  }

  p {
    font-size: 18px;
    margin: 5px 5px;
    color: #344c11;
  }

  img {
    width: 180px;
  }

  &:hover {
    box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
  }

  & i {
    color: white;
  }
`;

export const TyreCard = ({ id, isWinterIcon }) => {
  const { brand, model, width, height, radius, price, imgSrc } = fetchTyre(id);

  return (
    <StyeledCard>
      <div>
        <img src={imgSrc} alt="tyre img" />
        <h6>
          {brand + " " + model}{" "}
          {isWinterIcon ? (
            <i className="fa fa-snowflake-o" aria-hidden="true" />
          ) : (
            <i className="fa fa-sun-o" aria-hidden="true" />
          )}
        </h6>
        <p>{width + "x" + height + "x" + radius}</p>
        <p>{price} руб.</p>
      </div>
    </StyeledCard>
  );
};
