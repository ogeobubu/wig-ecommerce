import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), pink);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Section>
      <Container>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Don't have an account? Sign up here today for FREE</Link>
        </Form>
      </Container>
    </Section>
  );
};

export default Login;
