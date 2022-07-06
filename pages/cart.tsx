import { loadCart } from "@modules/cart/store/actions/cart-actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules/rootReducer";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CartOverview = dynamic(
  () => import("@modules/page-sections/components/cart-overview")
);

const CartPage = () => {
  const dispatch = useDispatch();
  const {
    error,
    items: cartItems,
    pending,
  } = useSelector((store: RootState) => store.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return <CartOverview pending={pending} cartItems={cartItems} />;
};

export default CartPage;
