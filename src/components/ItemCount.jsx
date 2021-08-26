import React, { useState } from "react";
import {
  makeStyles,
  CardContent,
  Button,
  Typography,
  ButtonGroup,
  Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  buttons: {
    justifyContent: "center",
    display: "flex",
  },
  box: {
    justifyContent: "center",
    display: "flex",
  },
  divConteiner: {
    justifyContent: "center",
    textAlign: "center",
  },
});

export default function ItemCount({ stock, initial, onAdd }) {
  const stockNum = parseInt(stock);
  const classes = useStyles();
  const [count, setCount] = useState(initial);

  const addOne = () => {
    if (count < stockNum) {
      setCount(count + 1);
    }
  };

  const substractOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <CardContent>
      <ButtonGroup className={classes.buttons}>
        <Button
          aria-label="reduce"
          onClick={() => {
            substractOne();
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Paper className={classes.buttons}>
          <Typography variant="button">{count}</Typography>
        </Paper>
        <Button
          aria-label="increase"
          onClick={() => {
            addOne();
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>

      <Button
        style={{ marginTop: "8px" }}
        fullWidth
        variant="outlined"
        onClick={() => onAdd}
      >
        Agregar al Carrito
      </Button>
    </CardContent>
  );
}
