import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

const CartNotif = ({ cartInventory }: { cartInventory?: number }) => {
  return (
    <IconButton>
      <Badge badgeContent={cartInventory}>
        <ShoppingBagIcon />
      </Badge>
    </IconButton>
  );
};

export default CartNotif;
