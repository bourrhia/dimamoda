"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function HeaderButtons({ buttonName, children }) {
  const router = useRouter();

  const [navHome, setNavHome] = useState(false);

  const handleNavHome = async () => {
    try {
      setNavHome(true);
      router.push("/");
    } catch (error) {
    } finally {
      setNavHome(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  if (buttonName === "topOfPageButt") {
    return (
      <Box
        component="a"
        onClick={(e) => scrollToTop(e)}
        onTouchEnd={(e) => scrollToTop(e)}
        aria-label="Haut de la page"
        sx={{
          height: "50px",
          paddingTop: "5px",
          background: "#37475A",
          WebkitBoxShadow: "none",
          MozBoxShadow: "none",
          boxShadow: "none",
          display: "block",
          textAlign: "center",
          borderBottom: "#cdcdcd",
          WebkitBoxSizing: "border-box",
          fontFamily: "inherit",
          textDecoration: "none",

          ":hover": {
            color: "#007185",
          },

          ":-webkit-any-link": {
            cursor: "pointer",
          },

          cursor: "pointer",
          fontSize: "12px",
          lineHeight: "1em",
        }}
      >
        {children}
      </Box>
    );
  }
  if (buttonName === "homePageButt") {
    return (
      <Box
        component="a"
        onClick={handleNavHome}
        onTouchEnd={handleNavHome}
        sx={{
          padding: 0,
          display: "block",
          color: "#111",
          fontSize: "15px",
          lineHeight: "16px",
          fontFamily: "inherit",
          textDecoration: "none",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
          cursor: "pointer",
        }}
      >
        {navHome && <ShowLoading />}
        {children}
      </Box>
    );
  }
}
