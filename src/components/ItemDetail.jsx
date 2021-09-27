import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    display: "flex",
    padding: "30px",
  },
  media: {
    height: "0",
    paddingTop: "56.25%",
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
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: "500",
    color: "#007185",
    fontSize: "100%",
  },
  idText: {
    float: "right",
    fontWeight: "500",
    color: "rgba(0,0,0,.3)",
  },
  stock: {
    fontSize: 12,
    display: "flex",
  },
});

export default function ItemDetail(props) {
  const classes = useStyles();
  const item = props.item;
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    quantity > 0 ? setFinish(true) : setFinish(false);
  }, [quantity]);

  const onAdd = (quant) => {
    if (quant <= item.stock) {
      setQuantity(quant);
      addItem(item, quant);
    }
  };
  return (
    <Paper variant="outlined">
      <Grid container spacing={3} className={classes.root}>
        <Grid item lg={8} md={8} xs={12}>
          <CardMedia
            className={classes.media}
            image={item.pictureUrl}
            title="Imagen del producto"
          />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <div className={classes.content}>
            <Typography gutterBottom variant="h6">
              {item.title}
              <Typography className={classes.idText}>ID {item.id}</Typography>
            </Typography>
            <Divider />
            <Typography className={classes.idText}>Precio:</Typography>
            <Typography
              className={classes.price}
              noWrap
              gutterBottom
              variant="h5"
            >
              $ {Number(item.price).toLocaleString("es-AR")}
            </Typography>
            <Divider />
            <Typography className={classes.idText}>Categoria:</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.category}
            </Typography>
            <Divider />
            <Box component="div" className={classes.description}>
              <Typography className={classes.idText}>
                Sobre este artículo:
              </Typography>
              <Typography
                className={classes.description}
                gutterBottom
                variant="h6"
              >
                {item.description}
              </Typography>
              <Divider />
              <Typography className={classes.stock}>
                Unidades Disponibles:
                <Typography
                  className={classes.stock}
                  style={item.stock > 0 ? { color: "green" } : { color: "red" }}
                >
                  {item.stock > 0 ? item.stock : "Sin Stock"}
                </Typography>
              </Typography>
              {!finish && (
                <ItemCount
                  mt={3}
                  initial={1}
                  stock={item.stock}
                  onAdd={onAdd}
                />
              )}
              {finish && (
                <Button
                  to={"/cart"}
                  component={Link}
                  style={{ marginTop: "8px" }}
                  fullWidth
                  variant="outlined"
                >
                  Terminar Compra
                </Button>
              )}
            </Box>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
