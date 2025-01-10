"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SvgIcon from "@mui/material/SvgIcon";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddOrdersMutation } from "../../redux/features/api/apiSlice";
import { setOrderNumber } from "../../redux/features/cart/cartSlice";
import { useGetOrderShipAdrQuery } from "../../redux/features/api/apiSlice";
import { useUpdateOrderMutation } from "../../redux/features/api/apiSlice";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";
import { cartSpinnerAsync } from "../../redux/features/cart/cartSlice";
import { productRemoved } from "../../redux/features/cart/cartSlice";
import ShowLoading from "../Loading/ShowLoading";

const useGetShipAdr = (orderId) => {
  const [shipAdr, setShipAdr] = useState(null);

  const {
    data: shipAdrData,
    isFetching: shipAdrFetching,
    isLoading: shipAdrLoading,
    isError: shipAdrIsError,
    error: shipAdrError,
  } = useGetOrderShipAdrQuery(orderId);

  useEffect(() => {
    if (shipAdrData) {
      setShipAdr(shipAdrData);
    } else {
      setShipAdr(null);
    }
  }, [shipAdrData]);

  return shipAdr;
};

export const HandlesCheckoutXs = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const regionsOptions = [
    "Tanger-Tétouan-Al Hoceima",
    "L'Oriental",
    "Fès-Meknès",
    "Beni Mellal-Khénifra",
    "Rabat-Salé-Kénitra",
    "Casablanca-Settat",
    "Marrakech-Safi",
    "Drâa-Tafilalet",
    "Souss-Massa",
    "Guelmim-Oued Noun",
    "Laâyoune-Sakia El Hamra",
    "Dakhla-Oued Ed Dahab",
  ];

  const regionsSelect = regionsOptions.map((opt, index) => (
    <Box component="option" value={opt} key={index}>
      {opt}
    </Box>
  ));

  function CustLockOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <LockOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustExpandMoreIcon(props) {
    return (
      <SvgIcon {...props}>
        <KeyboardArrowDownOutlinedIcon />
      </SvgIcon>
    );
  }

  const [navHome, setNavHome] = useState(false);

  const handleNavHome = () => {
    try {
      setNavHome(true);
      router.push("/");
    } catch (err) {
      console.error("An error occurred while navigating to home: ", err);
    } finally {
      setNavHome(true);
    }
  };

  const [navConfirmOrder, setNavConfirmOrder] = useState(false);

  const searchParams = useSearchParams();

  const cartItemId = searchParams.get("cartProdId") || null;
  const cartItemSize = searchParams.get("cartProdSize") || null;
  const cartItemColor = searchParams.get("cartProdColor") || null;

  const allCart = useSelector((state) => state.cart);

  const oneItemCart =
    useSelector((state) =>
      state.cart.products.find(
        (product) => product?.prodId === parseInt(cartItemId)
      )
    ) || null;

  const cart = cartItemId ? oneItemCart : allCart?.products;
  const orderId = allCart?.orderId;

  const existOneItemCart = cartItemId
    ? oneItemCart?.prodId
      ? true
      : false
    : false;
  const existProdsCart = allCart?.products.length > 0 ? true : false;

  const notEmptyCart = cartItemId ? existOneItemCart : existProdsCart;

  const handleNavConfirmOrder = (orderId) => {
    try {
      setNavConfirmOrder(true);

      router.push(
        `/confirmOrderXs/${encodeURIComponent(orderId)}/${encodeURIComponent(
          cartItemId
        )}/${encodeURIComponent(cartItemSize)}/${encodeURIComponent(
          cartItemColor
        )}`
      );
    } catch (err) {
      console.error(
        "An error occurred while navigating to confirm an order: ",
        err
      );
    } finally {
      setNavConfirmOrder(true);
    }
  };

  let vtel = "";
  let vnom = "";
  let vprenom = "";
  let vadresseLiv = "";
  let vadresseLiv2 = "";
  let vville = "";
  let vcodePostal = "";
  let vregion = "";
  let vemail = "";

  const fetchedShipAdr = useGetShipAdr(orderId);

  if (fetchedShipAdr) {
    ({
      tel: vtel,
      nom: vnom,
      prenom: vprenom,
      adresseLiv: vadresseLiv,
      adresseLiv2: vadresseLiv2,
      ville: vville,
      codePostal: vcodePostal,
      region: vregion,
      email: vemail,
    } = fetchedShipAdr);
  }

  const VerifierPanier = () => {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    const adrLivSchema = yup.object().shape({
      prenom: yup
        .string("Le prénom doit être une chaîne de caractères")
        .max(25, "Le prénom a un maximum de 25 caractères")
        .required("Veuillez saisir votre prénom")
        .nullable(),
      nom: yup
        .string("Le nom doit être une chaîne de caractères")
        .max(25, "Le nom a un maximum de 25 caractères")
        .required("Veuillez saisir votre nom")
        .nullable(),
      adresse1: yup
        .string("L'adresse doit être une chaîne de caractères")
        .max(128, "l'adresse a un maximum de 128 caractères")
        .required("Veuillez saisir l'adresse")
        .nullable(),
      adresse2: yup
        .string("L'adresse doit être une chaîne de caractères")
        .max(127, "l'adresse a un maximum de 127 caractères")
        .nullable(),
      ville: yup
        .string("La ville doit être une chaîne de caractères")
        .max(30, "La ville a un maximum de 30 caractères")
        .required("Veuillez saisir la ville")
        .nullable(),
      region: yup
        .string("La région doit être une chaîne de caractères")
        .nullable(),
      codepostal: yup
        .string("Le code postal doit être une chaîne de caractères")
        .max(5, "Le code postal a un maximum de 5 caractères")
        .nullable(),
      numerotel: yup
        .string()
        .required("Veuillez saisir le numéro de téléphone")
        .matches(phoneRegExp, "Le numéro de téléphone est invalide")
        .min(10, "Le numéro de téléphone est invalide")
        .max(10, "Le numéro de téléphone est invalide")
        .nullable(),
      email: yup
        .string()
        // .matches(emailRegex, "L'adresse email est invalide")
        .nullable()
        .test("is-valid-email", "L'adresse email est invalide", (value) => {
          // Allow null or empty string
          if (value === null || value === "") return true;

          // Check email format
          return emailRegex.test(value);
        }),
    });

    const {
      register,
      handleSubmit,
      formState: { isSubmitting, errors },
    } = useForm({
      resolver: yupResolver(adrLivSchema),
      defaultValues: {
        prenom: vprenom,
        nom: vnom,
        adresse1: vadresseLiv,
        adresse2: vadresseLiv2,
        ville: vville,
        region: vregion,
        codepostal: vcodePostal,
        numerotel: vtel,
        email: vemail,
      },
    });

    const [
      addOrders,
      {
        data: addOrdersData,
        isLoading: addOrdersIsLoading,
        isSuccess: addOrdersIsSuccess,
        error: addOrdersError,
        isError: addOrdersIsError,
      },
    ] = useAddOrdersMutation();

    const [
      updateOrder,
      {
        data: updateOrderData,
        isLoading: updateOrderIsLoading,
        isSuccess: updateOrderIsSuccess,
        error: updateOrderError,
        isError: updateOrderIsError,
      },
    ] = useUpdateOrderMutation();

    const cartOrder = () => {
      if (cartItemId) {
        return {
          prodImage: cart?.prodImage,
          prodDesc: cart?.prodDesc,
          prodQtee: cart?.prodQtee,
          prodPrix: cart?.prodPrix,
          prodEtat: cart?.prodEtat,
          prodSize: cart?.prodSize,
          prodColor: cart?.prodColor,
        };
      } else {
        return cart?.map((item) => ({
          prodImage: item.prodImage,
          prodDesc: item.prodDesc,
          prodQtee: item.prodQtee,
          prodPrix: item.prodPrix,
          prodEtat: item.prodEtat,
          prodSize: item.prodSize,
          prodColor: item.prodColor,
        }));
      }
    };

    // const mtLiv = 10;

    const mtLiv = 0;

    const cartMtLiv = parseFloat(Math.round(mtLiv * 100) / 100).toFixed(2);

    const getTotalPrice = () => {
      if (cartItemId) {
        return cart?.prodQtee * cart?.prodPrix || 0;
      } else {
        return cart?.reduce(
          (accumulator, item) => accumulator + item.prodQtee * item.prodPrix,
          0
        );
      }
    };

    const TotalCartPrice = parseFloat(
      Math.round(getTotalPrice() * 100) / 100
    ).toFixed(2);

    let totalCommande = getTotalPrice() + mtLiv;

    const carttotalCommande = parseFloat(
      Math.round(totalCommande * 100) / 100
    ).toFixed(2);

    const getItemsCount = () => {
      if (cartItemId) {
        return cart?.prodQtee;
      } else {
        return cart?.reduce(
          (accumulator, item) => accumulator + item.prodQtee,
          0
        );
      }
    };

    const onSubmitAdrLiv = async (data, event) => {
      event.preventDefault();

      let totalOrders = carttotalCommande;
      let mtLivOrder = mtLiv;
      let nbrItems = getItemsCount();
      let cartItems = cartOrder();
      let tel = data.numerotel;
      let nom = data.nom;
      let prenom = data.prenom;
      let adresseLiv = data.adresse1;
      let adresseLiv2 = data.adresse2;
      let ville = data.ville;
      let codePostal = data.codepostal;
      let region = data.region;
      let email = data.email;

      const canAddOrder = [
        // email,
        nom,
        prenom,
        ville,
        tel,
        adresseLiv,
        cartItems,
      ].every(Boolean);

      if (canAddOrder) {
        if (orderId !== null && orderId !== undefined && cart && notEmptyCart) {
          const orderUpdated = await updateOrder({
            orderId,
            tel,
            nom,
            prenom,
            adresseLiv,
            adresseLiv2,
            ville,
            codePostal,
            region,
            email,
          }).unwrap();

          if (orderUpdated.successUpd === "ok") {
            handleNavConfirmOrder(orderId);
          }
        } else if (cart && notEmptyCart) {
          try {
            const order_Id = await addOrders({
              tel,
              nom,
              prenom,
              adresseLiv,
              adresseLiv2,
              ville,
              codePostal,
              region,
              email,
              totalOrders,
              mtLivOrder,
              nbrItems,
              cartItems,
            }).unwrap();

            if (order_Id) {
              dispatch(setOrderNumber(order_Id));
              handleNavConfirmOrder(order_Id);
            }
          } catch (err) {
            console.error("An error occurred while creating an order: ", err);

            if (err.data && typeof err.data === "object") {
              console.log("Response data (object):", err.data);
            } else {
              console.log("Response data:", err.data);
            }
          } finally {
          }
        }
      }
    };

    const onDeleteCartItem = async (
      prodId,
      prodQuantity,
      prodSize,
      prodColor
    ) => {
      try {
        await dispatch(
          cartSpinnerAsync({
            prodId,
            prodQuantity,
          })
        ).unwrap();
        dispatch(productRemoved({ prodId, prodSize, prodColor }));
      } catch (err) {
        console.error(
          "Un probleme est survenu pour supprimer cet article : ",
          err
        );
      }
    };

    const HandlesCartItem = ({
      cartItemProdId,
      cartItemProdImage,
      cartItemProdDesc,
      cartItemProdQtee,
      cartItemProdPrix,
      cartItemStatus,
      cartItemProdEtat,
      cartItemProdSize,
      cartItemProdColor,
    }) => {
      let CartItemPrice = parseFloat(
        Math.round(cartItemProdPrix * 100) / 100
      ).toFixed(2);

      let isLoading = cartItemStatus === "loading";

      return (
        <Box>
          <Box
            sx={{
              fontSize: ".875rem",
              WebkitTextSizeAdjust: "100%",
              color: "#191919",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <Box
              tabIndex="-1"
              sx={{
                padding: 0,
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
                marginLeft: 0,
                marginRight: 0,
                width: "100%",
                fontSize: ".875rem",
                WebkitTextSizeAdjust: "100%",
                color: "#191919",
              }}
            >
              <Box
                sx={{
                  marginRight: 0,
                  marginLeft: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  paddingLeft: "1rem",
                  fontSize: ".875rem",
                  WebkitTextSizeAdjust: "100%",
                  color: "#191919",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "80px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      height: "80px",
                      width: "80px",
                    }}
                  >
                    <Image
                      src={cartItemProdImage}
                      alt="Image"
                      sizes="80px"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    flexBasis: 0,
                    flexGrow: 1,
                    maxWidth: "100%",
                    position: "relative",
                    width: "100%",
                    fontSize: ".875rem",
                    WebkitTextSizeAdjust: "100%",
                    color: "#191919",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "1rem!important",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      component="h3"
                      tabIndex="-1"
                      sx={{
                        display: "block",
                        fontSize: "inherit",
                        fontWeight: 400,
                        margin: "initial",
                        lineHeight: "20px",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "1rem",
                          fontSize: "inherit",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "inherit",
                            fontWeight: 400,
                            lineHeight: "20px",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box component="span"> {cartItemProdDesc}</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "#767676",
                        marginBottom: "0.5rem!important",
                        marginTop: "0.25rem!important",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      marginRight: "1rem!important",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      tabIndex="-1"
                      sx={{
                        display: "block",
                        fontSize: "inherit",
                        fontWeight: 400,
                        margin: "initial",
                        lineHeight: "20px",

                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "inherit",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "inherit",
                            fontWeight: 400,
                            lineHeight: "20px",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box component="span">
                            État&nbsp;:&nbsp;{cartItemProdEtat}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "#767676",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      marginRight: "1rem!important",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      tabIndex="-1"
                      sx={{
                        display: "block",
                        fontSize: "inherit",
                        fontWeight: 400,
                        margin: "initial",
                        lineHeight: "20px",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "inherit",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "inherit",
                            fontWeight: 400,
                            lineHeight: "20px",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box component="span">
                            Taille&nbsp;:&nbsp;{cartItemProdSize}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "#767676",
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      marginRight: "1rem!important",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      tabIndex="-1"
                      sx={{
                        display: "block",
                        fontSize: "inherit",
                        fontWeight: 400,
                        margin: "initial",
                        lineHeight: "20px",

                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "inherit",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "inherit",
                            fontWeight: 400,
                            lineHeight: "20px",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box component="span">
                            Couleur&nbsp;:&nbsp;{cartItemProdColor}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "#767676",
                        marginBottom: "0.5rem!important",
                        marginTop: "0.25rem!important",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      marginRight: 0,
                      display: "flex",
                      flexWrap: "wrap",
                      marginLeft: "-15px",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: 0,
                        padding: 0,
                        borderBottom: 0,
                        width: "auto",
                        display: "inline-block!important",
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        sx={{
                          marginTop: "0.65rem",
                          color: "#767676",
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        <Box component="span" sx={{}}>
                          Qtée : &nbsp;{cartItemProdQtee}
                        </Box>
                      </Box>
                      <Box
                        component="a"
                        role="button"
                        onClick={() =>
                          onDeleteCartItem(
                            cartItemProdId,
                            cartItemProdQtee,
                            cartItemProdSize,
                            cartItemProdColor
                          )
                        }
                        sx={{
                          textDecoration: "underline",
                          color: "#3665f3",
                          cursor: "pointer",

                          ":WebkitAnyLink": {
                            cursor: "pointer",
                          },

                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        Supprimer
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
                    </Box>
                    <Box
                      sx={{
                        padding: 0,
                        textAlign: "right",
                        marginBottom: "0.5rem",
                        flexBasis: 0,
                        flexGrow: 1,
                        maxWidth: "100%",
                        position: "relative",
                        width: "100%",
                        fontSize: ".875rem",
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 400,
                            marginTop: "0.65rem",
                            color: "#111820",
                            textAlign: "right",
                            WebkitTextSizeAdjust: "100%",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontSize: "1rem",
                              fontWeight: 400,
                              color: "#111820",
                              textAlign: "right",
                              WebkitTextSizeAdjust: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                fontSize: "1rem",
                                fontWeight: 400,
                                color: "#111820",
                                textAlign: "right",
                                WebkitTextSizeAdjust: "100%",
                              }}
                            >
                              {CartItemPrice}&nbsp;dhs
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{}}></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    };

    return (
      <Box>
        <Box
          sx={{
            fontSize: ".875rem",
            WebkitTextSizeAdjust: "100%",
            color: "#191919",
          }}
        >
          <Box
            sx={{
              fontSize: ".875rem",
              WebkitTextSizeAdjust: "100%",
              color: "#191919",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                WebkitTextSizeAdjust: "none",
                margin: 0,
                fontSize: "16px",
              }}
            >
              <Box
                component="header"
                sx={{
                  minHeight: "48px",
                  boxSizing: "border-box",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  WebkitTextSizeAdjust: "none",
                  color: "#191919",
                  fontSize: "16px",
                }}
              >
                <Box
                  sx={{
                    minWidth: "66px",
                    order: 1,
                    paddingLeft: "16px",
                  }}
                >
                  {navHome && <ShowLoading />}
                  <Box component="span">
                    <Box
                      component="a"
                      onClick={handleNavHome}
                      sx={{
                        zIndex: 1,
                        textDecoration: "underline",
                        color: "#3665f3",
                        position: "relative",
                        display: "block",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        ":WebkitAnyLink": {
                          cursor: "pointer",
                        },
                        height: "34px",
                        width: "75px",
                        top: "0.75rem",
                      }}
                    >
                      <Image
                        role="presentation"
                        src="/logopic.svg"
                        alt="logo"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          position: "absolute",
                          left: 0,
                        }}
                        width={75}
                        height={34}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            tabIndex="-1"
            sx={{
              marginBottom: 0,
              fontSize: ".875rem",
              WebkitTextSizeAdjust: "100%",
              color: "#191919",
            }}
          >
            <Box
              component="h1"
              sx={{
                fontSize: ".875rem",
                marginBottom: "1rem",
                marginTop: "1rem",
                paddingRight: "1rem",
                textAlign: "right",
                fontWeight: 700,
                pointerEvents: "none",
                position: "absolute",
                top: "0.1rem",
                width: "100%",
                display: "block",
                WebkitTextSizeAdjust: "100%",
                color: "#191919",
              }}
            >
              Passer la commande
            </Box>
            <Box
              id="mainContent"
              tabIndex="-1"
              role="main"
              sx={{
                outline: "0 none",
                fontSize: ".875rem",
                WebkitTextSizeAdjust: "100%",
                color: "#191919",
                border: "1px solid #e5e5e5",
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
            >
              <Box
                component="form"
                name="addresse-liv-form"
                onSubmit={handleSubmit(onSubmitAdrLiv)}
              >
                <Box
                  component="section"
                  sx={{
                    padding: 0,
                    marginTop: "1rem",
                    backgroundColor: "#fff",
                    background: "#fff",
                    position: "relative",
                    WebkitTextSizeAdjust: "100%",
                    color: "#191919",
                    fontSize: ".875rem",
                    marginBottom: "2rem",
                  }}
                >
                  <Box
                    sx={{
                      paddingTop: 0,
                    }}
                  >
                    <Box
                      sx={{
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                        fontSize: ".875rem",
                      }}
                    >
                      {oneItemCart ? (
                        <HandlesCartItem
                          cartItemProdId={cart?.prodId}
                          cartItemProdImage={cart.prodImage}
                          cartItemProdDesc={cart.prodDesc}
                          cartItemProdQtee={cart.prodQtee}
                          cartItemProdPrix={cart.prodPrix}
                          cartItemStatus={cart.status}
                          cartItemProdEtat={cart.prodEtat}
                          cartItemProdSize={cart.prodSize}
                          cartItemProdColor={cart.prodColor}
                        />
                      ) : (
                        <>
                          {cart && cart.length > 0 ? (
                            <Box>
                              {cart.map((cartitem, index) => (
                                <HandlesCartItem
                                  key={index}
                                  cartItemProdId={cartitem?.prodId}
                                  cartItemProdImage={cartitem?.prodImage}
                                  cartItemProdDesc={cartitem?.prodDesc}
                                  cartItemProdQtee={cartitem?.prodQtee}
                                  cartItemProdPrix={cartitem?.prodPrix}
                                  cartItemStatus={cartitem?.status}
                                  cartItemProdEtat={cartitem?.prodEtat}
                                  cartItemProdSize={cartitem?.prodSize}
                                  cartItemProdColor={cartitem?.prodColor}
                                />
                              ))}
                            </Box>
                          ) : null}
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>

                {cart && notEmptyCart && (
                  <Box>
                    <Box
                      sx={{
                        marginTop: "1rem",
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            marginBottom: "1.5rem",
                            fontSize: ".875rem",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            sx={{
                              display: "inline-flex",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#111820",
                                fontSize: "18px",
                                marginLeft: "1rem",
                                width: "28px",
                                WebkitTextSizeAdjust: "100%",
                              }}
                            >
                              1.
                            </Box>
                            <Box
                              role="heading"
                              aria-level="2"
                              sx={{
                                fontSize: ".875rem",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              <Box
                                sx={{
                                  fontSize: "18px",
                                  WebkitTextSizeAdjust: "100%",
                                  color: "#191919",
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    fontSize: "18px",
                                    WebkitTextSizeAdjust: "100%",
                                    color: "#191919",
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      fontSize: "18px",
                                      WebkitTextSizeAdjust: "100%",
                                      color: "#191919",
                                    }}
                                  >
                                    Adresse de livraison
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              marginLeft: "1rem",
                              marginRight: "1rem",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            <Box
                              component="section"
                              sx={{
                                border: "none",
                                padding: 0,
                                background: "#fff",
                                position: "relative",
                                fontSize: ".875rem",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    paddingTop: "0.5rem",
                                    fontSize: ".875rem",
                                    WebkitTextSizeAdjust: "100%",
                                    color: "#191919",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      background: "#fff",
                                      fontSize: ".875rem",
                                      WebkitTextSizeAdjust: "100%",
                                      color: "#191919",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "block!important",
                                        fontSize: ".875rem",
                                        WebkitTextSizeAdjust: "100%",
                                        color: "#191919",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          background: "#fff",
                                        }}
                                      >
                                        <Box
                                          component="section"
                                          sx={{
                                            border: "none",
                                            padding: 0,
                                            background: "#fff",
                                            position: "relative",
                                            display: "block",
                                          }}
                                        >
                                          <Box
                                            sx={{
                                              fontSize: ".875rem",
                                              WebkitTextSizeAdjust: "100%",
                                              color: "#191919",
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="prenom"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: errors.prenom
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Prénom
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="prenom"
                                                    aria-required="true"
                                                    aria-describedby="prenom-label"
                                                    id="prenom"
                                                    type="text"
                                                    placeholder="Prénom"
                                                    {...register("prenom")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor: errors.prenom
                                                        ? "#e0103a"
                                                        : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.prenom
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.prenom
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.prenom
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.prenom
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow: errors.prenom
                                                          ? "none"
                                                          : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="prenom-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.prenom?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="nom"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: "#191919",
                                                    color: errors.nom
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Nom
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="nom"
                                                    aria-required="true"
                                                    aria-describedby="nom-label"
                                                    id="nom"
                                                    type="text"
                                                    placeholder="Nom"
                                                    {...register("nom")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor: errors.nom
                                                        ? "#e0103a"
                                                        : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.nom
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.nom
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.nom
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor: errors.nom
                                                          ? "none"
                                                          : "#007185",
                                                        boxShadow: errors.nom
                                                          ? "none"
                                                          : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="nom-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.nom?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="adresse1"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: "#191919",
                                                    color: errors.adresse1
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Adresse
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="adresse1"
                                                    aria-required="true"
                                                    aria-describedby="adresse1-label"
                                                    id="adresse1"
                                                    type="text"
                                                    placeholder="Adresse"
                                                    {...register("adresse1")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor:
                                                        errors.adresse1
                                                          ? "#e0103a"
                                                          : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.adresse1
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.adresse1
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.adresse1
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.adresse1
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow:
                                                          errors.adresse1
                                                            ? "none"
                                                            : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="adresse1-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.adresse1?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="adresse2"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: errors.adresse2
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Adresse 2 (facultative)
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="adresse2"
                                                    aria-required="true"
                                                    aria-describedby="adresse2-label"
                                                    id="adresse2"
                                                    type="text"
                                                    placeholder="Adresse (suite)"
                                                    {...register("adresse2")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor:
                                                        errors.adresse2
                                                          ? "#e0103a"
                                                          : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: "#191919",
                                                      color: errors.adresse2
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.adresse2
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.adresse2
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.adresse2
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow:
                                                          errors.adresse2
                                                            ? "none"
                                                            : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="adresse2-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.adresse2?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="ville"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: errors.ville
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Ville
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="ville"
                                                    aria-required="true"
                                                    aria-describedby="ville-label"
                                                    id="ville"
                                                    type="text"
                                                    placeholder="Ville"
                                                    {...register("ville")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor: errors.ville
                                                        ? "#e0103a"
                                                        : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.ville
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.ville
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.ville
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.ville
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow: errors.ville
                                                          ? "none"
                                                          : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="ville-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.ville?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  fontSize: ".875rem",
                                                  WebkitTextSizeAdjust: "100%",
                                                  color: "#191919",
                                                }}
                                              >
                                                <Box
                                                  component="span"
                                                  sx={{
                                                    width: "100%",
                                                    display: "inline-block",
                                                    marginTop: "1rem",
                                                    position: "relative",
                                                  }}
                                                >
                                                  <Box
                                                    component="label"
                                                    htmlFor="region"
                                                    sx={{
                                                      transform:
                                                        "scale(.75) translateY(3px)",
                                                      pointerEvents: "none",
                                                      transition:
                                                        "transform .3s ease,bottom .3s ease",
                                                      fontSize: "0.875rem",
                                                      backgroundColor:
                                                        "transparent",
                                                      color: errors.region
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      display: "inline-block",
                                                      left: "16px",
                                                      overflow: "hidden",
                                                      position: "absolute",
                                                      textOverflow: "ellipsis",
                                                      top: 0,
                                                      transformOrigin: "left",
                                                      whiteSpace: "nowrap",
                                                      width: "100%",
                                                      zIndex: 1,
                                                      WebkitTextSizeAdjust:
                                                        "100%",
                                                    }}
                                                  >
                                                    Région
                                                  </Box>
                                                  <Box
                                                    component="span"
                                                    sx={{
                                                      marginRight: 0,
                                                      width: "100%",
                                                      display: "inline-block",
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                      WebkitTextSizeAdjust:
                                                        "100%",
                                                    }}
                                                  >
                                                    <Box
                                                      autoComplete="region-level"
                                                      id="region"
                                                      component="select"
                                                      {...register("region")}
                                                      sx={{
                                                        lineHeight: "60px",
                                                        fontWeight: 400,
                                                        height: "3rem",
                                                        width: "100%!important",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",
                                                        borderColor:
                                                          errors.region
                                                            ? "#e0103a"
                                                            : "#8f8f8f",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        color: errors.region
                                                          ? "#e0103a"
                                                          : "inherit",
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        fontSize:
                                                          "16px!important",
                                                        overflow:
                                                          "visible !important",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        "&:focus": {
                                                          outline: errors.region
                                                            ? "none"
                                                            : null,
                                                          backgroundColor:
                                                            errors.region
                                                              ? "none"
                                                              : "#F7FEFF",
                                                          borderColor:
                                                            errors.region
                                                              ? "none"
                                                              : "#007185",
                                                          boxShadow:
                                                            errors.region
                                                              ? "none"
                                                              : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                        },
                                                      }}
                                                    >
                                                      {regionsSelect}
                                                    </Box>
                                                    <CustExpandMoreIcon
                                                      sx={{
                                                        height: "100%",
                                                        pointerEvents: "none",
                                                        position: "absolute",
                                                        right: "16px",
                                                        top: 0,
                                                        top: "4px",
                                                        display: "inline-block",
                                                        fill: "currentColor",
                                                        stroke: "currentColor",
                                                        strokeWidth: 0,
                                                        verticalAlign: "middle",
                                                        color: "#191919",
                                                      }}
                                                    ></CustExpandMoreIcon>
                                                  </Box>
                                                  <Box
                                                    id="region-error"
                                                    sx={{
                                                      color: "#e62048",
                                                      fontSize: ".75rem",
                                                      marginTop: "0.5rem",
                                                    }}
                                                  >
                                                    {errors.region?.message}
                                                  </Box>
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="codepostal"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: errors.codepostal
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Code postal
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="codepostal"
                                                    aria-required="true"
                                                    aria-describedby="codepostal-label"
                                                    id="codepostal"
                                                    type="text"
                                                    placeholder="Code postale"
                                                    {...register("codepostal")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor:
                                                        errors.codepostal
                                                          ? "#e0103a"
                                                          : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: "#191919",
                                                      color: errors.codepostal
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline:
                                                          errors.codepostal
                                                            ? "none"
                                                            : null,
                                                        backgroundColor:
                                                          errors.codepostal
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.codepostal
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow:
                                                          errors.codepostal
                                                            ? "none"
                                                            : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="codepostal-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.codepostal?.message}
                                                </Box>
                                              </Box>
                                            </Box>

                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="email"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: errors.email
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Adresse e-mail
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    autoComplete="email"
                                                    aria-required="true"
                                                    aria-describedby="email-label"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Adresse email"
                                                    {...register("email")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor: errors.email
                                                        ? "#e0103a"
                                                        : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.email
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline: errors.email
                                                          ? "none"
                                                          : null,
                                                        backgroundColor:
                                                          errors.email
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.email
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow: errors.email
                                                          ? "none"
                                                          : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="email-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.email?.message}
                                                </Box>
                                              </Box>
                                            </Box>

                                            <Box
                                              sx={{
                                                marginTop: "0.1rem",
                                                verticalAlign: "top",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "block",
                                                  marginTop: "1rem",
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="numerotel"
                                                  sx={{
                                                    transform:
                                                      "scale(.75) translateY(3px)",
                                                    pointerEvents: "none",
                                                    transition:
                                                      "transform .3s ease,bottom .3s ease",
                                                    fontSize: "0.875rem",
                                                    backgroundColor:
                                                      "transparent",
                                                    color: "#191919",
                                                    color: errors.numerotel
                                                      ? "#e0103a"
                                                      : "#191919",
                                                    display: "inline-block",
                                                    left: "16px",
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    textOverflow: "ellipsis",
                                                    top: 0,
                                                    transformOrigin: "left",
                                                    whiteSpace: "nowrap",
                                                    width: "calc(100% - 40px)",
                                                    zIndex: 1,
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Numéro de téléphone
                                                </Box>
                                                <Box
                                                  sx={{
                                                    color: "#f7f7f7",
                                                    fontSize: "0.875rem",
                                                    position: "relative",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  <Box
                                                    component="input"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    aria-describedby="numerotel-label"
                                                    id="numerotel"
                                                    autoComplete="numerotel"
                                                    data-required="true"
                                                    maxLength="15"
                                                    type="tel"
                                                    placeholder="Numéro Télephone"
                                                    {...register("numerotel")}
                                                    sx={{
                                                      paddingBlock: "1px",
                                                      paddingInline: "2px",
                                                      padding: "0 16px",
                                                      paddingBottom: "5px",
                                                      paddingTop: "23px",
                                                      fontSize:
                                                        "16px!important",
                                                      width: "100%",
                                                      height: "48px",
                                                      WebkitAppearance: "none",
                                                      MozAppearance: "none",
                                                      appearance: "none",
                                                      backgroundColor:
                                                        "#f7f7f7",
                                                      borderColor:
                                                        errors.numerotel
                                                          ? "#e0103a"
                                                          : "#8f8f8f",
                                                      borderRadius: "8px",
                                                      borderStyle: "solid",
                                                      borderWidth: "1px",
                                                      boxSizing: "border-box",
                                                      color: errors.numerotel
                                                        ? "#e0103a"
                                                        : "#191919",
                                                      margin: 0,
                                                      fontFamily: "inherit",
                                                      verticalAlign: "middle",
                                                      margin: 0,
                                                      "&:focus": {
                                                        outline:
                                                          errors.numerotel
                                                            ? "none"
                                                            : null,
                                                        backgroundColor:
                                                          errors.numerotel
                                                            ? "none"
                                                            : "#F7FEFF",
                                                        borderColor:
                                                          errors.numerotel
                                                            ? "none"
                                                            : "#007185",
                                                        boxShadow:
                                                          errors.numerotel
                                                            ? "none"
                                                            : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                      },
                                                    }}
                                                  ></Box>
                                                </Box>
                                                <Box
                                                  id="numerotel-error"
                                                  sx={{
                                                    color: "#e62048",
                                                    fontSize: ".75rem",
                                                    marginTop: "0.5rem",
                                                  }}
                                                >
                                                  {errors.numerotel?.message}
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>

                                        <Box
                                          sx={{
                                            padding: 0,
                                            display: "table",
                                            position: "relative",
                                            tableLayout: "fixed",
                                            width: "100%",
                                            fontSize: ".875rem",
                                            WebkitTextSizeAdjust: "100%",
                                            color: "#191919",
                                          }}
                                        >
                                          <Box>
                                            <Box
                                              sx={{
                                                display: "inline",
                                                fontSize: ".875rem",
                                                WebkitTextSizeAdjust: "100%",
                                                color: "#191919",
                                              }}
                                            >
                                              <Box
                                                component="button"
                                                type="submit"
                                                disabled={
                                                  addOrdersIsLoading ||
                                                  updateOrderIsLoading ||
                                                  isSubmitting ||
                                                  navConfirmOrder
                                                }
                                                sx={{
                                                  width: "100%",
                                                  margin: 0,
                                                  paddingBlock: "1px",
                                                  paddingInline: "6px",
                                                  marginBottom: "1rem",
                                                  marginTop: "1rem",
                                                  borderRadius: "24px",
                                                  fontSize: "1rem",
                                                  minHeight: "48px",
                                                  padding: "13px 20px",
                                                  backgroundColor:
                                                    addOrdersIsLoading ||
                                                    updateOrderIsLoading ||
                                                    isSubmitting ||
                                                    navConfirmOrder
                                                      ? "#e7e9ec"
                                                      : "#3665f3",
                                                  borderColor:
                                                    addOrdersIsLoading ||
                                                    updateOrderIsLoading ||
                                                    isSubmitting ||
                                                    navConfirmOrder
                                                      ? "#e7e9ec"
                                                      : "#3665f3",
                                                  color:
                                                    addOrdersIsLoading ||
                                                    updateOrderIsLoading ||
                                                    isSubmitting ||
                                                    navConfirmOrder
                                                      ? "#0F1111"
                                                      : "#fff",
                                                  fontWeight: 700,
                                                  border: "1px solid",
                                                  boxSizing: "border-box",
                                                  display: "inline-block",
                                                  fontFamily: "inherit",
                                                  minWidth: "88px",
                                                  textAlign: "center",
                                                  textDecoration: "none",
                                                  verticalAlign: "bottom",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                Confirmer&nbsp;&nbsp;&nbsp;&nbsp;
                                                {(addOrdersIsLoading ||
                                                  updateOrderIsLoading ||
                                                  isSubmitting ||
                                                  navConfirmOrder) && (
                                                  <CircularProgress
                                                    size={20}
                                                    sx={{
                                                      textAlign: "center",
                                                      top: "50%",
                                                      left: "50%",
                                                      marginTop: "-10px",
                                                      marginLeft: "-10px",
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
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        borderBottom: "1px solid #e5e5e5",
                      }}
                    ></Box>
                  </Box>
                )}
                <Box
                  sx={{
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    marginTop: "1rem",
                    fontSize: ".875rem",
                    WebkitTextSizeAdjust: "100%",
                    color: "#191919",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "flex-end",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      <Box
                        component="dl"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <Box
                          component="dt"
                          sx={{
                            textAlign: "left",
                            paddingBottom: "0.25rem",
                            fontSize: ".875rem",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            component="span"
                            aria-hidden="false"
                            sx={{
                              textAlign: "left",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            Articles&nbsp;({getItemsCount()})
                          </Box>
                        </Box>
                        <Box
                          component="dd"
                          sx={{
                            margin: 0,
                            minWidth: "100px",
                            paddingBottom: "0.25rem",
                            textAlign: "right",
                            whiteSpace: "break-spaces",
                            display: "block",
                            marginInlineStart: "40px",
                            fontSize: ".875rem",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              textAlign: "right",
                              whiteSpace: "break-spaces",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                textAlign: "right",
                                whiteSpace: "break-spaces",
                                fontSize: ".875rem",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              {TotalCartPrice}&nbsp;Dhs
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {cartMtLiv > 0 && (
                        <Box
                          component="dl"
                          sx={{
                            border: "none",
                            paddingBottom: "0.25rem",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                            fontSize: ".875rem",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          <Box
                            component="dt"
                            sx={{
                              textAlign: "left",
                              paddingBottom: "0.25rem",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            <Box
                              component="span"
                              aria-hidden="false"
                              sx={{
                                textAlign: "left",
                                fontSize: ".875rem",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              Livraison
                            </Box>
                          </Box>
                          <Box
                            component="dd"
                            sx={{
                              minWidth: "100px",
                              paddingBottom: "0.25rem",
                              textAlign: "right",
                              whiteSpace: "break-spaces",
                              display: "block",
                              marginInlineStart: "40px",
                              fontSize: ".875rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                              margin: 0,
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                textAlign: "right",
                                whiteSpace: "break-spaces",
                                fontSize: ".875rem",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  textAlign: "right",
                                  whiteSpace: "break-spaces",
                                  fontSize: ".875rem",
                                  WebkitTextSizeAdjust: "100%",
                                  color: "#191919",
                                }}
                              >
                                {cartMtLiv}&nbsp;Dhs
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      )}
                      <Box
                        component="dl"
                        sx={{
                          "&:last-child": {
                            marginTop: 0,
                            marginBottom: "0.25rem",
                          },
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                          color: "#191919",
                        }}
                      >
                        <Box
                          component="dt"
                          sx={{
                            textAlign: "left",
                            paddingBottom: "0.25rem",
                            fontSize: ".875rem",
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            component="h2"
                            aria-hidden="false"
                            sx={{
                              "&:last-child": {
                                fontSize: ".875rem",
                                fontWeight: 700,
                              },

                              display: "block",
                              marginBlockStart: "0.83em",
                              marginBlockEnd: "0.83em",
                              marginInlineStart: "0px",
                              marginInlineEnd: "0px",
                              margin: 0,
                              textAlign: "left",
                            }}
                          >
                            Total de la commande
                          </Box>
                        </Box>
                        <Box
                          component="dd"
                          sx={{
                            display: "block",
                            marginInlineStart: "40px",
                            margin: 0,
                            minWidth: "100px",
                            paddingBottom: "0.25rem",
                            textAlign: "right",
                            whiteSpace: "break-spaces",
                            fontSize: ".875rem",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              "&:last-child": {
                                fontSize: ".875rem",
                                fontWeight: 700,
                              },
                              textAlign: "right",
                              whiteSpace: "break-spaces",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                "&:last-child": {
                                  fontSize: ".875rem",
                                  fontWeight: 700,
                                },
                                textAlign: "right",
                                whiteSpace: "break-spaces",
                                WebkitTextSizeAdjust: "100%",
                                color: "#191919",
                              }}
                            >
                              {carttotalCommande}&nbsp;Dhs
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    paddingBottom: "1rem",
                    fontSize: ".875rem",
                    WebkitTextSizeAdjust: "100%",
                    color: "#191919",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                      color: "#191919",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                        color: "#191919",
                      }}
                    >
                      {cart && notEmptyCart ? (
                        <Box
                          component="button"
                          aria-disabled="true"
                          type="submit"
                          data-test-id="CONFIRM_AND_PAY_BUTTON"
                          disabled={
                            addOrdersIsLoading ||
                            updateOrderIsLoading ||
                            isSubmitting ||
                            navConfirmOrder
                          }
                          sx={{
                            paddingBlock: "1px",
                            paddingInline: "6px",
                            backgroundColor:
                              addOrdersIsLoading ||
                              updateOrderIsLoading ||
                              isSubmitting ||
                              navConfirmOrder
                                ? "#e7e9ec"
                                : "#767676",
                            width: "100%",
                            borderColor:
                              addOrdersIsLoading ||
                              updateOrderIsLoading ||
                              isSubmitting ||
                              navConfirmOrder
                                ? "#e7e9ec"
                                : "#c7c7c7",
                            color:
                              addOrdersIsLoading ||
                              updateOrderIsLoading ||
                              isSubmitting ||
                              navConfirmOrder
                                ? "#0F1111"
                                : "#fff",
                            borderRadius: "24px",
                            fontSize: "1rem",
                            minHeight: "48px",
                            padding: "13px 20px",
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
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color:
                                addOrdersIsLoading ||
                                updateOrderIsLoading ||
                                isSubmitting ||
                                navConfirmOrder
                                  ? "#0F1111"
                                  : "#fff",
                              fontSize: "1rem",
                              fontWeight: 700,
                              fontFamily: "inherit",
                            }}
                          >
                            <Box component="span">
                              <CustLockOutlinedIcon
                                sx={{
                                  marginRight: "10px",
                                  marginTop: "-6px",
                                  display: "inline-block",
                                  verticalAlign: "middle",
                                  textAlign: "center",
                                  color:
                                    addOrdersIsLoading ||
                                    updateOrderIsLoading ||
                                    isSubmitting ||
                                    navConfirmOrder
                                      ? "#0F1111"
                                      : "#fff",
                                }}
                              ></CustLockOutlinedIcon>
                            </Box>
                            Confirmer et payer&nbsp;&nbsp;&nbsp;&nbsp;
                            {(addOrdersIsLoading ||
                              updateOrderIsLoading ||
                              isSubmitting ||
                              navConfirmOrder) && (
                              <CircularProgress
                                size={20}
                                sx={{
                                  textAlign: "center",
                                  top: "50%",
                                  left: "50%",
                                  marginTop: "-10px",
                                  marginLeft: "-5px",
                                }}
                              />
                            )}
                          </Box>
                        </Box>
                      ) : (
                        <Box
                          component="button"
                          aria-disabled="true"
                          onClick={handleNavHome}
                          sx={{
                            paddingBlock: "1px",
                            paddingInline: "6px",
                            backgroundColor: "#767676",
                            width: "100%",
                            borderColor: "#c7c7c7",
                            color: "#fff",
                            borderRadius: "24px",
                            fontSize: "1rem",
                            minHeight: "48px",
                            padding: "13px 20px",
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
                            WebkitTextSizeAdjust: "100%",
                            color: "#191919",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#fff",
                              fontSize: "1rem",
                              fontWeight: 700,
                              fontFamily: "inherit",
                            }}
                          >
                            <Box component="span">
                              <CustLockOutlinedIcon
                                sx={{
                                  marginRight: "10px",
                                  marginTop: "-6px",
                                  display: "inline-block",
                                  verticalAlign: "middle",
                                  textAlign: "center",
                                  color: "#fff",
                                }}
                              ></CustLockOutlinedIcon>
                            </Box>
                            Revenir à la page principale&nbsp;&nbsp;&nbsp;&nbsp;
                            {navHome && (
                              <CircularProgress
                                size={20}
                                sx={{
                                  textAlign: "center",
                                  top: "50%",
                                  left: "50%",
                                  marginTop: "-10px",
                                  marginLeft: "-5px",
                                  color: "#fff",
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
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <VerifierPanier />
    </>
  );
};
export default HandlesCheckoutXs;
