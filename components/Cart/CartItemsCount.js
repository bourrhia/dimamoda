"use client";

import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ShowLoading from "../Loading/ShowLoading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CartItemsCount() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.products);
  const [navShowCart, setNavShowCart] = useState(false);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.prodQtee, 0);
  };

  const handleNavShowCart = async () => {
    setNavShowCart(true);
    try {
      router.push("/cart/showCart");
    } catch (error) {
    } finally {
      setNavShowCart(false);
    }
  };

  return (
    <>
      {navShowCart && <ShowLoading />}
      <IconButton aria-label="cart" onClick={handleNavShowCart}>
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              right: -3,
              top: 13,
              padding: "0 4px",
              border: "2px solid #fff",
              right: 8,
              top: 9,
              padding: "3px 4px",
              background: "#c9002c",
              font: "bold 11px Arial",
              color: "#fff",
            },
          }}
          badgeContent={getItemsCount()}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              margin: "0 8px 0 0",
              color: "#111820 !important",
            }}
          ></ShoppingCartOutlinedIcon>
        </Badge>
        <Box
          component="span"
          sx={{
            color: "#111820 !important",
            cursor: "pointer",
            textDecoration: "none !important",
            padding: 0,
            borderWidth: "1px 1px 0",
            position: "relative",
            fontSize: "12px",
            border: "1px solid transparent",
            textDecoration: "none !important",
            display: "flex",
            alignItems: "center",
            position: "relative",
            backgroundColor: "transparent",
            border: "none",
            outline: 0,
          }}
        >
          <Typography variant="caption text">Panier</Typography>
        </Box>
      </IconButton>
    </>
  );
}
