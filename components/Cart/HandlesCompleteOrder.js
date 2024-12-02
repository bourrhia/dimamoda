"use client";

import React, { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useRouter } from "next/navigation";
import { useGetOrderNumberQuery } from "../../redux/features/api/apiSlice";
import { allProductRemoved } from "../../redux/features/cart/cartSlice";
import { orderRemoved } from "../../redux/features/cart/cartSlice";
import { productRemoved } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import ShowLoading from "../Loading/ShowLoading";

const useGetOrderNum = (orderId) => {
  const [orderNumber, setOrderNumber] = useState(null);

  const {
    data: getOrderNumberData,
    isFetching: getOrderNumberFetching,
    isLoading: getOrderNumberLoading,
    isError: getOrderNumberIsError,
    error: getOrderNumberError,
  } = useGetOrderNumberQuery(orderId);

  useEffect(() => {
    if (getOrderNumberData) {
      setOrderNumber(getOrderNumberData);
    }
  }, [getOrderNumberData]);

  if (getOrderNumberIsError) {
    console.error("Error fetching order number", getOrderNumberError);
  }

  return orderNumber;
};

const HandlesCompleteOrder = ({
  order_Id,
  cartItemId,
  cartItemSize,
  cartItemColor,
}) => {
  const router = useRouter();

  const NumTel = "06 61 44 91 63";

  const [openDialogConfOrder, setOpenDialogConfOrder] = useState(true);
  const [navHome, setNavHome] = useState(false);

  const orderNumber = useGetOrderNum(order_Id);

  const prodId = parseInt(cartItemId) || null;
  const prodSize = cartItemSize || null;
  const prodColor = cartItemColor || null;

  const dispatch = useDispatch();

  const removeAllItems = () => {
    if (prodId) {
      dispatch(productRemoved({ prodId, prodSize, prodColor }));
      dispatch(orderRemoved());
    } else {
      dispatch(allProductRemoved());
    }
  };

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleCloseConf = () => {
    try {
      removeAllItems();
      setOpenDialogConfOrder(false);
      router.push("/");
    } catch (err) {
      console.error("An error occurred while navigating to home: ", err);
    } finally {
      setNavHome(true);
    }
  };

  return (
    <>
      {navHome && <ShowLoading />}
      {orderNumber ? (
        <Dialog
          fullScreen
          open={openDialogConfOrder}
          onClose={handleCloseConf}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseConf}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Finalisation de la commande
              </Typography>
              <Button autoFocus color="inherit" onClick={handleCloseConf}>
                Ok
              </Button>
            </Toolbar>
          </AppBar>
          <DialogTitle id="responsive-dialog-title">
            {"Réception de commande"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Veuillez appeler le numéro de téléphone &nbsp;
              <strong>{NumTel}</strong> pour recevoire votre commande numéro{" "}
              <strong> &nbsp;{orderNumber}</strong>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          fullScreen
          open={openDialogConfOrder}
          onClose={handleCloseConf}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseConf}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Finalisation de la commande En cours ....
              </Typography>
            </Toolbar>
            <ShowLoading />
          </AppBar>
        </Dialog>
      )}
    </>
  );
};

export default HandlesCompleteOrder;
