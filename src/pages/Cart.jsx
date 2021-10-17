import styled from "styled-components";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer";
import luxuryBlone from "../assets/luxury-blone.jpeg";
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../media";

const Container = styled.div``;
const Section = styled.section`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductLength = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px",
  })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Section>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={luxuryBlone} />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    Blonde Yellow Wig: Human Hair For Women
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    123456789
                  </ProductId>
                  <ProductColor color="brown" />
                  <ProductLength>
                    <b>Length:</b> 10 inches
                  </ProductLength>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>#1000</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src={luxuryBlone} />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    Blonde Yellow Wig: Human Hair For Women
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    123456789
                  </ProductId>
                  <ProductColor color="brown" />
                  <ProductLength>
                    <b>Length:</b> 10 inches
                  </ProductLength>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>#1000</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src={luxuryBlone} />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    Blonde Yellow Wig: Human Hair For Women
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    123456789
                  </ProductId>
                  <ProductColor color="brown" />
                  <ProductLength>
                    <b>Length:</b> 10 inches
                  </ProductLength>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>#1000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>#100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>#200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>#-30.95</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>#150</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT</SummaryButton>
          </Summary>
        </Bottom>
      </Section>
      <Footer />
    </Container>
  );
};

export default Cart;
