import "./Home.css";
import toast from "react-hot-toast";
import CardData from "./CardData";
import { useState } from "react";
import { ItemsList } from "./ItemsList";
import { addToCart } from "../features/carts/cartSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [cartData, setCartData] = useState(CardData);
  const dispatch = useDispatch();
  console.log(setCartData);

  // add to cart
  const sendCart = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Lucknow Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element) => {
            return (
              <ItemsList
                key={element.id}
                sendCart={sendCart}
                element={element}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
