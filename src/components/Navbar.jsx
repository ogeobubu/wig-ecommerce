import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile, tablet } from "../media";

const Section = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({
    padding: "10px 0px",
  })};
  ${tablet({
    height: "100%",
  })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #ccc;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "12px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({
    flex: "2",
    justifyContent: "center",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "3px",
  })}
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Hair Protege</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Container>
    </Section>
  );
};

export default Navbar;
