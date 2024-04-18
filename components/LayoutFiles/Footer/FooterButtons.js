"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import CircularProgress from "@mui/material/CircularProgress";

export default function HeaderButtons({ buttonName, children }) {
  const router = useRouter();

  const [navHome, setNavHome] = useState(false);

  const handleNavHome = async () => {
    try {
      setNavHome(true);
      router.push("/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavHome(false);
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
          zIndex: "9999",
        }}
      >
        <CircularProgress size={40} />
      </Box>
    );
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

  if (buttonName === "Butt") {
    return (
      <Box>
        <Link href="/" className="custom-link">
          {children}
        </Link>
      </Box>
    );
  }

  if (buttonName === "Butt") {
    return (
      <Link href="/" className="custom-link">
        {children}
      </Link>
    );
  }
}
