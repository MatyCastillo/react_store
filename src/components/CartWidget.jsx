import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export default function CartWidget() {
  const { getQuantities } = useContext(CartContext);
  return (
    <>
      <IconButton
        to={"/cart"}
        component={Link}
        aria-label="ver contenido del carrito"
        color="inherit"
      >
        {getQuantities() !== 0 ? (
          <Badge badgeContent={getQuantities()} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        ) : (
          <></>
        )}
      </IconButton>
    </>
  );
}
