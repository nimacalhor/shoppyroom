import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import { RootState } from "@modules/rootReducer";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

const CartNotif = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const cartCapacity = items.reduce(
    (num, curItem) => num + curItem.quantity,
    0
  );
  return (
    <IconButton>
      <Badge badgeContent={cartCapacity ?? 0}>
        <ShoppingBagIcon />
      </Badge>
    </IconButton>
  );
};

export default CartNotif;
