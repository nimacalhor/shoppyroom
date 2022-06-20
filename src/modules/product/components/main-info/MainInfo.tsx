import { addCartItem } from "@modules/cart/store/actions/cart-actions";
import { Product } from "@modules/product/libraries/product-types";
import { trimText } from "@modules/general/libraries/helpers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import stl from "./MainInfo.module.scss";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

const MainInfo = ({ product }: { product: Product }) => {
  const { brand, title, price, rate, description } = product;
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addCartItem(product));
  return (
    <Paper className={`${stl.root} panel`}>
      <Grid className={stl.root__grid} container>
        <Grid item xs={10}>
          <Typography variant="caption">{brand.title}</Typography>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Chip label={price} color="primary" />
        </Grid>
      </Grid>
      <Divider variant="middle" className={stl.root__divider} />
      {/* ______________________________ */}
      <Rating name={title + " ratings"} value={rate} readOnly />
      <Typography>{trimText(description, 200)}</Typography>
      <Divider variant="middle" className={stl.root__divider} />
      {/* ______________________________ */}
      <Grid className={stl.root__grid} container spacing={1}>
        <Grid item xs={1}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Grid>
        <Grid item spacing={11} flexGrow={1}>
          <Button
            onClick={addToCartHandler}
            size="large"
            className={stl.root__button}
            color="primary"
            variant="contained"
            fullWidth
          >
            add to cart
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainInfo;
