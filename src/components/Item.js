import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Item({ id, name, description, stock, image }) {
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
                            image={require('../resources/img/no-image.png').default}
                            title="No Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Typography>Stock: {stock}</Typography>
                    </CardActions>
                </Card>
            </Box>
        </Grid >
    );
}
