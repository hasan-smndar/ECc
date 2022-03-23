import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "../../Copmonents/Title";
import Container from "../../Copmonents/Container";
import ProductsSide from "../../Copmonents/ProductsSide";
import style from "./Products.module.css";
import { useProducts } from "../../Context/useProducts";
const Products = () => {
  return (
    <div>
      <Container>
        <Title>our Products</Title>
        <div className={style.container}>
          <ProductsSide />
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Products;
