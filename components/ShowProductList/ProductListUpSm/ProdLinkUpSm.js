"use client";

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProdLinkUpSm({ buttonName, productNum, children }) {
  const router = useRouter();

  const [navProduct, setNavProduct] = useState(false);

  //console.log("navProduct : ", navProduct);

  const ShowLoading = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "9999",
        }}
      >
        <CircularProgress size={40} />
      </Box>
    );
  };

  /*  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    if (buttonName === "prdImgButt") {
      setNavProduct(false);
    }
  }, [pathname, searchParams]);*/

  //const handleNavProduct = async () => {
  const handleNavProduct = async () => {
    setNavProduct(true);
    try {
      router.prefetch(`/product/productById/${encodeURIComponent(productNum)}`);
      router.push(`/product/productById/${encodeURIComponent(productNum)}`);
    } catch (error) {
      // Handle any errors that might occur during navigation
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
        {/* <Link
          // href="/"
          href={`/product/${encodeURIComponent(productNum)}`}
          className="custom-link"
        >
          {children}
        </Link> 
         {navProduct && <ShowLoading />}*/}
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
