export const TableHeader = () => {
  return (
    <>
      <thead>
        <tr>
          <th>Action</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th className="text-right">
            <span id="amount" className="amount">
              Total Amount
            </span>
          </th>
        </tr>
      </thead>
    </>
  );
};
