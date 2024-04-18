"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { productAdded } from "../../../redux/features/cart/cartSlice";
import CircularProgress from "@mui/material/CircularProgress";

export default function HandlesCartItemUpSm({
  buttonName,
  prodId,
  prodImage,
  prodDesc,
  prodPrix,
  prodEtat,
  status,
  prodQteeDisp,
}) {
  const router = useRouter();

  const [prodQtee, setProdQtee] = useState(1);
  const [isNavOpenCart, setIsNavOpenCart] = useState(false);
  const [isNavCheckout, setIsNavCheckout] = useState(false);

  const dispatch = useDispatch();

  let qteemax = prodQteeDisp || 0;

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
      router.push("/cart/showCart");
    } catch (err) {
      console.error("An error occurred while navigating to showCart: ", err);
    } finally {
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
    setIsNavOpenCart(true);
    await handleNavOpenCart();
  };

  const handleNavCheckout = () => {
    setIsNavCheckout(true);
    try {
      router.push(
        `/checkout/checkoutUpSm/?cartProdId=${encodeURIComponent(prodId)}`
      );
    } catch (err) {
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
    <>
      <Box>
        <Box
          sx={{
            textAlign: "left!important",
            marginBottom: "12px!important",
          }}
        >
          <Box
            sx={{
              padding: "0!important",
              marginBottom: "0!important",
              textAlign: "left!important",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            <Box component="span">
              <Box
                sx={{
                  marginBottom: "12px!important",
                  width: "100%",

                  "&::after,&::before": {
                    display: "table",
                    content: '""',
                    lineHeight: 0,
                    fontSize: 0,
                  },

                  "&::after": {
                    clear: "both",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    marginRight: 0,
                    float: "left",
                    minHight: "1px",
                    overflow: "visible",
                    textAlign: "left!important",
                    display: "block",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      component="label"
                      htmlFor="quantité"
                      sx={{
                        paddingRight: "5px",
                        opacity: 1,
                        zIndex: "auto",
                        position: "static",
                        display: "inline",
                        fontWeight: "normal",
                        maxWidth: "100%",
                        left: 0,
                        paddingLeft: "2px",
                        paddingBottom: "2px",
                        cursor: "default",
                      }}
                    >
                      Quantité :
                    </Box>

                    <Box
                      component="select"
                      name="quantité"
                      autoComplete="off"
                      id="quantité"
                      tabIndex="0"
                      value={prodQtee}
                      onChange={handleChange}
                      sx={{
                        opacity: 1,
                        filter: "alpha(opacity=100)",
                        zIndex: "auto",
                        position: "static",
                        display: "inline",
                        fontWeight: "normal",
                        maxWidth: "100%",
                        left: 0,
                        border: "1px solid #DDD",
                        borderRadius: "4px 4px 4px 4px",
                        padding: "3px",
                        WebkitTransition: "all .1s linear",
                        transition: "all .1s linear",
                        lineHeight: "19px",
                        color: "#0F1111",
                        margin: 0,
                        fontSize: "100%",
                        verticalAlign: "middle",

                        ":select:not(:-internal-list-box)": {
                          overflow: "visible !important",
                        },
                      }}
                    >
                      {options}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          component="button"
          onClick={clickOpenCart}
          disabled={isNavOpenCart}
          sx={{
            backgroundColor: "transparent",
            border: "none",
            outline: 0,
            textAlign: "center!important",
            width: "100%!important",
          }}
        >
          <Box component="span">
            <Box
              component="span"
              sx={{
                display: "block",
                borderRadius: "20px",
                boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)",
                background: isNavOpenCart ? "#e7e9ec" : "#FFD814",
                borderColor: isNavOpenCart ? "#8d9096" : "#FCD200",
                borderStyle: "solid",
                borderWidth: "1px",
                cursor: "pointer",
                padding: 0,
                textAlign: "center",
                textDecoration: "none!important",
                verticalAlign: "middle",
                marginBottom: "8px!important",
              }}
            >
              <Box
                component="span"
                sx={{
                  borderRadius: "19px",
                  background: "0 0",
                  boxShadow: "none",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  height: "29px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{
                    color: "#0F1111",
                    backgroundColor: "transparent",
                    border: 0,
                    display: "block",
                    fontSize: "13px",
                    lineHeight: "29px",
                    margin: 0,
                    outline: 0,
                    padding: "0 10px 0 11px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ajouter au panier&nbsp;
                  {isNavOpenCart && (
                    <CircularProgress
                      size={20}
                      sx={{
                        textAlign: "center",
                        top: "50%",
                        left: "50%",
                      }}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box>
          <Box
            component="button"
            onClick={clickBuyNow}
            disabled={isNavCheckout}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              outline: 0,
              textAlign: "center!important",
              width: "100%!important",
            }}
          >
            <Box
              sx={{
                marginBottom: "12px!important",
              }}
            >
              <Box
                component="span"
                sx={{
                  "&:last-child": {
                    marginBottom: 0,
                  },
                  display: "block",
                  borderRadius: "20px",
                  boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)",
                  background: "#FFA41C",
                  borderColor: "#FF8F00",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "center",
                  textDecoration: "none!important",
                  verticalAlign: "middle",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    borderRadius: "19px",
                    background: "0 0",
                    boxShadow: "none",
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    height: "29px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{
                      color: "#0F1111",
                      backgroundColor: "transparent",
                      border: 0,
                      display: "block",
                      fontSize: "13px",
                      lineHeight: "29px",
                      margin: 0,
                      outline: 0,
                      padding: "0 10px 0 11px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Acheter maintenant
                    {isNavCheckout && (
                      <CircularProgress
                        size={20}
                        sx={{
                          textAlign: "center",
                          top: "50%",
                          left: "50%",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
