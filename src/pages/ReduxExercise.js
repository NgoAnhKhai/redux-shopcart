import React from "react";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import { useDispatch, useSelector } from "react-redux"; // Import thêm useSelector để lấy dữ liệu từ Redux
import { cartActions } from "../service/cart/slice";
import WrapperBox from "../components/WrapperBox";

const RootComponent = (props) => {
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
      <Grid container spacing={2} p="1rem">
        <Grid item sm={6} xs={12}>
          <ProductPage />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CartPage />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Product Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6} xs={12}>
          <ProductOne />
        </Grid>
        <Grid item md={6} xs={12}>
          <ProductTwo />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = (props) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Lấy tổng giá từ Redux

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Cart Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6} xs={12}>
          <CartProductOne />
        </Grid>
        <Grid item md={6} xs={12}>
          <CartProductTwo />
        </Grid>
        <Grid item xs={12}>
          <Typography p="0.5rem" variant="h5">
            Total Price: 💵 {totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = (props) => {
  const product = useSelector((state) => state.product[0]); // Lấy sản phẩm đầu tiên từ Redux
  const dispatch = useDispatch(); // Sử dụng dispatch để thêm/xóa sản phẩm khỏi giỏ hàng

  const handleAddProduct = () => {
    dispatch(cartActions.addProduct(product)); // Thêm sản phẩm vào giỏ hàng
  };

  const handleRemoveProduct = () => {
    dispatch(cartActions.removeProduct(product)); // Xóa sản phẩm khỏi giỏ hàng
  };

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={handleAddProduct}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={handleRemoveProduct}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductTwo = (props) => {
  const product = useSelector((state) => state.product[1]); // Lấy sản phẩm thứ hai từ Redux
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(cartActions.addProduct(product));
  };

  const handleRemoveProduct = () => {
    dispatch(cartActions.removeProduct(product));
  };

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h5" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={handleAddProduct}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={handleRemoveProduct}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = (props) => {
  const product = useSelector((state) => state.cart.products[0]); // Lấy sản phẩm đầu tiên từ giỏ hàng

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 1 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Container fluid="true">
        <Box>
          <Typography p="0.5rem" variant="h6">
            Quantity: {product.qty}
          </Typography>
          <Typography p="0.5rem" variant="h6">
            Price: 💵 {product.price}
          </Typography>
        </Box>
      </Container>
    </WrapperBox>
  );
};

const CartProductTwo = (props) => {
  const product = useSelector((state) => state.cart.products[1]); // Lấy sản phẩm thứ hai từ giỏ hàng

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 2 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
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

const Store = (props) => {
  const cart = useSelector((state) => state.cart); // Lấy dữ liệu giỏ hàng từ Redux
  const product = useSelector((state) => state.product); // Lấy dữ liệu sản phẩm từ Redux

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Store
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="store"
          src={{ cart, product }} // Hiển thị dữ liệu từ Redux
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
    </WrapperBox>
  );
};

const ReduxExercise = () => {
  return (
    <Container maxWidth="xxl">
      <br />
      <h5>How to add products to the cart using Redux?</h5>
      <br />
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Store />
        </Grid>
        <Grid item md={9} xs={12}>
          <RootComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReduxExercise;
