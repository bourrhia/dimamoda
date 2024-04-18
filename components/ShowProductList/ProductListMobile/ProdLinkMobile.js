"use client";

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

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
      // Handle any errors that might occur during navigation
    } finally {
      setNavProduct(true);
    }
  };

  const ShowLoading = () => {
    return (
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
    );
  };

  const handleClick = (e) => {
    e.preventDefault();

    router.back();
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    router.back();
  };

  if (buttonName === "renderImgXsButt") {
    return (
      <Link href="/" className="custom-link">
        {children}
      </Link>
    );
  }

  if (buttonName === "renderedImgXsButt") {
    return (
      <Box
        component="a"
        onClick={() => handleNavProduct(productNum)}
        onTouchEnd={() => handleNavProduct(productNum)}
      >
        {children}
        {navProduct && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "renderImageXsButt") {
    return (
      <Box
        component="a"
        onClick={() => handleNavProduct(productNum)}
        onTouchEnd={() => handleNavProduct(productNum)}
      >
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

  /* if (buttonName === "achatImmédiatButt") {
    return (
      <Link
        href="/"
        style={{
          textDecoration: "none!important",
          cursor: "pointer",
          ":WebkitAnyLink": {
            cursor: "pointer",
          },
        }}
      >
        {children}
      </Link>
    );
  }*/

  if (buttonName === "ajouterPanierButt") {
    return (
      <Link
        href="/"
        style={{
          textDecoration: "none!important",
          cursor: "pointer",
          ":WebkitAnyLink": {
            cursor: "pointer",
          },
        }}
      >
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
      <Box component="a" onClick={handleClick} onTouchEnd={handleTouchEnd}>
        {children}
      </Box>
    );
  }
}
