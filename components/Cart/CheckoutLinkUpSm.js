"use client";

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { productRemoved } from "../../redux/features/cart/cartSlice";
//import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//import { useRouter } from "next/navigation";

export default function CheckoutLinkUpSm({ buttonName, cartItemId, children }) {
  // const router = useRouter();
  const prodId = parseInt(cartItemId);

  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(productRemoved({ prodId }));
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
          //component="a"
          sx={{
            //display: "block",
            overflow: "hidden",
            position: "relative",
            //textIndent: "-9999px",
            width: "117px",
            height: "48px",
            color: "#3665f3",
            textDecoration: "underline",
            ":-webkit-any-link": {
              cursor: "pointer",
            },
            cursor: "pointer",
            // Add
            //clip: "rect(47px, 118px, 95px, 0px)",
            //position: "absolute",
            //top: "-47px",
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
            //fullScreen={fullScreen}
            // style={{ backgroundColor: "transparent" }}
            open={openItem}
            onClose={handleCloseItem}
            aria-labelledby="responsive-dialog-title"
            /*BackdropProps={{
              style: {
                background: "rgba(15, 17, 17,0.1)",
              },
            }}*/
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
