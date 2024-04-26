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

export const TyreCard = ({ id }) => {
  const tyre = fetchTyre(id);

  return (
    <StyeledCard>
      <div>
        <img src={tyre.imgSrc} alt="tyre img" />
        <h6>
          {tyre.brand + " " + tyre.model}{" "}
          {tyre.season === "winter" ? (
            <i className="fa fa-snowflake-o" aria-hidden="true" />
          ) : (
            <i className="fa fa-sun-o" aria-hidden="true" />
          )}
        </h6>
        <p>
          {tyre.size.width + "x" + tyre.size.height + "x" + tyre.size.radius}
        </p>
        <p>{tyre.price} руб.</p>
      </div>
    </StyeledCard>
  );
};
