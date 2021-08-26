import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

export default function CartWidget(props) {
    return (
        <>
            <IconButton aria-label="ver contenido del carrito" color="inherit">
                <Badge badgeContent={props.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );
}