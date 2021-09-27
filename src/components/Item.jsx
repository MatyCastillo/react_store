import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  media: {
    height: "100%",
    paddingTop: "0",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  cardTitle: {
    fontWeight: "600",
  },
  descriptionBox: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: "500",
    color: "#007185",
  },
  stock: {
    float: "right",
    fontSize: 12,
    display: "flex",
  },
  price: {
    color: "#B82704",
  },
  idText: {
    float: "right",
    fontWeight: "500",
    color: "rgba(0,0,0,.3)",
  },
  divConteiner: {
    justifyContent: "center",
    textAlign: "center",
  },
});

export default function Item(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={2}>
      <Box boxShadow={3} item xs={12} sm={6} md={2}>
        <Card className={classes.root}>
          <CardActionArea to={`/item/${props.id}`} component={Link}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="No Image"
              height="140"
              image={props.pictureUrl}
              title="No Image"
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom>
                  {props.title}
                  <Typography className={classes.idText}>
                    id:{props.id}
                  </Typography>
                </Typography>
              </div>
              <Box
                component="div"
                className={classes.descriptionBox}
                sx={{ typography: "body1" }}
              >
                {props.description}
              </Box>
              <Typography className={classes.price} variant="h5">
                $ {Number(props.price).toLocaleString("es-AR")}
              </Typography>
              <Typography className={classes.stock}>
                Unidades Disponibles:
                <Typography
                  className={classes.stock}
                  style={
                    props.stock > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  {props.stock > 0 ? props.stock : "Sin Stock"}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}
