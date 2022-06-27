import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const CheckOutButton = ({
  totalPrice,
  onCheckOut,
}: {
  totalPrice: number;
  onCheckOut: () => void;
}) => {
  return (
    <Paper sx={{ p: 3, mt: 2, width: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">total price:</Typography>
        <Typography variant="h5">{totalPrice.toFixed(2)}</Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Typography sx={{ mb: 2 }}>
        by clicking this button nothing will happen 🙂
      </Typography>
      <Button onClick={onCheckOut} fullWidth variant="contained" size="large">
        check out
      </Button>
    </Paper>
  );
};

export default CheckOutButton;
