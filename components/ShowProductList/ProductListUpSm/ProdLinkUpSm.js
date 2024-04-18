"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function ProdLinkUpSm({ buttonName, productNum, children }) {
  const router = useRouter();

  const [navProduct, setNavProduct] = useState(false);

  const handleNavProduct = async () => {
    setNavProduct(true);
    try {
      router.prefetch(`/product/productById/${encodeURIComponent(productNum)}`);
      router.push(`/product/productById/${encodeURIComponent(productNum)}`);
    } catch (error) {
    } finally {
      setNavProduct(true);
    }
  };

  if (buttonName === "imgClickSm1") {
    return (
      <>
        {navProduct && <ShowLoading />}
        <Box
          component="a"
          onClick={handleNavProduct}
          onTouchEnd={handleNavProduct}
        >
          {children}
        </Box>
      </>
    );
  }

  if (buttonName === "imgClickUpMd1") {
    return (
      <>
        {navProduct && <ShowLoading />}
        <Box
          component="a"
          onClick={handleNavProduct}
          onTouchEnd={handleNavProduct}
        >
          {children}
        </Box>
      </>
    );
  }

  if (buttonName === "imgClickUpMd2") {
    return (
      <>
        {navProduct && <ShowLoading />}
        <Box
          component="a"
          onClick={handleNavProduct}
          onTouchEnd={handleNavProduct}
        >
          {children}
        </Box>
      </>
    );
  }

  if (buttonName === "prdImgButt") {
    return (
      <>
        {navProduct && <ShowLoading />}
        <Box
          component="a"
          onClick={() => handleNavProduct(productNum)}
          onTouchEnd={() => handleNavProduct(productNum)}
        >
          {children}
        </Box>
      </>
    );
  }
  return null;
}
