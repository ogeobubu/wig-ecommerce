import { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import woman from "../assets/woman.jpg";
import styled from "styled-components";
import { sliderData } from "../data";
import { mobile, tablet } from "../media";

const Section = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  ${mobile({
    display: "none",
  })}
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
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  transform: translate(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  position: relative;
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
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  width: 26%;
  color: ${(props) => props.textColor};
  left: 5rem;

  ${tablet({
    width: "60%",
  })}
`;

const InfoTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;
  ${tablet({
    fontSize: "40px",
  })}
`;

const InfoDescription = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
  ${tablet({
    fontSize: "20px",
  })}
`;

const InfoButton = styled.button`
  padding: 10px 28px;
  background: transparent;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
  cursor: pointer;
  color: {$props => props.color};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Section>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Container slideIndex={slideIndex}>
        {sliderData.map((slideDataInfo) => (
          <Slide key={slideDataInfo.id}>
            <ImageContainer>
              <Image src={slideDataInfo.image} />
            </ImageContainer>
            <InfoContainer
              textColor={
                slideIndex === 1 ? "#000" : slideIndex === 2 ? "#000" : "#fff"
              }
            >
              <InfoTitle>{slideDataInfo.title}</InfoTitle>
              <InfoDescription>{slideDataInfo.description}</InfoDescription>
              <InfoButton
                textColor={
                  slideIndex === 1 ? "#000" : slideIndex === 2 ? "#000" : "#fff"
                }
              >
                Get More
              </InfoButton>
            </InfoContainer>
          </Slide>
        ))}
      </Container>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Section>
  );
};

export default Slider;
