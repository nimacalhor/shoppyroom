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
  applyGrid,
}: {
  cartItems: CartProduct[];
  pending: boolean;
  applyGrid?: boolean;
}) => {
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + Number(cur.product.price) * cur.quantity,
    0
  );
  const gridCondition = applyGrid === false ? false : true;
  return (
    <div className={gridCondition ? stl.root : ""}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={gridCondition ? 7 : undefined}
          lg={gridCondition ? 8 : undefined}
        >
          {cartItems &&
            !pending &&
            cartItems.map((item) => (
              <CartItemCard key={item.product.id} cartProduct={item} />
            ))}
          {pending && <CartSkeleton />}
        </Grid>
        <Grid
          item
          xs={12}
          md={gridCondition ? 5 : undefined}
          lg={gridCondition ? 4 : undefined}
        >
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
