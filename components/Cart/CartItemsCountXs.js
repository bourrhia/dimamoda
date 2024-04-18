"use client";

import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ShowLoading from "../Loading/ShowLoading";

export default function CartItemsCount() {
  const router = useRouter();

  const cart = useSelector((state) => state.cart.products);
  const [navShowCart, setNavShowCart] = useState(false);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.prodQtee, 0);
  };

  const handleNavShowCart = async () => {
    try {
      router.prefetch("/cart/showCartXs");
      router.push("/cart/showCartXs");
      setNavShowCart(true);
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
              margin: "auto",
              minWidth: "8px",
              borderRadius: "13px",
              textAlign: "center",
              background: "#c9002c",
              display: "inline-block",
              position: "absolute",
              right: 2,
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
