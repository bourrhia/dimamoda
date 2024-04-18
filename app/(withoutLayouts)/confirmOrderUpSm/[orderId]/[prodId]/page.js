import React from "react";
import HandlesConfOrderUpSm from "../../../../../components/Cart/HandlesConfOrderUpSm";

export const ConfirmOrderUpSm = async ({ params }) => {
  const order_Id = params.orderId;
  const cartItemId = params.prodId || null;

  return (
    <>
      <HandlesConfOrderUpSm order_Id={order_Id} cartItemId={cartItemId} />
    </>
  );
};
export default ConfirmOrderUpSm;
