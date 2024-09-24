import { Card } from "../Card/Card";
import { Container, StyledProductList } from "../Styles/Styles";

export const ProductsList = ({ productsList, type }) => {
  return (
    <Container>
      <StyledProductList>
        {productsList?.map((product) => {
          return <Card product={product} key={product._id} type={type} />;
        })}
      </StyledProductList>
    </Container>
  );
};
