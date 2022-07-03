import CartItemSkeletonCard from "../cart-item-skeleton-card";
function CartSkeleton({ amount = 5 }: { amount?: number }) {
  return (
    <>
      {new Array(amount).fill(0).map((_, i) => (
        <CartItemSkeletonCard key={i} />
      ))}
    </>
  );
}

export default CartSkeleton;
