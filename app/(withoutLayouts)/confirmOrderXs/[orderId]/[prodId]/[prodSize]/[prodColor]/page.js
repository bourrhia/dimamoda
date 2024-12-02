import React from "react";
import HandlesConfOrderXs from "../../../../../../../components/Cart/HandlesConfOrderXs";

export const ConfirmOrderXs = async ({ params }) => {
  const order_Id = params.orderId;
  const cartItemId = params.prodId || null;
  const cartItemSize = params.prodSize || null;
  const cartItemColor = params.prodColor || null;

  return (
    <>
      <HandlesConfOrderXs
        order_Id={order_Id}
        cartItemId={cartItemId}
        cartItemSize={cartItemSize}
        cartItemColor={cartItemColor}
      />
    </>
  );
};
export default ConfirmOrderXs;
