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
    try {
      router.prefetch("/cart/showCartXs");
      router.push("/cart/showCartXs");
      setNavShowCart(true);
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
        // onClick={() => handleNavShowCart()}
        // onTouchEnd={() => handleNavShowCart()}
        onClick={handleNavShowCart}
        onTouchEnd={handleNavShowCart}
      >
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              /* right: -3,
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
            color: "#fff",*/
              //
              margin: "auto",
              minWidth: "8px",
              borderRadius: "13px",
              textAlign: "center",
              background: "#c9002c",
              display: "inline-block",
              position: "absolute",
              // right: 0,
              right: 2,
              //top: "-3px",
              top: "6px",
              zIndex: 2,
              font: "bold 11px Arial",
              color: "#fff",
              padding: "2px 4px",
              border: "1px solid #fff",
              cursor: "pointer",
              whiteSpace: "nowrap",
              listStyle: "none",
            },
          }}
          badgeContent={getItemsCount()}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              pointerEvents: "none",
              display: "inline-block",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 0,
              verticalAlign: "middle",

              //
              color: "#111820 !important",
            }}
            aria-hidden="true"
            focusable="false"
          ></ShoppingCartOutlinedIcon>
        </Badge>
      </IconButton>
    </>
  );
}
