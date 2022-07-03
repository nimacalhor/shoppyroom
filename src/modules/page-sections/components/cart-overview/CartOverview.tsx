import { removeCartAllItems } from "@modules/cart/store/actions/cart-actions";
import CheckOutButton from "@modules/cart/components/checkout-button";
import CartItemCard from "@modules/cart/components/cart-item-card";
import CartSkeleton from "@modules/cart/components/cart-skeleton";
import { CartProduct } from "@modules/cart/libraries/cart-types";
import stl from "./CartOverview.module.scss";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

const CartOverview = ({
  cartItems,
  pending,
}: {
  cartItems: CartProduct[];
  pending: boolean;
}) => {
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
            !pending &&
            cartItems.map((item) => (
              <CartItemCard key={item.product.id} cartProduct={item} />
            ))}
          {pending && <CartSkeleton />}
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          {!pending && (
            <CheckOutButton
              onCheckOut={() => dispatch(removeCartAllItems())}
              totalPrice={totalPrice}
            />
          )}
          {pending && <CartSkeleton />}
        </Grid>
      </Grid>
    </div>
  );
};

export default CartOverview;
