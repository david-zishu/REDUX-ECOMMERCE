import { useSelector } from "react-redux";
import "./cartStyle.css";
import { CartCount } from "./CartCount";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { ClearCarts } from "./ClearCarts";
import { TableFooter } from "./TableFooter";
import { CartEmpty } from "./CartEmpty";

export const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <CartCount carts={carts} />
                <ClearCarts carts={carts} />
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <CartEmpty />
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <TableHeader />
                  <TableBody carts={carts} />
                  <TableFooter />
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
