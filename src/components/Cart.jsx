import { React, useContext, useState } from "react";
import {
  makeStyles,
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  Divider,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import BuyerForm from "./BuyerForm";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getData } from "../firebase/index";
import ItemCart from "./ItemCart";

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

function Cart() {
  const classes = useStyles();
  const { cart, removeItem, clear, getCartAmount } = useContext(CartContext);
  const [openBuyerModal, setOpenBuyerModal] = useState(false);
  const [openOrderIdModal, setOpenOrderIdModal] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [orderState, setOrderState] = useState({
    finish: false,
    orderId: "",
  });
  const handleClickOpen = () => {
    setOpenBuyerModal(true);
  };

  const handleClose = () => {
    setOpenBuyerModal(false);
  };

  const remove = (id) => {
    removeItem(id);
  };

  const handleOrderIdModalClose = () => {
    setOpenOrderIdModal(false);
    clear();
    handleClose();
  };

  const onBuyFinish = async (buyerData) => {
    setLoadingOrder(true);

    delete buyerData.repeatEmail;
    const order = {
      buyer: buyerData,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getCartAmount(),
    };

    const docRef = await addDoc(collection(getData(), "orders"), order);
    setOrderState({ finish: true, orderId: docRef.id });
    setOpenOrderIdModal(true);
  };

  return (
    <Container>
      <Box my={3}>
        <Grid container spacing={2}>
          <Grid item lg={9} md={8} sm={9}>
            <Paper variant="outlined">
              <Grid container spacing={3} className={classes.root}>
                <Grid item>
                  <Typography variant="h4" gutterBottom>
                    Carrito
                  </Typography>
                </Grid>
              </Grid>

              {cart.length === 0 ? (
                <>
                  <Divider />
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
                </>
              ) : (
                <>
                  <Grid
                    container
                    justify="space-between"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <Typography
                      inline
                      style={{ cursor: "pointer", color: "#007185" }}
                      onClick={() => clear()}
                    >
                      Limpiar Carrito
                    </Typography>
                    <Typography inline align="right">
                      Precio
                    </Typography>
                  </Grid>
                  <Divider />
                  {cart.map((item) => (
                    <ItemCart
                      title={item.item.title}
                      category={item.item.category}
                      id={item.item.id}
                      quantity={item.quantity}
                      price={item.item.price}
                      remove={remove}
                    />
                  ))}
                </>
              )}
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
      <BuyerForm
        open={openBuyerModal}
        close={handleClose}
        finish={onBuyFinish}
        loadingOrder={loadingOrder}
        orderState={orderState}
      />
      <Dialog onClose={handleOrderIdModalClose} open={openOrderIdModal}>
        <DialogTitle id="simple-dialog-title">
          Órden <b style={{ color: "red" }}>{orderState.orderId}</b> generada
          con éxito.
          <br />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Podrá visualizarla en "Buscar órden por ID"
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOrderIdModalClose} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Cart;
