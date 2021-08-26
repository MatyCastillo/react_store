import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
        backgroundColor: "#00695f" //navbar color
    },
    logo: {
        
        width: 135,
        height: 43.54
    }
}));

export default function NavBar(props) {
    var titleBar = props.title
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar 
            position="static" 
            className={classes.root}>
                <Toolbar>
                    {/* <img src="../resources/img/react.svg" alt="logo" className={classes.logo} to={'/'} component={Link}/>  */}
                    <Toolbar to={'/'} component={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <img src="../resources/img/react.svg" alt="logo" className={classes.logo} />
                        <Typography className={classes.title} variant="h6" noWrap >
                            {titleBar}
                        </Typography>
                    </Toolbar>
                    {props.children} {/*acá se llaman a los botones del menu*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}