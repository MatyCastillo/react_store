import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        
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
            <Grid container className={classes.container}>
                <Grid item >
                    <Typography className={classes.title}
                        variant="h5"
                        gutterBottom>
                        {prop.greeting}
                    </Typography>
                    <ItemList />
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemListContainer
