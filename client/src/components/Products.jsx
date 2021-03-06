import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
import { popularProduct } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (category) {
          const productsList = await axios.get(
            `http://localhost:5000/api/products/all?category=${category}`
          );
          setProducts(productsList.data.message);
        } else {
          const prodList = await axios.get(
            "http://localhost:5000/api/products/all"
          );
          setProducts(prodList.data.message);
        }
      } catch (error) {
        return console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((previous) =>
        [...previous].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "ascending") {
      setFilterProducts((previous) =>
        [...previous].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((previous) =>
        [...previous].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filterProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product key={product._id} product={product} />)}
    </Container>
  );
};

export default Products;
