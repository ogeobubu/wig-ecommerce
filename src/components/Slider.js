import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import woman from "../assets/woman.jpg";
import styled from "styled-components";

const Section = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4366a7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  left: 5rem;
  width: 26%;
  color: white;
`;

const InfoTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
`;

const InfoButton = styled.button`
  padding: 10px 28px;
  background: transparent;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Section>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Container>
        <Slide>
          <ImageContainer>
            <Image src={woman} />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Hello World! How are you guys doing?</InfoTitle>
            <InfoDescription>Lorem ipsum dolor sit amet.</InfoDescription>
            <InfoButton>Get More</InfoButton>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImageContainer>
            <Image src={woman} />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Hello World! How are you guys doing?</InfoTitle>
            <InfoDescription>Lorem ipsum dolor sit amet.</InfoDescription>
            <InfoButton>Get More</InfoButton>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImageContainer>
            <Image src={woman} />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Hello World! How are you guys doing?</InfoTitle>
            <InfoDescription>Lorem ipsum dolor sit amet.</InfoDescription>
            <InfoButton>Get More</InfoButton>
          </InfoContainer>
        </Slide>
      </Container>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Section>
  );
};

export default Slider;
