import React, { Suspense } from "react";
import HandlesCheckoutXs from "../../../../components/Cart/HandlesCheckoutXs";
import ShowLoading from "../../../../components/Loading/ShowLoading";

export const CheckoutXs = async () => {
  return (
    <>
      <Suspense fallback={<ShowLoading />}>
        <HandlesCheckoutXs />
      </Suspense>
    </>
  );
};

export default CheckoutXs;
