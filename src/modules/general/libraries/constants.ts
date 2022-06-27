import { ToastOptions } from "react-toastify";
export const URLS = {
  PRODUCT: {
    self: "/product",
    BEST_SELLER: "/product/best-seller",
    PROMOTION: "/product/promotion",
    NEW_ARRIVALS: "/product/new-arrival",
  },
  CATEGORY: {
    LAMPSHADE: "/product/category/lampshade",
    TABLE: "/product/category/table",
    CHANDELIER: "/product/category/chandelier",
    BED: "/product/category/bed",
    POSTER: "/product/category/poster",
    POT: "/product/category/pot",
  },
};
export const TOAST_OPTIONS: ToastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
