import React from 'react'
import Typography from '@material-ui/core/Typography';

const ItemListContainer = (prop) => {
    return (
        <div>
            <Typography variant="subtitle1" gutterBottom>
                {prop.greeting}
            </Typography>
        </div>
    )
}

export default ItemListContainer
