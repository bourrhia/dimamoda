import React from "react";
import HandlesConfOrderUpSm from "../../../../../../../components/Cart/HandlesConfOrderUpSm";

export const ConfirmOrderUpSm = async ({ params }) => {
  const order_Id = params.orderId;
  const cartItemId = params.prodId || null;
  const cartItemSize = params.prodSize || null;
  const cartItemColor = params.prodColor || null;

  return (
    <>
      <HandlesConfOrderUpSm
        order_Id={order_Id}
        cartItemId={cartItemId}
        cartItemSize={cartItemSize}
        cartItemColor={cartItemColor}
      />
    </>
  );
};
export default ConfirmOrderUpSm;
