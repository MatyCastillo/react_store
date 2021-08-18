import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ItemCount from './ItemCount';

const useStyles = makeStyles({
    root: {
        display: "flex",
        maxWidth: 1200,
    },

    content: {
        flex: "1 0 auto",
        flexDirection: "column"
    }
});

export default function ItemDetail() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>


            <CardMedia
                component="img"
                alt="Contemplative Reptile"

                image="https://rickandmortyapi.com/api/character/avatar/78.jpeg"
                title="Contemplative Reptile"
            />
            <div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions className={classes.content}>

                    <ItemCount initial={2} stock={5} />

                </CardActions>
            </div>
        </Card>
    );
}
