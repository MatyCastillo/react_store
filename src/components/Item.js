import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default function Item({ id, name, description, stock, img, price }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={3} >
            <Box boxShadow={3} item xs={12} sm={6} md={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="No Image"
                            height="140"
                            image={img}
                            title="No Image"
                        />
                        <CardContent>
                            <div className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" >
                                    {name}
                                </Typography>
                                <Typography gutterBottom variant="h5" >
                                    $ {price}
                                </Typography>
                            </div>
                            <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" component="p" />
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <Typography>Stock: {stock}</Typography>
                    </CardActions>
                </Card>
            </Box>
        </Grid >
    );
}
