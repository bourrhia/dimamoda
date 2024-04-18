"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function ProdLinkAllDevices({
  buttonName,
  productNum,
  children,
}) {
  const router = useRouter();

  const [navProduct, setNavProduct] = useState(false);
  const [navShowMore, setNavShowMore] = useState(false);

  const handleNavProduct = () => {
    try {
      setNavProduct(true);
      router.push(`/product/productById/${encodeURIComponent(productNum)}`);
    } catch (err) {
      console.error("An error occurred while navigating to product: ", err);
    } finally {
      setNavProduct(true);
    }
  };

  const handleNavShowMore = () => {
    try {
      setNavShowMore(true);
      router.push("/product/showMoreProducts");
    } catch (err) {
      console.error(
        "An error occurred while navigating to show more product: ",
        err
      );
    } finally {
      setNavShowMore(true);
    }
  };

  if (buttonName === "allPrdtsButt") {
    return (
      <Box
        component="a"
        onClick={handleNavProduct}
        sx={{
          textDecoration: "none!important",
          color: "#007185",
          cursor: "pointer",

          ":link": {
            textDecoration: "none",
            color: "#007185",
          },

          ":visited": {
            textDecoration: "none",
            color: "#007185",
          },
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navProduct && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "voirePlusButt") {
    return (
      <Box
        component="a"
        onClick={handleNavShowMore}
        sx={{
          textDecoration: "none!important",
          color: "#007185",
          cursor: "pointer",

          ":link": {
            textDecoration: "none",
            color: "#007185",
          },

          ":visited": {
            textDecoration: "none",
            color: "#007185",
          },
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navShowMore && <ShowLoading />}
      </Box>
    );
  }
}
