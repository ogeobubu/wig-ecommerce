import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile, tablet } from "../media";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  console.log(sort);

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Wigs</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Colour</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="length" onChange={handleFilters}>
            <Option disabled>Length</Option>
            <Option>5 inches</Option>
            <Option>7 inches</Option>
            <Option>10 inches</Option>
            <Option>15 inches</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="ascending">Price (Ascending)</Option>
            <Option value="descending">Price (Descending)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={categoryName} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
