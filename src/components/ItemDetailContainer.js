import React from 'react'
import { Box } from '@material-ui/core';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    return (
        <>
            <Box display="flex" justifyContent="center" m={4} p={1} >
                <ItemDetail />
            </Box>
        </>
    )
}

export default ItemDetailContainer
