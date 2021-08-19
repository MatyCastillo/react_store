import React from 'react'
import { Container, makeStyles, Box, Typography, CircularProgress } from '@material-ui/core';
import ItemDetail from './ItemDetail'
import LoadingCircle from './LoadingCircle'

const { useEffect, useState } = require("react");

const useStyles = makeStyles((theme) => ({
    containerBg: {
        background: '#fff',
    },
    title: {
        paddingTop: "15px",
    },
    loader: {
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },


}

));

export default function ItemDetailContainer() {
    const classes = useStyles();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            const item =
            {
                id: "1",
                title: "Product-1",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.',
                price: "112",
                stock: "9",
                pictureUrl: '/resources/img/no-image.png'
            };
            setTimeout(() => resolve(item), 2000);
        })
            .then((dataResolve) => {
                setItem(dataResolve);
                setLoading(false);
            })
            .catch((error) => {
                console.log("err", error);
            });
    }, []);

    if (loading) {
        return (
            <LoadingCircle />
        );
    }

    return (

        <Container className={classes.containerBg}>
            <Box my={3}>
                <ItemDetail item={item} />
            </Box>
        </Container>

    )
}
