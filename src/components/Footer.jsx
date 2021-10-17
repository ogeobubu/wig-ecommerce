import styled from "styled-components";
import { Facebook, Instagram, Twitter, Pinterest } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2`
  flex: 1;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Hair Protege</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          explicabo, numquam ipsam. Rerum deserunt iusto saepe maiores dolorum,
          tempora beatae atque non vitae. Explicabo, consequuntur laboriosam
          accusantium architecto sequi atque.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{ color: "#fff" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{ color: "#fff" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter style={{ color: "#fff" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest style={{ color: "#fff" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right></Right>
    </Container>
  );
};

export default Footer;
