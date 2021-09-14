import { React, useContext, useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  Divider,
  Avatar,
  Container,
} from "@material-ui/core";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import BuyerForm from "./BuyerForm";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getData } from "../firebase/index";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    display: "flex",
    padding: "10px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  idText: {
    fontWeight: "500",
    color: "rgba(0,0,0,.3)",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  price: {
    fontWeight: "600",
    color: "#B82704",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { cart, removeItem, clear, getCartAmount } = useContext(CartContext);
  const [openBuyerModal, setOpenBuyerModal] = useState(false);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [finisBuyButton, setFinisBuyButton] = useState(false);
  const handleClickOpen = () => {
    setOpenBuyerModal(true);
  };

  const handleClose = () => {
    setOpenBuyerModal(false);
  };

  const remove = (id) => {
    removeItem(id);
  };

  const onBuyFinish = async (buyerData) => {
    setCreatingOrder(true);

    delete buyerData.repeatEmail;
    const order = {
      buyer: buyerData,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getCartAmount(),
    };

    const docRef = await addDoc(collection(getData(), "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  };

  function itemCartCard(item) {
    return (
      <>
        <Grid container spacing={3} className={classes.root}>
          <BuyerForm
            open={openBuyerModal}
            close={handleClose}
            finish={onBuyFinish}
          />
          <Grid item className={classes.img}>
            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              src="/resources/img/no-image.png"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Grid container justify="space-between">
                  <Typography variant="h6" style={{ display: "inline-block" }}>
                    {item.item.title}
                    <Typography style={{ display: "inline-block" }}>
                      - X {item.quantity}
                    </Typography>
                  </Typography>
                </Grid>
                <Typography variant="body2" gutterBottom>
                  Categoria: {item.item.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {item.item.id}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    remove(item.item.id);
                  }}
                  variant="outlined"
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.price}>
                $ {Number(item.item.price).toLocaleString("es-AR")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </>
    );
  }
  return (
    <Container>
      <Box my={3}>
        <Grid container spacing={2}>
          <Grid item lg={9} md={8} sm={9}>
            <Paper variant="outlined">
              {cart.length === 0 ? (
                <Grid container spacing={3} className={classes.root}>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "auto",
                      display: "block",
                      padding: "30px",
                    }}
                  >
                    No hay productos en el carrito
                  </Typography>
                  <Button
                    to={"/"}
                    component={Link}
                    style={{ margin: "8px" }}
                    fullWidth
                    variant="outlined"
                  >
                    Volver al catálogo
                  </Button>
                </Grid>
              ) : (
                <></>
              )}

              {cart.map((item) => itemCartCard(item))}
            </Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={4}>
            <Paper variant="outlined">
              <Grid container spacing={3} className={classes.root}>
                <Grid item spacing={2}>
                  <Typography gutterBottom variant="h6">
                    RESUMEN DEL PEDIDO
                  </Typography>
                </Grid>
                <Divider variant="middle" />
                {cart.map((item) => (
                  <Grid
                    container
                    justify="space-between"
                    style={{ padding: "10px" }}
                  >
                    <Typography inline variant="body1" align="left">
                      {item.item.title}
                    </Typography>
                    <Typography inline variant="body1" align="right">
                      x {item.quantity}
                    </Typography>
                  </Grid>
                ))}
                <Divider width="80%" variant="middle" />
                <Grid
                  container
                  justify="space-between"
                  style={{ padding: "10px" }}
                >
                  <Typography inline variant="h6" align="left">
                    Total:
                  </Typography>
                  <Typography inline variant="h5" align="right">
                    $ {Number(getCartAmount()).toLocaleString("es-AR")}
                  </Typography>
                  <Button
                    style={{ marginTop: "8px" }}
                    fullWidth
                    variant="outlined"
                    onClick={() => handleClickOpen()}
                    disabled={cart.length === 0}
                  >
                    Terminar Compra
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
