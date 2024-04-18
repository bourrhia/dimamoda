import React, { Suspense } from "react";
import HandlesCheckoutUpSm from "../../../../components/Cart/HandlesCheckoutUpSm";
import ShowLoading from "../../../../components/Loading/ShowLoading";

export const CheckoutUpSm = async () => {
  return (
    <>
      <Suspense fallback={<ShowLoading />}>
        <HandlesCheckoutUpSm />
      </Suspense>
    </>
  );
};

export default CheckoutUpSm;
