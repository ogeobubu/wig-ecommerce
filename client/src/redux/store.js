import { configureStore } from "@redux/toolkit";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
