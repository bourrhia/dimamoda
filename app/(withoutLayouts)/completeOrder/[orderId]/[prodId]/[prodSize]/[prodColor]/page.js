import React from "react";
import HandlesCompleteOrder from "../../../../../../../components/Cart/HandlesCompleteOrder";

export const CompleteOrder = async ({ params }) => {
  const order_Id = params.orderId;
  const cartItemId = params.prodId || null;
  const cartItemSize = params.prodSize || null;
  const cartItemColor = params.prodColor || null;

  return (
    <>
      <HandlesCompleteOrder
        order_Id={order_Id}
        cartItemId={cartItemId}
        cartItemSize={cartItemSize}
        cartItemColor={cartItemColor}
      />
    </>
  );
};
export default CompleteOrder;
