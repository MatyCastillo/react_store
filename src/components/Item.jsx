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
import ItemCount from "./ItemCount";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    height: "100%",
    paddingTop: "0", // 16:9
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

function onAdd(qty) {
  alert("onAdd " + qty);
}

export default function Item({ id, title, description, pictureUrl, price }) {
  const classes = useStyles();
  const finalPictureUrl = "/resources/img/" + pictureUrl;

  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Box boxShadow={3} item xs={12} sm={6} md={2}>
        <Card className={classes.root}>
          <Link to={`/item/${id}`} component={CardActionArea}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="No Image"
              height="140"
              image={finalPictureUrl}
              title="No Image"
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h6">
                  {title}
                  <Typography className={classes.idText}>id:{id}</Typography>
                </Typography>
              </div>
              <Box
                component="div"
                className={classes.descriptionBox}
                sx={{ typography: "body2" }}
              >
                {description}
              </Box>
              <Typography className={classes.price} variant="h5">
                $ {Number(price).toLocaleString("es-AR")}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Box>
    </Grid>
  );
}
