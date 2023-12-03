import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

export const TableFooter = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnty, setTotalQnty] = useState(0);

  const { carts } = useSelector((state) => state.allCart);

  // count total Price
  const countTotalPrice = useCallback(() => {
    let price = 0;
    carts.map((item) => {
      price = item.price * item.qnty + price;
    });
    setTotalPrice(price);
  }, [carts]);

  useEffect(() => {
    countTotalPrice();
  }, [countTotalPrice]);

  // count total Qnty
  const countTotalQnty = useCallback(() => {
    let quantity = 0;
    carts.map((item) => {
      quantity = item.qnty + quantity;
    });
    setTotalQnty(quantity);
  }, [carts]);

  useEffect(() => {
    countTotalQnty();
  }, [countTotalQnty]);

  return (
    <>
      <tfoot>
        <tr>
          <th>&nbsp;</th>
          <th colSpan={3}>&nbsp;</th>
          <th>
            Items In Cart <span className="ml-2 mr-2">:</span>
            <span className="text-danger">{totalQnty}</span>
          </th>
          <th className="text-right">
            Total Price<span className="ml-2 mr-2">:</span>
            <span className="text-danger">₹ {totalPrice}</span>
          </th>
        </tr>
      </tfoot>
    </>
  );
};
