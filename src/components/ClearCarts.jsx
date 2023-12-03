import { useDispatch } from "react-redux";
import { emptyCarts } from "../features/carts/cartSlice";
import toast from "react-hot-toast";

export const ClearCarts = ({ carts }) => {
  const dispatch = useDispatch();

  // clear carts
  const onClearCarts = () => {
    dispatch(emptyCarts());
    toast.success("Your Cart is Empty");
  };

  return (
    <>
      {carts.length > 0 ? (
        <button
          className="btn btn-danger mt-0 btn-sm"
          onClick={() => dispatch(onClearCarts())}
        >
          <i className="fa fa-trash-alt mr-2"></i>
          <span>Empty Cart</span>
        </button>
      ) : (
        ""
      )}
    </>
  );
};
