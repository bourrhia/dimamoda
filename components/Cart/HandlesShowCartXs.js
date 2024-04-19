"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SvgIcon from "@mui/material/SvgIcon";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cartSpinnerAsync } from "../../redux/features/cart/cartSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { productUpdated } from "../../redux/features/cart/cartSlice";
import { productRemoved } from "../../redux/features/cart/cartSlice";

export const HandlesShowCartXs = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const qtUpdSchema = yup.object().shape({
    cartItemsArray: yup.array().of(
      yup.object().shape({
        itemQteeDisp: yup.number().nullable(),
        itemQteeUpd: yup
          .number()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required("Veuillez saisir la quantitée")
          .min(1, "La quantitée saisie est invalide")
          .max(
            yup.ref("itemQteeDisp"),
            ({ max }) => `La quantitée maximale disponible est : ${max}`
          )
          .nullable(),
      })
    ),
  });

  const cart = useSelector((state) => state.cart.products);

  const HandlesCart = ({ cart }) => {
    const [isCheckoutXs, setIsCheckoutXs] = useState(false);

    const [navHome, setNavHome] = useState(false);

    const handleNavHome = () => {
      try {
        setNavHome(true);
        router.push("/");
      } catch (err) {
        console.error("An error occurred while navigating to home: ", err);
      } finally {
        setNavHome(false);
      }
    };

    const {
      register,
      control,
      handleSubmit,
      setFocus,
      getValues,
      reset,
      trigger,
      setError,
      formState: { errors, isValid: isValidQtUpd, isDirty: isDirtyQtUpd },
    } = useForm({
      resolver: yupResolver(qtUpdSchema),
      defaultValues: {
        cartItemsArray:
          cart.map((item) => {
            return {
              prodId: item.prodId,
              itemQteeUpd: item.prodQtee,
              itemQteeDisp: item.prodQteeDisp,
              prodImage: item.prodImage,
              prodDesc: item.prodDesc,
              prodPrix: item.prodPrix,
              status: item.status,
            };
          }) ?? "",
      },
      mode: "onChange",
    });

    const { fields, append } = useFieldArray({
      control,
      name: "cartItemsArray",
    });

    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.prodQtee, 0);
    };

    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.prodQtee * item.prodPrix,
        0
      );
    };

    const mtLiv = 10;

    const cartMtLiv = parseFloat(Math.round(mtLiv * 100) / 100).toFixed(2);

    const TotalCartPrice = parseFloat(
      Math.round(getTotalPrice() * 100) / 100
    ).toFixed(2);

    let totalCommande = getTotalPrice() + mtLiv;

    const carttotalCommande = parseFloat(
      Math.round(totalCommande * 100) / 100
    ).toFixed(2);

    const onSubmit = async (data, event) => {
      event.preventDefault();

      try {
        setIsCheckoutXs(true);
        router.push("/checkout/checkoutXs");
      } catch (err) {
        console.error(
          "Un probleme est survenu pour faire passer une commande: ",
          err
        );
      } finally {
        setIsCheckoutXs(true);
      }
    };

    const handlesCartItems = (
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "block",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
        }}
      >
        {fields.map((item, index) => {
          const prodId = parseInt(item?.prodId);

          let CartItemPrice = parseFloat(
            Math.round(item?.prodPrix * 100) / 100
          ).toFixed(2);

          const onSubmitQteeUpd = async () => {
            const prodQuantity = parseInt(
              getValues(`cartItemsArray.[${index}].itemQteeUpd`)
            );

            const canSaveAdrLiv = [prodId, prodQuantity].every(Boolean);

            if (canSaveAdrLiv && prodQuantity <= parseInt(item.itemQteeDisp)) {
              try {
                dispatch(
                  productUpdated({
                    prodId,
                    prodQuantity,
                  })
                );
                await dispatch(
                  cartSpinnerAsync({
                    prodId,
                    prodQuantity,
                  })
                ).unwrap();
              } catch (err) {
                console.error(
                  "Un probleme est survenu pour enregistrer la quantité à commander: ",
                  err
                );
              }
            }
          };

          let isLoading = item?.status === "loading";

          const onDeleteCartItem = async () => {
            const prodQuantity = parseInt(
              getValues(`cartItemsArray.[${index}].itemQteeUpd`)
            );

            try {
              await dispatch(
                cartSpinnerAsync({
                  prodId,
                  prodQuantity,
                })
              ).unwrap();
              dispatch(productRemoved({ prodId }));
            } catch (err) {
              console.error(
                "Un probleme est survenu pour supprimer cet article : ",
                err
              );
            }
          };

          return (
            <Box key={index}>
              {item && (
                <Box
                  component="li"
                  sx={{
                    borderBottom: "1px solid #e5e5e5",

                    "&:last-child": {
                      borderBottom: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "none",
                    }}
                  >
                    <input {...register(`cartItemsArray.${index}.prodId`)} />
                  </Box>
                  <Box
                    sx={{
                      display: "none",
                    }}
                  >
                    <input
                      {...register(`cartItemsArray.${index}.itemQteeDisp`)}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: "1rem 0",
                      position: "relative",
                      listStyle: "none",
                    }}
                  >
                    <Box>
                      <Box>
                        <Box>
                          <Box
                            sx={{
                              display: "grid",
                              WebkitColumnGap: "8px",
                              columnGap: "8px",
                              gridTemplateColumns:
                                "repeat(8,calc(12.5%  - 8px + 1px))",
                              rowGap: "16px",
                            }}
                          >
                            <Box
                              sx={{
                                gridArea: "1/1/span 2/span 2",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "inline-block",
                                  position: "relative",
                                  width: "94px",
                                  "&::after": {
                                    content: '""',
                                    display: "block",
                                    marginTop: "100%",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    bottom: 0,
                                    left: 0,
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    overflow: "hidden",
                                    textAlign: "center",

                                    "&::after": {
                                      content: '""',
                                      display: "initial",
                                      verticalAlign: "middle",
                                      height: "94px",
                                    },
                                  }}
                                >
                                  <Image
                                    src={item?.prodImage}
                                    alt="Image"
                                    fill
                                    sizes="94px"
                                    style={{
                                      objectFit: "contain",
                                    }}
                                  />
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                gridArea: "1/3/span 1/span 6",
                              }}
                            >
                              <Box>
                                <Box
                                  component="h3"
                                  sx={{
                                    fontSize: ".875rem",
                                    margin: 0,
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    marginBlockStart: "1em",
                                    marginBlockEnd: "1em",
                                    marginInlineStart: "0px",
                                    marginInlineEnd: "0px",
                                    textAlign: "-webkit-match-parent",
                                    fontWeight: "bold",
                                    color: "#191919",
                                  }}
                                >
                                  {item?.prodDesc}
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                gridArea: "2/3/span 1/span 6",
                                minWidth: "-webkit-fill-available",
                                padding: 0,
                                textAlign: "end",
                              }}
                            >
                              <Box
                                sx={{
                                  paddingBottom: "0.5rem",
                                  rowGap: "0.25rem",
                                  textAlign: "start",
                                  display: "grid",
                                  columnGap: "8px",
                                  gridTemplateColumns:
                                    "repeat(8,calc(12.5% - 8px + 1px))",
                                }}
                              >
                                <Box
                                  sx={{
                                    gridArea: "2/1/span 1/span 8",
                                    textAlign: "start",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingBottom: 0,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        fontSize: "1rem",
                                        fontWeight: 400,
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          fontSize: "1rem",
                                          fontWeight: 400,
                                        }}
                                      >
                                        <Box component="span">
                                          <Box component="span">
                                            {CartItemPrice}&nbsp;dhs
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    gridArea: "1/1/span 1/span 8",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      padding: 0,
                                    }}
                                  >
                                    <Box>
                                      <Box
                                        component="span"
                                        sx={{
                                          display: "inline-block",
                                        }}
                                      >
                                        <Box
                                          component="label"
                                          htmlFor="qtee-cart"
                                          sx={{
                                            display: "inline-block",
                                            marginBottom: "0.125rem",
                                            marginRight: 0,
                                          }}
                                        >
                                          Qté
                                        </Box>
                                        <Box
                                          component="span"
                                          sx={{
                                            marginLeft: "0.5rem",
                                            display: "inline-block",
                                            color: "#f7f7f7",
                                            fontSize: "0.875rem",
                                            position: "relative",
                                          }}
                                        >
                                          <Box
                                            component="input"
                                            id="qtee-cart"
                                            name="quantity-cart"
                                            type="number"
                                            {...register(
                                              `cartItemsArray.${index}.itemQteeUpd`
                                            )}
                                            sx={{
                                              maxWidth: "3.875rem",
                                              fontSize: "16px!important",
                                              marginBottom: 0,
                                              WebkitAppearance: "none",
                                              MozAppearance: "none",
                                              appearance: "none",
                                              backgroundColor: "#f7f7f7",
                                              borderColor: "#8f8f8f",
                                              borderRadius: "8px",
                                              borderStyle: "solid",
                                              borderWidth: "1px",
                                              boxSizing: "border-box",
                                              color: "#191919",
                                              height: "40px",
                                              margin: 0,
                                              fontFamily: "inherit",
                                              padding: "0 16px",
                                              verticalAlign: "middle",
                                              paddingBlock: "1px",
                                              paddingInline: "2px",
                                              "&:focus": {
                                                outline: errors
                                                  .cartItemsArray?.[index]
                                                  ?.itemQteeUpd
                                                  ? "none"
                                                  : null,
                                                boxShadow: errors
                                                  .cartItemsArray?.[index]
                                                  ?.itemQteeUpd
                                                  ? "0px 0px 2px #e0103a"
                                                  : null,
                                              },
                                            }}
                                          ></Box>
                                        </Box>
                                        {isLoading ? (
                                          <CircularProgress
                                            size={20}
                                            sx={{
                                              margin: 0,
                                              padding: 0,
                                            }}
                                          />
                                        ) : null}
                                      </Box>

                                      {isDirtyQtUpd && (
                                        <Box
                                          sx={{
                                            fontSize: ".875rem",
                                            fontWeight: 400,
                                          }}
                                        >
                                          <Box
                                            component="span"
                                            sx={{
                                              fontSize: ".875rem",
                                              fontWeight: 400,
                                            }}
                                          >
                                            <Box
                                              component="button"
                                              type="button"
                                              onClick={(e) =>
                                                onSubmitQteeUpd(e)
                                              }
                                              sx={{
                                                backgroundColor: "initial",
                                                border: 0,
                                                color: "#191919",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                padding: 0,
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                                paddingBlock: "1px",
                                                paddingInline: "6px",
                                              }}
                                            >
                                              <Box>
                                                <Box>Modifier</Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      )}

                                      <Box
                                        role="alert"
                                        sx={{
                                          color: "#e0103a",
                                          fontSize: ".875rem",
                                          fontWeight: 400,
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            color: "#e0103a",
                                            fontSize: ".875rem",
                                            fontWeight: 400,
                                          }}
                                        >
                                          <Box component="span">
                                            <Box component="span">
                                              {
                                                errors.cartItemsArray?.[index]
                                                  ?.itemQteeUpd?.message
                                              }
                                            </Box>
                                          </Box>
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
                            marginBottom: 0,
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Box component="span">
                            <Box
                              component="button"
                              type="button"
                              aria-label="Supprimer"
                              onClick={(e) => onDeleteCartItem(e)}
                              sx={{
                                backgroundColor: "initial",
                                border: 0,
                                color: "#191919",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                padding: 0,
                                textDecoration: "underline",
                                cursor: "pointer",
                                paddingBlock: "1px",
                                paddingInline: "6px",
                              }}
                            >
                              <Box component="span">
                                <Box component="span">Supprimer</Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    );

    return (
      <Box tabIndex="-1" role="main">
        <Box
          sx={{
            display: "block",
            minWidth: "320px",
            margin: "0 auto",
            outline: "0 none",
          }}
        >
          <Box>
            <Box
              component="h1"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                margin: "0.5rem 0.5rem 1rem",
              }}
            >
              Panier
            </Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  background: "#fff",
                  borderBottom: "1px solid #e5e5e5",
                  borderTop: "1px solid #e5e5e5",
                  padding: "1rem 0.75rem",
                  position: "relative",
                }}
              >
                {cart.length > 0 ? (
                  <Box>
                    <Box
                      component="button"
                      aria-disabled="false"
                      type="submit"
                      sx={{
                        overflow: "hidden",
                        padding: "0 0.625rem",
                        position: "relative",
                        width: "100%",
                        borderRadius: "24px",
                        fontSize: "1rem",
                        minHeight: "48px",
                        backgroundColor: isCheckoutXs ? "#e7e9ec" : "#3665f3",
                        borderColor: "#3665f3",
                        color: isCheckoutXs ? "#0F1111" : "#fff",
                        fontWeight: 700,
                        border: "1px solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontFamily: "inherit",
                        margin: 0,
                        minWidth: "88px",
                        textAlign: "center",
                        textDecoration: "none",
                        verticalAlign: "bottom",
                        cursor: "pointer",
                        paddingBlock: "1px",
                        paddingInline: "6px",
                      }}
                    >
                      Confirmer l'achat&nbsp;&nbsp;&nbsp;
                      {isCheckoutXs && (
                        <CircularProgress
                          size={20}
                          sx={{
                            color: "#0F1111",
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <Box
                      component="a"
                      onClick={handleNavHome}
                      aria-disabled="false"
                      sx={{
                        overflow: "hidden",
                        padding: "0 0.625rem",
                        position: "relative",
                        width: "100%",
                        borderRadius: "24px",
                        fontSize: "1rem",
                        minHeight: "48px",
                        backgroundColor: isCheckoutXs ? "#e7e9ec" : "#3665f3",
                        borderColor: "#3665f3",
                        color: isCheckoutXs ? "#0F1111" : "#fff",
                        fontWeight: 700,
                        border: "1px solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontFamily: "inherit",
                        margin: 0,
                        minWidth: "88px",
                        textAlign: "center",
                        textDecoration: "none",
                        verticalAlign: "bottom",
                        cursor: "pointer",
                        paddingBlock: "1px",
                        paddingInline: "6px",
                      }}
                    >
                      Revenir à la page principale&nbsp;&nbsp;&nbsp;
                      {navHome && (
                        <CircularProgress
                          size={20}
                          sx={{
                            color: "#0F1111",
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                        }}
                      >
                        <Box component="span">
                          <Box component="span">
                            Total ({getItemsCount()}
                            &nbsp;articles):&nbsp;
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "right",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          textAlign: "right",
                        }}
                      >
                        <Box component="span">
                          <Box component="span">
                            {carttotalCommande}&nbsp;Dhs
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {cart.length === 0 ? (
                <h1>Votre panier est vide!</h1>
              ) : (
                <Box tabIndex="-1">
                  <Box
                    sx={{
                      borderBottom: 0,
                      borderLeft: 0,
                      borderRight: 0,
                      marginBottom: 0,
                      background: "#fff",
                      border: "1px solid #e5e5e5",
                      position: "relative",
                    }}
                  >
                    <Box>{handlesCartItems}</Box>
                  </Box>
                </Box>
              )}
              <Box
                sx={{
                  padding: "1rem 0.75rem",
                  paddingTop: "0.5rem",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.75rem",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box>
                      <Box
                        component="span"
                        sx={{
                          color: "#191919",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        <Box component="span">
                          <Box component="span">
                            Articles&nbsp;({getItemsCount()})
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        textAlign: "right",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          textAlign: "right",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        <Box component="span">
                          <Box component="span">{TotalCartPrice}&nbsp;Dhs</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box>
                      <Box
                        component="span"
                        sx={{
                          alignItems: "center",
                          display: "inline-flex",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                          fontSize: "0.875rem",
                        }}
                      >
                        <Box component="span">
                          <Box component="span">Livraison</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        textAlign: "right",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                        fontSize: "0.875rem",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          textAlign: "right",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                          fontSize: "0.875rem",
                        }}
                      >
                        <Box component="span">
                          <Box component="span"> {cartMtLiv}&nbsp;Dhs</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      margin: "0.75rem 0",
                      borderBottom: "1px solid #e5e5e5",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                        }}
                      >
                        <Box component="span">
                          <Box component="span">Total</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "right",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          textAlign: "right",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                        }}
                      >
                        <Box component="span">
                          <Box component="span">
                            {carttotalCommande}&nbsp;Dhs
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {cart.length > 0 ? (
                  <Box
                    sx={{
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box
                      component="button"
                      aria-disabled="false"
                      type="submit"
                      sx={{
                        overflow: "hidden",
                        padding: "0 0.625rem",
                        position: "relative",
                        width: "100%",
                        borderRadius: "24px",
                        fontSize: "1rem",
                        minHeight: "48px",
                        borderColor: "#3665f3",
                        backgroundColor: isCheckoutXs ? "#e7e9ec" : "#3665f3",
                        color: isCheckoutXs ? "#0F1111" : "#fff",
                        fontWeight: 700,
                        border: "1px solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontFamily: "inherit",
                        margin: 0,
                        minWidth: "88px",
                        textAlign: "center",
                        textDecoration: "none",
                        verticalAlign: "bottom",
                        cursor: "pointer",
                        paddingBlock: "1px",
                        paddingInline: "6px",
                      }}
                    >
                      Confirmer l'achat&nbsp;&nbsp;&nbsp;
                      {isCheckoutXs && (
                        <CircularProgress
                          size={20}
                          sx={{
                            color: "#0F1111",
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box
                      component="a"
                      aria-disabled="false"
                      onClick={handleNavHome}
                      sx={{
                        overflow: "hidden",
                        padding: "0 0.625rem",
                        position: "relative",
                        width: "100%",
                        borderRadius: "24px",
                        fontSize: "1rem",
                        minHeight: "48px",
                        borderColor: "#3665f3",
                        backgroundColor: isCheckoutXs ? "#e7e9ec" : "#3665f3",
                        color: isCheckoutXs ? "#0F1111" : "#fff",
                        fontWeight: 700,
                        border: "1px solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontFamily: "inherit",
                        margin: 0,
                        minWidth: "88px",
                        textAlign: "center",
                        textDecoration: "none",
                        verticalAlign: "bottom",
                        cursor: "pointer",
                        paddingBlock: "1px",
                        paddingInline: "6px",
                      }}
                    >
                      Revenir à la page principale&nbsp;&nbsp;&nbsp;
                      {navHome && (
                        <CircularProgress
                          size={20}
                          sx={{
                            color: "#0F1111",
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return <HandlesCart cart={cart} />;
};

export default HandlesShowCartXs;
