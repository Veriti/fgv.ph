import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { withRouter } from "next/router";
import Link from "next/link";
import { Container } from "./Shared";

export default withRouter(({ fields, products, router }) => {
  const category = fields.find(cat => cat.slug === router.query.field_id);
  const categoryProducts = products.filter(
    product => product.category === category.slug
  );

  return (
    <List>
      <Container>
        <ListHeader>
          <h2>FGV Recommends</h2>
        </ListHeader>
        <Products>
          {categoryProducts.map(product => (
            <CatProduct key={product.id} product={product} />
          ))}
        </Products>
        
      </Container>
    </List>
  );
});

const CatProduct = ({ product }) => {
  return (
    <Product>
      <ProductHeader image={product.thumbnail}>
        <h4>{product.title}</h4>
      </ProductHeader>
      <ProductBody dangerouslySetInnerHTML={{ __html: product.excerpt }} />
      <ProductFooter>
        <Link
          href={`/page?field=${product.category}&product=${product.slug}`}
          passHref
        >
          <ButtonText>View More</ButtonText>
        </Link>
      </ProductFooter>
    </Product>
  );
};

const List = styled.div`
  background: #cecece;
`;
const ListHeader = styled.header`
  text-align: center;
  overflow: auto;
  color: #333;

  &:after {
    content: "";
    width: 50px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background: green;
    margin-bottom: 40px;
  }
`;
const ProductStyles = css`
  background: white;
  transition: transform 0.2s;
  backface-visibility: hidden;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-basis: 32%;
  }

  &:hover {
    transform: translateY(-4px);
  }
`
const Products = styled.div`
  overflow: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &:after {
    content: "";
    ${ProductStyles}
    height: 0;
    margin-bottom: 0;
  }
`;
const Product = styled.div`
  ${ProductStyles}
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const ProductHeader = styled.div`
  position: relative;
  background-color: #173e17;
  background-image: ${p => (p.image ? `url(${p.image})` : `none`)};
  background-size: cover;

  & h4 {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    margin: 0;
    font-size: 20px;
    box-sizing: border-box;
  }

  &:before {
    content: "";
    padding-bottom: 90%;
    width: 100%;
    display: block;
  }
`;
const ProductBody = styled.div`
  padding: 4px 20px;
  color: #333;
  font-size: 14px;
  flex: 1 0 auto;
`;
const ProductFooter = styled.div`
  padding: 0 20px;
  text-align: right;

  &:before {
    content: "";
    display: block;
    top: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
  }
`;
const ButtonText = styled.a`
  color: green;
  font-weight: bold;
  font-size: 13px;
  margin: 16px 0;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: inherit;
  }
`;
