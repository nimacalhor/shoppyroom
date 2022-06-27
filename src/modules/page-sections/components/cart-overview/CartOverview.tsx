import { removeCartAllItems } from "@modules/cart/store/actions/cart-actions";
import CheckOutButton from "@modules/cart/components/checkout-button";
import CartItemCard from "@modules/cart/components/cart-item-card";
import { CartProduct } from "@modules/cart/libraries/cart-types";
import stl from "./CartOverview.module.scss";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

const CartOverview = ({ cartItems }: { cartItems: CartProduct[] }) => {
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + Number(cur.product.price) * cur.quantity,
    0
  );
  return (
    <div className={stl.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={8}>
          {cartItems &&
            cartItems.map((item) => (
              <CartItemCard key={item.product.id} cartProduct={item} />
            ))}
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <CheckOutButton
            onCheckOut={() => dispatch(removeCartAllItems())}
            totalPrice={totalPrice}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CartOverview;
