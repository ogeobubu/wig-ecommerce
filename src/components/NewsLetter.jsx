import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 1.3rem;
`;
const Description = styled.p`
  font-size: 25px;
  margin-bottom: 1.3rem;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: white;
  display: flex;
  justify-center: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: teal;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send style={{ color: "white" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
