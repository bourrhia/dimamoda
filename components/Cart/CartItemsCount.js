"use client";

//import React from "react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function CartItemsCount() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.products);
  const [navShowCart, setNavShowCart] = useState(false);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.prodQtee, 0);
  };

  const handleNavShowCart = async () => {
    setNavShowCart(true);
    try {
      router.push("/cart/showCart");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavShowCart(false);
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

  return (
    <>
      {navShowCart && <ShowLoading />}
      <IconButton
        aria-label="cart"
        onClick={handleNavShowCart}
        //  onTouchEnd={handleNavShowCart}
      >
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              right: -3,
              top: 13,
              // border: `2px solid ${theme.palette.background.paper}`,
              padding: "0 4px",
              //border: `2px solid ${theme.palette.background.paper}`,
              border: "2px solid #fff",
              right: 8,
              top: 9,
              padding: "3px 4px",
              background: "#c9002c",
              font: "bold 11px Arial",
              color: "#fff",
              //
              /*  cursor: "pointer",
              whiteSpace: "nowrap",
              listStyle: "none",

              display: "inline-block",
              position: "absolute",

              zIndex: 2,

              cursor: "pointer",
              whiteSpace: "nowrap",
              listStyle: "none",*/
            },
          }}
          badgeContent={getItemsCount()}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              margin: "0 8px 0 0",
              //
              color: "#111820 !important",
            }}
          ></ShoppingCartOutlinedIcon>
        </Badge>
      </IconButton>
    </>
  );
}
