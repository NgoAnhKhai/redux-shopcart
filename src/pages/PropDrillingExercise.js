import React, { useState } from "react";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import WrapperBox from "../components/WrapperBox";

const RootComponent = (props) => {
  const [products] = useState([
    { id: "p1", title: "Product 1", price: 1999 },
    { id: "p2", title: "Product 2", price: 999 },
  ]);

  const [cart, setCart] = useState({
    products: [
      { id: "p1", title: "Product 1", price: 0, qty: 0 },
      { id: "p2", title: "Product 2", price: 0, qty: 0 },
    ],
    totalPrice: 0,
  });

  const addProductToCart = (product) => {
    const updatedCart = { ...cart };
    const existingProduct = updatedCart.products.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
      existingProduct.qty += 1;
      existingProduct.price = existingProduct.qty * product.price;
    }

    updatedCart.totalPrice = updatedCart.products.reduce(
      (total, p) => total + p.price,
      0
    );
    setCart(updatedCart);
  };

  const removeProductFromCart = (product) => {
    const updatedCart = { ...cart };
    const existingProduct = updatedCart.products.find(
      (p) => p.id === product.id
    );

    if (existingProduct && existingProduct.qty > 0) {
      existingProduct.qty -= 1;
      existingProduct.price = existingProduct.qty * product.price;
    }

    updatedCart.totalPrice = updatedCart.products.reduce(
      (total, p) => total + p.price,
      0
    );
    setCart(updatedCart);
  };

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        RootComponent {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="state"
          src={{ products, cart }}
          collapsed={true}
          theme="monokai"
          displayDataTypes={true}
          displayObjectSize={true}
        />
      </Box>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <ProductPage
            products={products}
            addProduct={addProductToCart}
            removeProduct={removeProductFromCart}
          />
        </Grid>
        <Grid item md={6}>
          <CartPage cart={cart} />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = ({ products, addProduct, removeProduct }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Product Page
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item sm={6}>
          <ProductOne
            product={products[0]}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        </Grid>
        <Grid item sm={6}>
          <ProductTwo
            product={products[1]}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = ({ product, addProduct, removeProduct }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={() => addProduct(product)}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={() => removeProduct(product)}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductTwo = ({ product, addProduct, removeProduct }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={() => addProduct(product)}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={() => removeProduct(product)}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = ({ cart }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Cart Page
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <CartProductOne product={cart.products[0]} />
        </Grid>
        <Grid item md={6}>
          <CartProductTwo product={cart.products[1]} />
        </Grid>
        <Grid item md={12}>
          <Typography p="0.5rem" variant="h5">
            Total Price: 💵 {cart.totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = ({ product }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 1
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const CartProductTwo = ({ product }) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 2
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const PropDrillingExercise = () => {
  return (
    <Container>
      <br />
      <Typography p="0.5rem" variant="h6">
        How to add products to the cart?
      </Typography>
      <br />
      <RootComponent />
    </Container>
  );
};

export default PropDrillingExercise;
