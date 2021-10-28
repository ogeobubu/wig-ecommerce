import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import luxuryBlone from "../assets/luxury-blone.jpeg";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement.jsx";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../media";

import { publicUse, privateUse } from "../api";

const Container = styled.div``;
const Section = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  obeject-fit: cover;
  ${mobile({
    height: "40vh",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 30px 0px;
  ${mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterLength = styled.select`
  margin-left: 20px;
  padding: 5px;
`;
const FilterLengthOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [length, setLength] = useState("");

  const handleClick = (action) => {
    if (action === "minus") {
      setQuantity(quantity <= 1 ? 1 : quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await publicUse.get(`/products/${id}`);
        setProduct(productData.data.message);
      } catch (error) {
        return console.log(error.message);
      }
    };
    getProduct();
  }, [id]);
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Section>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>#{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((colorItem, index) => (
                <FilterColor
                  color={colorItem}
                  key={index}
                  onClick={() => setColor(colorItem)}
                />
              ))}
            </Filter>
            <FilterTitle>Length</FilterTitle>
            <FilterLength onChange={(e) => setLength(e.target.value)}>
              {product.hairLength?.map((lengthItem, index) => (
                <FilterLengthOption key={index}>
                  {lengthItem} inches
                </FilterLengthOption>
              ))}
            </FilterLength>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("minus")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("add")}
              />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Section>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
