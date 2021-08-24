import React from 'react'
import { useParams } from 'react-router';
import { Container, makeStyles, Box, Typography, CircularProgress } from '@material-ui/core';
import ItemDetail from './ItemDetail'
import LoadingCircle from './LoadingCircle'
import { mockData } from "../MockData";

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
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(mockData.filter((item) => item.id === id)), 2000);
        })
            .then((dataResolve) => {
                setItem(dataResolve[0]);
                setLoading(false);
            })
            .catch((error) => {
                
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
