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

  if (buttonName === "handleNavHomeButt") {
    return (
      <Box component="a" onClick={handleNavHome} onTouchEnd={handleNavHome}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          {navHome && <ShowLoading />}
          {children}
        </Box>
      </Box>
    );
  }
  if (buttonName === "userSessionButt") {
    return (
      <>
        <Box
          component="span"
          sx={{
            paddingRight: "5px",
            color: "#000",
            FontSize: "12px",
            whiteSpace: "nowrap",
            display: "inline-block",
            padding: "5px 17px 16px 10px",
            border: "1px solid #fff",
            borderWidth: "2px 1px 0",
            textDecoration: "none",
            position: "relative",
            left: "-10px",
          }}
        >
          <Typography variant="caption text">Bienvenue&nbsp;!&nbsp;</Typography>
          {/*
          <Box
            component="button"
            sx={{
              textDecoration: "underline",
              color: "#0654ba",
              cursor: "pointer",
              //
              backgroundColor: "transparent",
              border: "none",
              outline: 0,
              fontFamily: "default",
            }}
          >
            <Typography variant="caption text">Se Connecter</Typography>
          </Box> */}
          {/*
          &nbsp;
          <Box
            component="span"
            sx={{
              color: "#000",
            }}
          >
            ou&nbsp;
            <Box
              component="button"
              sx={{
                textDecoration: "underline",
                color: "#0654ba",
                cursor: "pointer",
                //
                backgroundColor: "transparent",
                border: "none",
                outline: 0,
                fontFamily: "default",
              }}
            >
              <Typography variant="caption text"> S'incsrire</Typography>
            </Box>
          </Box>
        */}
        </Box>
        {/*  )} */}
      </>
    );
  }

  if (buttonName === "permIdentityIconButt") {
    return (
      <Box>
        <Link href="/" className="custom-link">
          {children}
        </Link>
      </Box>
    );
  }

  if (buttonName === "shoppingCartOutlinedIconButt") {
    return (
      <Link href="/" className="custom-link">
        {children}
      </Link>
    );
  }
}
