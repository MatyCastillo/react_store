import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerBg: {
        background: '#00695f',
    },
    title: {
        paddingTop: "20px",
        color: "#00695f",
    },
}
));

const ItemListContainer = (prop) => {

    function onAdd(qty) {
        alert("onAdd " + qty);
    };

    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Typography className={classes.title}
                        variant="h5"
                        gutterBottom>
                        {prop.greeting}
                    </Typography>
                    <ItemList />
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.title}
                        variant="h5"
                        gutterBottom>
                        Seleciona la Cantidad
                    </Typography>
                    <ItemCount initial={2} stock={5} onAdd={onAdd} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemListContainer
