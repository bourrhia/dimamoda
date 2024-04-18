"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

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
      // Handle any errors that might occur during navigation
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
      // Handle any errors that might occur during navigation
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
        {navProduct && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //position: "fixed",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: "99999",
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )}
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
        {navShowMore && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //position: "fixed",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: "99999",
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )}
      </Box>
    );
  }
}
