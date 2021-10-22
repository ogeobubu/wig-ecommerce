import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position absolute;top: 0;
left: 0;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  z-index: 2;
  height: 75%;
`;

const Icon = styled.div`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: #0001ff;
    transition: all 1s ease;
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.image} />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ fontSize: "30px", color: "white" }} />
        </Icon>
        <Icon>
          <SearchOutlined style={{ fontSize: "30px", color: "white" }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined
            style={{ fontSize: "30px", color: "white" }}
          />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
