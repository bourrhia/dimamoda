import React from "react";
import HandlesCompleteOrder from "../../../../../components/Cart/HandlesCompleteOrder";

export const CompleteOrder = async ({ params }) => {
  const order_Id = params.orderId;
  const cartItemId = params.prodId || null;
  return (
    <>
      <HandlesCompleteOrder order_Id={order_Id} cartItemId={cartItemId} />
    </>
  );
};
export default CompleteOrder;
