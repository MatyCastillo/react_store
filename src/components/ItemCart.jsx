import { React } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Divider,
  Avatar,
} from "@material-ui/core";

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

function ItemCart(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item className={classes.img}>
          <Avatar
            alt="Product Image"
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
                  {props.title}
                </Typography>
              </Grid>
              <Typography variant="body2" gutterBottom>
                Categoria: {props.category}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: {props.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ display: "inline-block", paddingRight: "10px" }}
              >
                Cantidad: {props.quantity}
              </Typography>
              {props.remove != null ? (
                <Button
                  onClick={() => {
                    props.remove(props.id);
                  }}
                  variant="outlined"
                >
                  Eliminar
                </Button>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.price}>
              $ {Number(props.price).toLocaleString("es-AR")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default ItemCart;
