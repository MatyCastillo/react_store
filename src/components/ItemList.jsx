import { useParams, useLocation } from "react-router";
import { Grid, Box, Typography } from "@material-ui/core";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getData } from "../firebase/index";
import Item from "./Item";
import Skeleton from "@material-ui/lab/Skeleton";

const { useEffect, useState } = require("react");

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(getData(), "productos");
      if (categoryId == null) {
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } else {
        const productsQuery = query(
          productsCollection,
          where("category", "==", categoryId)
        );
        const productsSnapshot = await getDocs(productsQuery);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      }
      setLoading(false);
    };
    getProducts();
    setLoading(true);
  }, [location.pathname]);

  if (loading) {
    return (
      <Grid container spacing={3}>
        {new Array(6).fill(1).map((item) => (
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Box boxShadow={3} item xs={12} sm={6} md={2}>
              <Skeleton animation="wave" variant="rect" height={215} />
              <Box height={120} margin={1}>
                <Skeleton width="50%">
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="80%">
                  <Typography variant="h3">.</Typography>
                </Skeleton>
                <Skeleton width="15%">
                  <Typography variant="h4">.</Typography>
                </Skeleton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return (
      <>
        <Grid container spacing={3}>
          {products.map(
            ({
              title,
              description,
              stock,
              pictureUrl,
              price,
              id,
              category,
            }) => (
              <Item
                title={title}
                description={description}
                stock={stock}
                pictureUrl={pictureUrl}
                price={price}
                id={id}
                category={category}
              />
            )
          )}
        </Grid>
      </>
    );
  }
}
