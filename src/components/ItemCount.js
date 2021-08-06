import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {

        maxWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    buttons: {
        justifyContent: 'center',
        display: 'flex'
    },
    box: {
        justifyContent: 'center',
        textAlign: 'center'

    }
});

export default function ItemCount({ stock, initial, onAdd }) {
    const classes = useStyles();
    const [count, setCount] = useState(initial);

    const addOne = () => {
        if (count < stock) { setCount(count + 1) };
    }

    const substractOne = () => {
        if (count > 1) { setCount(count - 1) };
    }

    const addToCart = () => {
        if (initial <= stock) {
            onAdd(count);
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    Product
                </Typography>
                < >
                    <ButtonGroup fullWidth className={classes.buttons} size="small" color="primary" aria-label="large outlined primary button group">
                        <Fab text="restar" onClick={() => substractOne()} ><RemoveIcon /></Fab>


                        <Paper className={classes.buttons}>
                            <Typography variant="button" >
                                {count}
                            </Typography>
                        </Paper>


                        <Fab text="sumar" onClick={() => addOne()}  ><AddIcon /></Fab>
                    </ButtonGroup>
                </>
                <br></br>
                <Button fullWidth variant="outlined" onClick={() => addToCart()}>
                    Agregar al Carrito
                </Button>
            </CardContent>

        </Card >
    );
}