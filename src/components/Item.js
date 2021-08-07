import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    media: {

        height: '100%',
        paddingTop: '0', // 16:9
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    cardTitle: {
        fontWeight: '600',
    },
    descriptionBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "normal",
        overflow: "hidden",
        fontWeight: '500',
        color: 'rgba(0,0,0,.6)'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    idText: {
        float: 'left',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    },
    stock: {
        float: 'right'
    }
});

export default function Item({ id, title, description, stock, pictureUrl, price }) {
    const classes = useStyles();
    const finalPictureUrl = '/resources/img/' + pictureUrl;

    return (
        <Grid item xs={12} sm={6} md={3} lg={2} >
            <Box boxShadow={3} item xs={12} sm={6} md={2}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt="No Image"
                            height="140"
                            image={finalPictureUrl}
                            title="No Image"
                        />
                        <CardContent>
                            <div className={classes.cardContent}>

                                <Typography gutterBottom variant="h6" >
                                    $ {Number(price).toLocaleString('es-AR')}
                                </Typography>

                                <Typography className={classes.cardTitle} noWrap gutterBottom variant="body2" >
                                    {title}
                                </Typography>

                            </div>
                            <Box
                                component="div"
                                className={classes.descriptionBox}
                                sx={{ typography: 'body2' }}
                            >
                                {description}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>

                        <Typography className={classes.idText}>ID {id}</Typography>

                        <Typography className={classes.stock}>Stock: {stock}</Typography>

                    </CardActions>
                </Card>
            </Box>
        </Grid >
    );
}
