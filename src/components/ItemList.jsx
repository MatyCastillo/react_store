import { useParams, useLocation } from "react-router";
import { Grid, Box, Typography } from "@material-ui/core";
import Item from "./Item";
import LoadingCircle from "./LoadingLinear";
import Skeleton from "@material-ui/lab/Skeleton";
import { mockData } from "../MockData";

const { useEffect, useState } = require("react");

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      if (categoryId == null) {
        setTimeout(() => resolve(mockData), 2000);
      } else {
        setTimeout(
          () =>
            resolve(mockData.filter((item) => item.category === categoryId)),
          2000
        );
      }
    })
      .then((dataResolve) => {
        setProducts(dataResolve);
        setLoading(false);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [location.pathname]);
  if (loading) {
    return (
      <Grid container spacing={3}>
        {new Array(12).fill(1).map((item) => (
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
