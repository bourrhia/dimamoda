"use client";

import React, { useState, Suspense } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CircularProgress from "@mui/material/CircularProgress";
//import QteeSelectXs from "../ProductListAllDevices/QteeSelectXs";
import ProdLinkMobile from "./ProdLinkMobile";
//import { Suspense } from "react";
import ShowLoading from "../../Loading/ShowLoading";
//import { Suspense } from "react";
//import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { productAdded } from "../../../redux/features/cart/cartSlice";

export default function HandlesCartItemXs({
  prodId,
  prodImage,
  prodDesc,
  prodPrix,
  prodEtat,
  status,
  prodQteeDisp,
  children,
}) {
  const router = useRouter();
  const [prodQtee, setProdQtee] = useState(1);
  const [isNavOpenCart, setIsNavOpenCart] = useState(false);
  const [isNavCheckout, setIsNavCheckout] = useState(false);

  const dispatch = useDispatch();

  let qteemax = prodQteeDisp || 0;

  const vAchatImmédiatButt = "achatImmédiatButt";
  const vAjouterPanierButt = "ajouterPanierButt";

  const options = [];
  for (let i = 1; i <= qteemax; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleChange = (event) => {
    setProdQtee(parseInt(event.target.value));
  };

  const handleNavOpenCart = async () => {
    try {
      setIsNavOpenCart(true);
      router.push("/cart/showCartXs");
    } catch (err) {
      // Handle any errors that might occur during navigation
      console.error("An error occurred while navigating to showCart: ", err);
    } finally {
      // setIsNavOpenCart(false);

      setIsNavOpenCart(true);
    }
  };

  const clickOpenCart = async (e) => {
    e.preventDefault();
    dispatch(
      productAdded({
        prodId,
        prodImage,
        prodDesc,
        prodQtee,
        prodPrix,
        prodEtat,
        status,
        prodQteeDisp,
      })
    );

    await handleNavOpenCart();
  };

  ///////////////////////////////////////////

  const handleNavCheckout = () => {
    try {
      setIsNavCheckout(true);
      router.push(
        `/checkout/checkoutXs/?cartProdId=${encodeURIComponent(prodId)}`
      );
    } catch (err) {
      // Handle any errors that might occur during navigation
      console.error("An error occurred while navigating to checkout : ", err);
    } finally {
      setIsNavCheckout(true);
    }
  };

  const clickBuyNow = (e) => {
    e.preventDefault();
    dispatch(
      productAdded({
        prodId,
        prodImage,
        prodDesc,
        prodQtee,
        prodPrix,
        prodEtat,
        status,
        prodQteeDisp,
      })
    );

    handleNavCheckout();
  };

  return (
    <Box>
      <Box
        sx={{
          marginBottom: "0.7rem",
        }}
      >
        {/* Start ImageCartItem */}

        {children}

        {/* End ImageCartItem */}
        <Box>
          <Box>
            <Box>
              <Box
                sx={{
                  marginTop: "0.5rem",
                  padding: "0 1rem",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.7rem",
                    marginTop: "0.7rem",
                  }}
                >
                  <Box
                    sx={{
                      margin: "16px 0",
                      clear: "both",
                      border: "0 solid #d3d3d3",
                      fontWeight: 400,
                      borderRadius: "3px",
                      width: "100%",
                      color:
                        "var(--select-foreground-color,var(--color-text-default,#111820))",
                      fontSize: ".875rem",
                      position: "relative",

                      "&::after": {
                        top: "0.7rem",
                      },

                      "&::after": {
                        content: '""',
                      },
                    }}
                  >
                    <Box
                      component="label"
                      htmlFor="quantity_select"
                      sx={{
                        margin: 0,
                        color: "#111820",
                        display: "-webkit-box",
                        display: "-ms-flexbox",
                        display: "flex",
                        padding: 0,
                        cursor: "default",
                        fontWeight: 400,
                        fontSize: ".875rem",

                        "& > span:first-of-type": {
                          minWidth: "85px",
                          MsFlexPreferredSize: "85px",
                          flexBasis: "85px",
                          paddingRight: "15px",
                          display: "-webkit-box",
                          display: "-ms-flexbox",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          MsFlexAlign: "center",
                          alignItems: "center",
                          boxSizing: "content-box",
                        },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: "#111820",
                        }}
                      >
                        <Box component="span">Quantité</Box>
                      </Box>
                      {/* Insert QteeSelectXs */}
                      <Box
                        component="select"
                        // value="2"
                        //value={selected}
                        value={prodQtee}
                        onChange={handleChange}
                        aria-label="Quantité"
                        id="quantity_select"
                        ////////
                        name="quantity_select"
                        // autoComplete="off"
                        // tabIndex="0"
                        sx={{
                          borderRadius: "8px",
                          border: "1px solid #e5e5e5",
                          color: "#111820",
                          lineHeight: "normal",

                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                          background: "#fff",
                          boxSizing: "border-box",
                          height: "40px",
                          margin: 0,
                          padding: "0 40px 0 16px",
                          fontWeight: 400,
                          fontSize: "14px",
                          width: "100%",
                          WebkitBoxFlex: 1,
                          flexGrow: 1,
                          verticalAlign: "middle",

                          //
                          overflow: "visible !important",
                        }}
                      >
                        {options}
                      </Box>
                      <Box
                        component="span"
                        aria-hidden="true"
                        sx={{
                          margin: "0!important",
                          fontSize: ".875rem",

                          //

                          right: "1rem",
                          fontSize: ".65rem",
                          color: "#111820",
                          position: "absolute",
                          top: "0.7rem",
                          display: "inline-block",
                          verticalAlign: "top",
                          pointerEvents: "none",
                        }}
                      >
                        <KeyboardArrowDownOutlinedIcon />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "16px 0",
        }}
      >
        <Box
          sx={{
            marginTop: "1rem",
            padding: "0 1rem",
          }}
        ></Box>
        <Box
          sx={{
            marginTop: "0.5rem",
            padding: "0 1rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-block",
                width: "100%",
              }}
            >
              {/*  <ProdLinkMobile buttonName={vAchatImmédiatButt}> */}
              <Box
                //  component="a"
                component="button"
                onClick={clickBuyNow}
                disabled={isNavCheckout}
                sx={{
                  // backgroundColor: "#3665f3",
                  backgroundColor: isNavCheckout ? "#e7e9ec" : "#3665f3",
                  //color: "#fff",
                  color: isNavCheckout ? "#0F1111" : "#fff",
                  fontWeight: "bold",
                  // border: "1px solid #3665f3",
                  border: isNavCheckout
                    ? "1px solid #e7e9ec"
                    : "1px solid #3665f3",
                  borderRadius: "3rem",
                  minHeight: "3rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  padding: "0 16px",
                  lineHeight: "48px",
                  fontSize: "16px",
                  height: "48px",
                  boxSizing: "border-box",
                  display: "inline-block",
                  textDecoration: "none",
                  fontFamily: "inherit",
                  margin: 0,
                  textAlign: "center",
                  verticalAlign: "middle",
                  minWidth: "auto",
                  outlineColor: "#111820",
                  width: "100%",

                  cursor: "pointer",

                  ":WebkitAnyLink": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    //  color: "#fff",
                    color: isNavCheckout ? "#0F1111" : "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Achat immédiat&nbsp;&nbsp;&nbsp;
                  {isNavCheckout && (
                    <CircularProgress
                      size={20}
                      sx={{
                        textAlign: "center",
                        top: "50%", // Center vertically
                        left: "50%", // Center horizontally
                        marginTop: "-10px", // Adjust for half of CircularProgress size
                        // marginLeft: "-10px", // Adjust for half of CircularProgress size*/
                        marginLeft: "-5px",
                      }}
                    />
                  )}
                </Box>
                <Box
                  component="span"
                  sx={{
                    "@keyframes spin": {
                      "0%": {
                        WebkitTransform: "rotate(0)",
                        transform: "rotate(0)",
                      },

                      "100%": {
                        WebkitTransform: "rotate(360deg)",
                        transform: "rotate(360deg)",
                      },
                    },
                    display: "none",
                    WebkitAnimation: "spin 600ms linear infinite",
                    animation: "spin 600ms linear infinite",
                    height: "30px",
                    width: "30px",
                  }}
                >
                  <CircularProgress
                    sx={{
                      "&:only-child": {
                        margin: 0,
                      },

                      height: "inherit",
                      maxHeight: "inherit",
                      maxWidth: "inherit",
                      width: "inherit",
                      alignSelf: "center",
                      flexShrink: 0,
                      color: "#fff",
                      fill: "#fff",
                      display: "inline-block",
                      pointerEvents: "none",
                      stroke: "currentColor",
                      strokeWidth: 0,
                      verticalAlign: "middle",
                    }}
                  ></CircularProgress>
                </Box>
              </Box>
              {/* </ProdLinkMobile> */}
            </Box>

            <Box
              sx={{
                marginTop: "0.5rem",
                display: "inline-block",
                width: "100%",
              }}
            >
              {/* <ProdLinkMobile buttonName={vAjouterPanierButt}> */}
              <Box
                //component="a"
                component="button"
                onClick={clickOpenCart}
                disabled={isNavOpenCart}
                sx={{
                  border: "1px solid #3665f3",
                  borderRadius: "3rem",
                  color: "#3665f3",
                  minHeight: "3rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  padding: "0 16px",
                  lineHeight: "48px",
                  fontSize: "16px",
                  height: "48px",
                  boxSizing: "border-box",
                  display: "inline-block",
                  textDecoration: "none",
                  backgroundColor: "#fff",
                  fontFamily: "inherit",
                  fontWeight: "normal",
                  margin: 0,
                  textAlign: "center",
                  verticalAlign: "middle",
                  minWidth: "auto",
                  width: "100%",
                  cursor: "pointer",
                  ":WebkitAnyLink": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#3665f3",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    fontWeight: "normal",
                    textAlign: "center",

                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    lineHeight: "20px",
                    letterSpacing: "normal",
                    WebkitFontSmoothing: "antialiased",
                    MozFontSmoothing: "antialiased",
                    MsFontSmoothing: "antialiased",
                    WebkitTextSizeAdjust: "none",
                    MozTextSizeAdjust: "none",
                    MsTextSizeAdjust: "none",
                    textSizeAdjust: "none",
                    verticalAlign: "middle",
                  }}
                >
                  Ajouter au panier&nbsp;&nbsp;&nbsp;
                  {isNavOpenCart && (
                    <CircularProgress
                      size={20}
                      sx={{
                        textAlign: "center",
                        top: "50%", // Center vertically
                        left: "50%", // Center horizontally
                        marginTop: "-10px", // Adjust for half of CircularProgress size
                        // marginLeft: "-10px", // Adjust for half of CircularProgress size*/
                        marginLeft: "-5px",
                      }}
                    />
                  )}
                </Box>
                <Box
                  component="span"
                  sx={{
                    "@keyframes spin": {
                      "0%": {
                        WebkitTransform: "rotate(0)",
                        transform: "rotate(0)",
                      },

                      "100%": {
                        WebkitTransform: "rotate(360deg)",
                        transform: "rotate(360deg)",
                      },
                    },
                    display: "none",
                    WebkitAnimation: "spin 600ms linear infinite",
                    animation: "spin 600ms linear infinite",
                    height: "30px",
                    width: "30px",
                    color: "#3665f3",
                    fontSize: "16px",
                    fontWeight: "normal",
                    textAlign: "center",

                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    lineHeight: "20px",
                    letterSpacing: "normal",
                    WebkitFontSmoothing: "antialiased",
                    MozFontSmoothing: "antialiased",
                    MsFontSmoothing: "antialiased",
                    WebkitTextSizeAdjust: "none",
                    MozTextSizeAdjust: "none",
                    MsTextSizeAdjust: "none",
                    textSizeAdjust: "none",
                    verticalAlign: "middle",
                  }}
                >
                  <CircularProgress
                    sx={{
                      "@keyframes spin": {
                        "0%": {
                          WebkitTransform: "rotate(0)",
                          transform: "rotate(0)",
                        },

                        "100%": {
                          WebkitTransform: "rotate(360deg)",
                          transform: "rotate(360deg)",
                        },
                      },
                      //  display: "none",
                      WebkitAnimation: "spin 600ms linear infinite",
                      animation: "spin 600ms linear infinite",
                      height: "30px",
                      width: "30px",
                      color: "#3665f3",
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",

                      boxSizing: "border-box",
                      margin: 0,
                      padding: 0,
                      lineHeight: "20px",
                      letterSpacing: "normal",
                      WebkitFontSmoothing: "antialiased",
                      MozFontSmoothing: "antialiased",
                      MsFontSmoothing: "antialiased",
                      WebkitTextSizeAdjust: "none",
                      MozTextSizeAdjust: "none",
                      MsTextSizeAdjust: "none",
                      textSizeAdjust: "none",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
              </Box>

              {/* </ProdLinkMobile> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
