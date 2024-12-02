"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { productRemoved } from "../../redux/features/cart/cartSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CheckoutLinkUpSm({
  buttonName,
  cartItemId,
  cartItemSize,
  cartItemColor,
  children,
}) {
  const prodId = parseInt(cartItemId) || null;
  const prodSize = cartItemSize || null;
  const prodColor = cartItemColor || null;

  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(productRemoved({ prodId, prodSize, prodColor }));
  };

  const [openItem, setOpenItem] = useState(false);

  const clickOpenItem = () => {
    setOpenItem(true);
  };

  const handleCloseItem = () => {
    setOpenItem(false);
  };

  if (buttonName === "navHomeButt") {
    return (
      <Link href="/" className="custom-link">
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            width: "117px",
            height: "48px",
            color: "#3665f3",
            textDecoration: "underline",
            ":-webkit-any-link": {
              cursor: "pointer",
            },
            cursor: "pointer",
            top: "14px",
            left: 0,
            border: 0,
          }}
        >
          {children}
        </Box>
      </Link>
    );
  }

  if (buttonName === "removeCartItemButt") {
    return (
      <>
        <Box
          component="a"
          onClick={clickOpenItem}
          sx={{
            textDecoration: "underline",
            color: "#3665f3",
            cursor: "pointer",
            ":-webkit-any-link": {
              cursor: "pointer",
            },
          }}
        >
          {children}
        </Box>
        <Box>
          <Dialog
            open={openItem}
            onClose={handleCloseItem}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Retirer du panier"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Voulez-vous vraiment supprimer cet article du panier?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCloseItem}>
                Non
              </Button>
              <Button onClick={removeCartItem} autoFocus>
                Retirer
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </>
    );
  }
}
