import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import { RootState } from "@modules/rootReducer";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import Link from "next/link";

const CartNotif = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const cartCapacity = items.reduce(
    (num, curItem) => num + curItem.quantity,
    0
  );
  return (
    <Link href="/cart" passHref>
      <IconButton>
        <Badge badgeContent={cartCapacity ?? 0}>
          <ShoppingBagIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartNotif;
