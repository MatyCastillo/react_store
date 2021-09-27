import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    margin: "3",
    textAlign: "right",
    width: "100%",
  },
});
const Breadcrumb = (props) => {
  const classes = useStyles();
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname
    .split("/")
    .filter((x) => x !== "item" && x !== "category");
  const pathFinal = pathnames.filter((x) => x !== "");

  return (
    <Paper spacing={3} variant="outlined">
      <Grid className={classes.paper} spacing={3}>
        <Breadcrumbs aria-label="breadcrumb">
          {pathFinal.length > 0 ? (
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Catálogo
            </Link>
          ) : (
            <Typography> Catálogo </Typography>
          )}
          {pathFinal.map((name, index) => {
            const routeTo = `/${pathFinal.slice(0, index + 1).join("/")}`;
            const isLast = index === pathFinal.length - 1;
            return isLast ? (
              <Typography key={name}>{name}</Typography>
            ) : (
              <Link
                style={{ cursor: "pointer" }}
                key={name}
                onClick={() => history.push(routeTo)}
              >
                {name}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Grid>
    </Paper>
  );
};

export default withRouter(Breadcrumb);
