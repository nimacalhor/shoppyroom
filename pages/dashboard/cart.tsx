import CartOverview from "@modules/page-sections/components/cart-overview";
import { loadCart } from "@modules/cart/store/actions/cart-actions";
import DashboardLayout from "@layouts/templates/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules/rootReducer";
import { ReactElement, useEffect } from "react";

function DashboardCartPage() {
  const dispatch = useDispatch();
  const { error, pending, items } = useSelector(
    (state: RootState) => state.cart
  );
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);
  return <>{items && !error && <CartOverview applyGrid={false} cartItems={items} pending={pending} />}</>;
}

DashboardCartPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardCartPage;
