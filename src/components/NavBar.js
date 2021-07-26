import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuButtons from "./Menu"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    title: {
        display: "none",
        [theme.breakpoints.up("xs")]: {
            display: "block"
        }
    },
    root: {
        backgroundColor: "#00695f"
    },
}));

export default function NavBar(props) {
    var titleBar = props.title
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.root} >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {titleBar}
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionMobile}>
                        <MenuButtons /> {/*acá se llaman a los botones del menu*/}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}