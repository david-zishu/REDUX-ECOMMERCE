import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  removeCart,
} from "../features/carts/cartSlice";

export const TableBody = ({ carts }) => {
  const dispatch = useDispatch();

  // handle increment and decrement
  const onIncrement = (e) => {
    dispatch(incrementCart(e));
  };

  const onDecrement = (e) => {
    dispatch(decrementCart(e));
  };

  // remove cart
  const onRemoveCart = (e) => {
    dispatch(removeCart(e));
    toast.success("Item Remove from Your Cart");
  };
  return (
    <>
      <tbody>
        {carts.map((data, index) => {
          return (
            <>
              <tr key={index}>
                <td>
                  <button
                    className="prdct-delete"
                    onClick={() => onRemoveCart(data.id)}
                  >
                    <i className="fa fa-trash-alt"></i>
                  </button>
                </td>
                <td>
                  <div className="product-img">
                    <img src={data.imgdata} alt="" />
                  </div>
                </td>
                <td>
                  <div className="product-name">
                    <p>{data.dish}</p>
                  </div>
                </td>
                <td>{data.price}</td>
                <td>
                  <div className="prdct-qty-container">
                    <button
                      className="prdct-qty-btn"
                      type="button"
                      onClick={
                        data.qnty <= 1
                          ? () => onRemoveCart(data.id)
                          : () => onDecrement(data)
                      }
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="qty-input-box"
                      value={data.qnty}
                      disabled
                      name=""
                      id=""
                    />
                    <button
                      className="prdct-qty-btn"
                      type="button"
                      onClick={() => onIncrement(data)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td className="text-right">₹ {data.qnty * data.price}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </>
  );
};
