import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function CartItemSkeletonCard() {
  return (
    <Box sx={{ height: 200, m: 0, p: 0 }}>
      <Skeleton />
    </Box>
  );
}

export default CartItemSkeletonCard;
