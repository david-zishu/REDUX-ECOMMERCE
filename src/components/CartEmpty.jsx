export const CartEmpty = () => {
  return (
    <>
      <table className="table cart-table mb-0">
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className="cart-empty">
                <i className="fa fa-shopping-cart"></i>
                <p>Your Cart is Empty</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
