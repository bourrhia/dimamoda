"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Typography from "@mui/material/Typography";
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

  if (buttonName === "handleNavHomeButt") {
    return (
      <Box component="a" onClick={handleNavHome}>
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
        </Box>
      </>
    );
  }
}
