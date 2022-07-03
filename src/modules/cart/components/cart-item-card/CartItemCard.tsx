import NumberPicker from "@modules/general/components/number-picker";
import { CartProduct } from "@modules/cart/libraries/cart-types";
import { trimText } from "@modules/general/libraries/helpers";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import stl from "./CartItemCard.module.scss";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import {
  addCartItemQuantity,
  reduceCartItemQuantity,
  changeCartItemQuantity,
  removeCartItem,
} from "@modules/cart/store/actions/cart-actions";
import {
  alertItemDeleted,
  alertItemQuantityChanged,
  alertItemQuantityIncrease,
  alertItemQuantityDecrease,
} from "@modules/general/libraries/alerts";

const CartItemCard = ({ cartProduct }: { cartProduct: CartProduct }) => {
  const { product, quantity } = cartProduct;
  const id = Number(product.id);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addCartItemQuantity(id));
    alertItemQuantityIncrease();
  };
  const reduceHandler = () => {
    dispatch(reduceCartItemQuantity(id));
    alertItemQuantityDecrease();
  };
  const changeHandler = (val: number) => {
    dispatch(changeCartItemQuantity(id, val));
    alertItemQuantityChanged();
  };
  const deleteHandler = () => {
    dispatch(removeCartItem(id));
    alertItemDeleted();
  };
  return (
    <Paper className={stl.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <div className={stl.root__imgCnt}>
            <Image
              src={product.media.path}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              width={product.media.width}
              height={product.media.height}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Grid justifyContent={"space-between"} container spacing={2}>
            <Grid item xs={12} md={8}>
              <Link href={`/product/${product.id}`} passHref>
                <>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant="h4"
                    gutterBottom
                  >
                    {trimText(product.title, 30)}
                  </Typography>
                  <Typography sx={{ cursor: "pointer" }}>
                    {trimText(product.description, 50)}
                  </Typography>
                </>
              </Link>
              <Stack
                flexWrap={"wrap"}
                sx={{ mt: 2 }}
                spacing={2}
                alignItems="center"
                direction="row"
              >
                <NumberPicker
                  onAddValue={addHandler}
                  onReduceValue={reduceHandler}
                  onChangeValue={changeHandler}
                  defaultValue={quantity}
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  onClick={deleteHandler}
                  size="small"
                  variant="text"
                  endIcon={<DeleteIcon />}
                >
                  delete item
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography textAlign={"center"} variant="subtitle1">
                {product.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItemCard;
