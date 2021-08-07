import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "column",
        alignItems: "center",
        display: 'flex',
    },
    circle: {
        color: "#00695f"
    }
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.circle} />
        </div>
    );
}