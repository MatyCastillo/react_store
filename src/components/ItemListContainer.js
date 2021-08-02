import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.title}
                variant="h5"
                gutterBottom>
                {prop.greeting}
            </Typography>
        </div>
    )
}

export default ItemListContainer
