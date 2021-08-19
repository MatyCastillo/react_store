import React from "react";
import { makeStyles, Box, Typography, Grid, CardMedia } from "@material-ui/core";
import ItemCount from "./ItemCount";

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        display: "flex",
    },
    content: {
        flex: "1 0 auto",
        flexDirection: "column"
    },
    media: {
        height: '0',
        paddingTop: '56.25%', // 16:9
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    price: {
        fontWeight: '600',
        color: '#B82704'
    },
    description: {
        display: "-webkit-box",
        boxOrient: "vertical",
        wordBreak: "normal",
        overflow: "hidden",
        fontWeight: '500',
        color: '#007185'
    },
    idText: {
        float: 'right',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    }
});

function onAdd(qty) {
    alert("onAdd " + qty);
};

export default function ItemDetail(props) {
    const classes = useStyles();
    const item = props.item;

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item lg={8} md={8} xs={12}>

                <CardMedia
                    className={classes.media}
                    image={item.pictureUrl}
                    title="Imagen del producto"
                />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>

                    <Typography gutterBottom variant="h6" >
                        {item.title}
                        <Typography className={classes.idText}>ID {item.id}</Typography>
                    </Typography>

                    <Typography className={classes.idText}>Precio:</Typography>
                    <Typography className={classes.price} noWrap gutterBottom variant="h5">
                        $ {Number(item.price).toLocaleString('es-AR')}
                    </Typography>

                    <Box
                        component="div"
                        className={classes.description}>
                        <Typography className={classes.idText}>Sobre este artículo:</Typography>
                        <Typography className={classes.description} gutterBottom variant="h6">
                            {item.description}
                        </Typography>

                    </Box>
                    <ItemCount mt={3} initial={1} stock={item.stock} onAdd={onAdd} />

                </div>
            </Grid>
        </Grid>

    );
}