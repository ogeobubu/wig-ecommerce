import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.key} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
