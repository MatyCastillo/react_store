import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  makeStyles,
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Container,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { collection, getDocs, query, where } from "firebase/firestore";
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

function OrderContainer() {
  const classes = useStyles();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();

  useEffect(() => {
    (async () => {
      const filterQuery = query(
        collection(getData(), "orders"),
        where("__name__", "==", orderId)
      );
      const orderSnapshot = await getDocs(filterQuery);

      setOrder(
        orderSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]
      );
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return (
      <>
        <Container>
          <Grid>
            <Box my={3}>
              <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={9}>
                  <Paper variant="outlined">
                    <Grid container spacing={3} className={classes.root}>
                      <Grid item>
                        <Typography variant="h4" gutterBottom>
                          Resumen de órden
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      justify="space-between"
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Skeleton width="30%" />
                      <Typography inline align="right">
                        Precio
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid container spacing={3} className={classes.root}>
                      <Grid item className={classes.img}>
                        <Skeleton variant="rect" width={100} height={100} />
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Grid container justify="space-between">
                              <Skeleton width="30%" />
                            </Grid>
                            <Typography variant="body2" gutterBottom>
                              <Skeleton width="30%" />
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              <Skeleton width="30%" />
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            className={classes.price}
                          >
                            <Skeleton width="20%" />
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={4} sm={4}>
                  <Paper variant="outlined">
                    <Grid container spacing={3} className={classes.root}>
                      <Grid item spacing={2}>
                        <Typography gutterBottom variant="h6">
                          INFORMACIÓN DEL COMPRADOR
                        </Typography>
                      </Grid>
                      <Divider variant="middle" />
                      <Grid
                        container
                        justify="space-between"
                        style={{ padding: "10px" }}
                      >
                        <Skeleton width="80%" />
                      </Grid>
                      <Divider width="80%" variant="middle" />
                      <Grid
                        container
                        justify="space-between"
                        style={{ padding: "10px" }}
                      >
                        <Skeleton width="80%" />
                      </Grid>
                      <Divider width="80%" variant="middle" />
                      <Grid
                        container
                        justify="space-between"
                        style={{ padding: "10px" }}
                      >
                        <Skeleton width="80%" />
                      </Grid>
                      <Divider width="80%" variant="middle" />
                      <Grid
                        container
                        justify="space-between"
                        style={{ padding: "10px" }}
                      ></Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </>
    );
  } else {
    return (
      <Container>
        <Grid>
          <Box my={3}>
            <Grid container spacing={2}>
              <Grid item lg={9} md={8} sm={9}>
                <Paper variant="outlined">
                  <Grid container spacing={3} className={classes.root}>
                    <Grid item>
                      <Typography variant="h4" gutterBottom>
                        Resumen de órden
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify="space-between"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <Typography inline style={{ color: "#007185" }}>
                      Detalle órden número/Id:{orderId}
                    </Typography>
                    <Typography inline align="right">
                      Precio
                    </Typography>
                  </Grid>
                  <Divider />
                  {order.items.map((item) => (
                    <ItemCart
                      title={item.item.title}
                      category={item.item.category}
                      id={item.item.id}
                      quantity={item.quantity}
                      price={item.item.price}
                    />
                  ))}
                </Paper>
              </Grid>
              <Grid item lg={3} md={4} sm={4}>
                <Paper variant="outlined">
                  <Grid container spacing={3} className={classes.root}>
                    <Grid item spacing={2}>
                      <Typography gutterBottom variant="h6">
                        INFORMACIÓN DEL COMPRADOR
                      </Typography>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: "10px" }}
                    >
                      <Typography inline variant="body1" align="left">
                        Nombre:
                      </Typography>
                      <Typography inline variant="body1" align="right">
                        {order.buyer.name}
                      </Typography>
                    </Grid>
                    <Divider width="80%" variant="middle" />
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: "10px" }}
                    >
                      <Typography inline variant="body1" align="left">
                        Correo:
                      </Typography>
                      <Typography inline variant="body1" align="right">
                        {order.buyer.email}
                      </Typography>
                    </Grid>
                    <Divider width="80%" variant="middle" />
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: "10px" }}
                    >
                      <Typography inline variant="body1" align="left">
                        Teléfono:
                      </Typography>
                      <Typography inline variant="body1" align="right">
                        {order.buyer.phone}
                      </Typography>
                    </Grid>
                    <Divider width="80%" variant="middle" />
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: "10px" }}
                    >
                      <Typography inline variant="body1" align="left">
                        Fecha:
                      </Typography>
                      <Typography inline variant="body1" align="right">
                        {order.date.toDate().toLocaleString()}
                      </Typography>
                    </Grid>
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
                        $ {Number(order.total).toLocaleString("es-AR")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    );
  }
}

export default OrderContainer;
