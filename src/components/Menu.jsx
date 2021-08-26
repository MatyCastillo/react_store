import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Categories(prop) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        to={`/category/${"categoria-1"}`}
        component={Link}
        onClick={handleMenuClose}
      >
        Categoría-1
      </MenuItem>
      <MenuItem
        to={`/category/${"categoria-2"}`}
        component={Link}
        onClick={handleMenuClose}
      >
        Categoría-2
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="categorias"
          aria-controls="menu-categorias"
          aria-haspopup="true"
          color="inherit"
        >
          <ArrowDropDownIcon />
        </IconButton>
        <p>Categorías</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <Button
          edge="end"
          aria-label="categorías de la tienda"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          Categorías
          <ArrowDropDownIcon />
        </Button>
      </div>
      {prop.children}
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="ver más"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
