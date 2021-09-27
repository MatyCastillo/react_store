import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Paper,
  InputBase,
  Divider,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function OrderSearch() {
  const classes = useStyles();
  const [orderId, setOrderId] = useState("");
  return (
    <Grid
      container
      style={{ margin: "10px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Buscar órden por ID"
            inputProps={{ "aria-label": "Buscar órden por ID" }}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            to={`/order/${orderId}`}
            component={Link}
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}
