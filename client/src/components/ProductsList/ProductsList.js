import { Card } from "../Card/Card";
import { Container, StyledProductList } from "../Styles/mainStyeles";
export const ProductsList = ({ productsList, type }) => {
  return (
    <Container>
      <StyledProductList>
        {productsList.length > 0 ? (
          productsList?.map((product) => {
            return <Card product={product} key={product._id} type={type} />;
          })
        ) : (
          <p>Список пуст.</p>
        )}
      </StyledProductList>
    </Container>
  );
};
