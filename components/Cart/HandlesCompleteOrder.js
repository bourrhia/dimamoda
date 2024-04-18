"use client";

//import React from "react";
import React, { useState, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";

const useGetOrderNum = (orderId) => {
  // const [orderData, setOrderData] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  // const { data, isError, error } = useGetOrderNumberQuery(orderId);

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

// const HandlesCompleteOrder = ({ params }) => {
//const orderNum = JSON.parse(JSON.stringify(params));
const HandlesCompleteOrder = ({ order_Id, cartItemId }) => {
  // const order_Id = params.orderId;

  const router = useRouter();

  const [openDialogConfOrder, setOpenDialogConfOrder] = useState(true);
  const [navHome, setNavHome] = useState(false);

  const orderNumber = useGetOrderNum(order_Id);

  //const searchParams = useSearchParams();

  // const cartItemId = searchParams.get("cartProdId") || null;

  const prodId = parseInt(cartItemId) || null;

  const dispatch = useDispatch();

  const removeAllItems = () => {
    // dispatch(allProductRemoved());
    if (prodId) {
      dispatch(productRemoved(prodId));
      dispatch(orderRemoved());
    } else {
      dispatch(allProductRemoved());
    }
  };

  /* const removeOneItem = (prodId) => {
    dispatch(productRemoved(prodId));
    dispatch(orderRemoved());
  };*/

  /* useEffect(
    () => {
      if (cartItemId) {
        removeOneItem(cartItemId);
      } else {
        removeAllItems();
      }
    },
    [cartItemId]
  );*/

  /*useEffect(() => {
    removeAllItems();
  }, []);*/

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  /* const handleCloseConf = () => {
    setOpenDialogConfOrder(false);
    router.push("/");
  };*/

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
      {navHome && (
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
      )}
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
              <strong>06 61 55 87 65</strong> pour recevoire votre commande
              numéro <strong> &nbsp;{orderNumber}</strong>
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
                Finalisation de la commande
              </Typography>
            </Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <CircularProgress size={40} />
            </Box>
            {/*<Typography variant="h6" component="div">
              Désolé, on n'a pas pu finaliser votre commande. Veuillez
              recommencer de nouveau.
            </Typography> */}
          </AppBar>
        </Dialog>
      )}
    </>
  );
};

export default HandlesCompleteOrder;
