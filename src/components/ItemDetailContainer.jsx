import React from "react";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getData } from "../firebase/index";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  Container,
  makeStyles,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import ItemDetail from "./ItemDetail";

const { useEffect, useState } = require("react");

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "15px",
  },
  root: {
    maxWidth: 1200,
    display: "flex",
    padding: "30px",
  },
  media: {
    height: "0",
    paddingTop: "56.25%", // 16:9
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
  },
  idText: {
    float: "right",
    fontWeight: "500",
    color: "rgba(0,0,0,.3)",
  },
}));

export default function ItemDetailContainer() {
  const classes = useStyles();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const productsCollection = collection(getData(), "productos");
      const itemQuery = query(
        productsCollection,
        where("id", "==", parseInt(id))
      );
      const querySnapshot = await getDocs(itemQuery);
      querySnapshot.forEach((doc) => {
        setItem(doc.data());
      });

      setLoading(false);
    };
    getItem();
    setLoading(true);
  }, []);

  if (loading) {
    return (
      <Container className={classes.containerBg}>
        <Box my={3}>
          <Paper variant="outlined">
            <Grid container spacing={3} className={classes.root}>
              <Grid item lg={8} md={8} xs={12}>
                <Skeleton variant="rect" height={400} animation="wave" />
              </Grid>
              <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>
                  <Typography variant="h3">
                    <Skeleton width="50%" />
                  </Typography>
                  <Divider />
                  <Typography className={classes.idText}>Precio:</Typography>
                  <Skeleton width="20%" animation="wave" />
                  <Divider />
                  <Typography className={classes.idText}>Categoria:</Typography>
                  <Skeleton width="50%" animation="wave" />
                  <Divider />
                  <Box component="div" className={classes.description}>
                    <Typography className={classes.idText}>
                      Sobre este artículo:
                    </Typography>
                    <Skeleton
                      animation="wave"
                      height={20}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={20} width="80%" />
                    <Skeleton
                      animation="wave"
                      height={20}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={20} width="80%" />
                    <Divider />
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    );
  }
  return (
    <Container className={classes}>
      <Box my={3}>
        <ItemDetail item={item} />
      </Box>
    </Container>
  );
}
