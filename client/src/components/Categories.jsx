import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile, tablet, largeTab } from "../media";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
  })};
  ${tablet({
    display: "grid",
    gridTemplateColumn: "repeat(2, 1fr)",
  })}
  ${largeTab({
    display: "grid",
    gridTemplateColumn: "repeat(2, 1fr)",
  })}
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
