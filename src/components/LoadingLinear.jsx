import React from "react";
import { makeStyles, LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#00695f",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#1DC2B1",
    },
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    backgroundColor: "#00695f",
    barColorPrimary: "#B82704",
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h4">
        {" "}
        Cargando
      </Typography>
      <LinearProgress />
    </div>
  );
}
