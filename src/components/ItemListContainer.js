import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount'
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
            <Typography className={classes.title}
                variant="h5"
                gutterBottom>
                {prop.greeting}
            </Typography>
            <ItemCount initial={2} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
