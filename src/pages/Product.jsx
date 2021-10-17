import styled from "styled-components";
import luxuryBlone from "../assets/luxury-blone.jpeg";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { Remove, Add } from "@material-ui/icons";

const Container = styled.div``;
const Section = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  obeject-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Section>
        <ImageContainer>
          <Image src={luxuryBlone} />
        </ImageContainer>
        <InfoContainer>
          <Title>Blonde Yellow Wig: Human Hair For Women</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            deserunt voluptatem, deleniti et, perferendis sed architecto. Qui
            aspernatur itaque quos tempore, porro inventore nulla non maxime,
            nam in est architecto.
          </Description>
          <Price>#1000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="grey"></FilterColor>
            </Filter>
            <FilterTitle>Length</FilterTitle>
            <FilterLength>
              <FilterLengthOption>5 inches</FilterLengthOption>
              <FilterLengthOption>7 inches</FilterLengthOption>
              <FilterLengthOption>10 inches</FilterLengthOption>
              <FilterLengthOption>15 inches</FilterLengthOption>
            </FilterLength>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
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
