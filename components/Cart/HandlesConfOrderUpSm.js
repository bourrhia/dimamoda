"use client";

import React, { useState, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Slide from "@mui/material/Slide";
import { useRouter } from "next/navigation";
import { useGetOrderNumberQuery } from "../../redux/features/api/apiSlice";
import CircularProgress from "@mui/material/CircularProgress";
//import { useSearchParams } from "next/navigation";

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

//const HandlesConfOrderUpSm = async ({ params }) => {
const HandlesConfOrderUpSm = ({ order_Id, cartItemId }) => {
  //const order_Id = params.orderId;

  const router = useRouter();

  const [openConfOrder, setOpenConfOrder] = useState(true);
  const [navCompleteOrder, setNavCompleteOrder] = useState(false);

  const orderNumber = useGetOrderNum(order_Id);

  //const searchParams = useSearchParams();

  // const cartItemId = searchParams.get("cartProdId") || null;

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleCloseConfOrder = () => {
    router.back();
  };

  const confAndPayOrder = async (order_Id) => {
    try {
      if (order_Id) {
        /* router.push(
          `/completeOrder/${encodeURIComponent(
            order_Id
          )}/?cartProdId=${encodeURIComponent(cartItemId)}`
        );*/
        router.push(
          `/completeOrder/${encodeURIComponent(order_Id)}/${encodeURIComponent(
            cartItemId
          )}`
        );
      }
    } catch (err) {
      console.error(
        "An error occurred while navigating to complete and finalise an order: ",
        err
      );
    } finally {
      setNavCompleteOrder(true);
    }
  };

  const showConfirmOrder = () => {
    setOpenConfOrder(false);

    if (order_Id) {
      confAndPayOrder(order_Id);
    }
  };

  //const orderNumText = `Numéro ${encodeURIComponent(orderNumber)}`;
  /* const orderNumText = orderNumber
    ? `Numéro ${encodeURIComponent(orderNumber)}`
    : null;*/

  return (
    <>
      {navCompleteOrder && (
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
          open={openConfOrder}
          onClose={handleCloseConfOrder}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <Button autoFocus color="inherit" onClick={handleCloseConfOrder}>
                Annuler
              </Button>
              <Typography
                sx={{
                  ml: 2,
                  flex: 1,
                }}
                variant="h6"
                component="div"
              >
                Confirmation de commande
              </Typography>
              <Button autoFocus color="inherit" onClick={showConfirmOrder}>
                Confirmer
              </Button>
            </Toolbar>
          </AppBar>
          <DialogTitle id="responsive-dialog-title">
            {"Confirmer votre commande avant finalisation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Veuillez s.V.p confirmer votre commande Numéro&nbsp;
              <strong> {orderNumber}</strong>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          fullScreen
          open={openConfOrder}
          onClose={handleCloseConfOrder}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <Button
                autoFocus
                color="inherit"
                onClick={handleCloseConfOrder}
                sx={{
                  ml: 2,
                  flex: 1,
                }}
              >
                Annuler
              </Button>
              <Typography
                sx={{
                  ml: 2,
                  flex: 1,
                }}
                variant="h6"
                component="div"
              >
                Confirmation de commande
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
                // zIndex: "9999",
              }}
            >
              <CircularProgress size={40} />
            </Box>
            {/* <Typography variant="h6" component="div">
              Désolé, on n'a pas pu créer votre commande. Veuillez recommencer
              de nouveau.
            </Typography> */}
          </AppBar>
        </Dialog>
      )}
    </>
  );
};

export default HandlesConfOrderUpSm;
