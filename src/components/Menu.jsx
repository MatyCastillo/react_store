import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { getData } from "../firebase/index";
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
const { useEffect, useState } = require("react");
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
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesCollection = collection(getData(), "categories");
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categoriesList = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesList);
    };
    getCategories();
  }, []);
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
      {categories.map((category) => (
        <MenuItem
          to={`/category/${category.name}`}
          component={Link}
          onClick={handleMenuClose}
        >
          {category.name.toUpperCase()}
        </MenuItem>
      ))}
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
        <Button color="inherit" component={Link} to={`/order`}>
          Buscar Órden
        </Button>
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
