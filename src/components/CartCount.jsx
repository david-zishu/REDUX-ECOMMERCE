export const CartCount = ({ carts }) => {
  return (
    <h5 className="text-light m-0">
      Cart Calculation
      {carts.length > 0 ? `- (${carts.length})` : ""}
    </h5>
  );
};
