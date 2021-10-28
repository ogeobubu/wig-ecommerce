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
        const productsList = await axios.get(
          "http://localhost:5000/api/products/all"
        );
        console.log(productsList.data);
      } catch (error) {
        return console.log(error);
      }
    };
    getProducts();
  }, [category]);

  return (
    <Container>
      {popularProduct.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
