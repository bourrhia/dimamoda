"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function PrdLinkMobile({
  buttonName,
  productNum,
  allProducts,
  children,
}) {
  const router = useRouter();

  const [navProduct, setNavProduct] = useState(false);

  const handleNavProduct = async (productNum) => {
    try {
      router.prefetch(`/product/productById/${encodeURIComponent(productNum)}`);
      router.push(`/product/productById/${encodeURIComponent(productNum)}`);
      setNavProduct(true);
    } catch (error) {
    } finally {
      setNavProduct(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  if (buttonName === "renderedImgXsButt") {
    return (
      <Box component="a" onClick={() => handleNavProduct(productNum)}>
        {children}
        {navProduct && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "renderImageXsButt") {
    return (
      <Box component="a" onClick={() => handleNavProduct(productNum)}>
        {children}
        {navProduct && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "voirePlusXsButt") {
    return (
      <Link href={"/product/showMoreProducts"} className="custom-link">
        {children}
      </Link>
    );
  }

  if (buttonName === "showMoreXsButt") {
    return (
      <Link href={"/product/showMoreProducts"} className="custom-link">
        {children}
      </Link>
    );
  }

  if (buttonName === "descArticleButt") {
    return (
      <Link
        href={`/productDesc/${encodeURIComponent(productNum)}`}
        className="custom-link"
      >
        {children}
      </Link>
    );
  }

  if (buttonName === "descCompleteButt") {
    return (
      <Link
        href={`/productDesc/${encodeURIComponent(productNum)}`}
        className="custom-link"
      >
        {children}
      </Link>
    );
  }

  if (buttonName === "prodDescButt") {
    return (
      <Box component="a" onClick={handleClick}>
        {children}
      </Box>
    );
  }
}
