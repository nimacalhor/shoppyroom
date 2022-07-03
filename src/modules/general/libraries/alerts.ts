import { toast } from "react-toastify";

export const alertItemAdded = () => toast.success("item added successfully");
export const alertItemDeleted = () => toast.success("item removed successfully");
export const alertItemQuantityIncrease = () =>
  toast.success("item quantity increased");
export const alertItemQuantityDecrease = () =>
  toast.success("item quantity decreased");
export const alertItemQuantityChanged = () =>
  toast.success("item quantity changed");
