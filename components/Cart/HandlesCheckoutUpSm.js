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
import CheckoutLinkUpSm from "./CheckoutLinkUpSm";
import { useAddOrdersMutation } from "../../redux/features/api/apiSlice";
import { setOrderNumber } from "../../redux/features/cart/cartSlice";
import { useGetOrderShipAdrQuery } from "../../redux/features/api/apiSlice";
import { useUpdateOrderMutation } from "../../redux/features/api/apiSlice";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";

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
    }
  }, [shipAdrData]);

  return shipAdr;
};

export const HandlesCheckoutUpSm = () => {
  const vNavHomeButt = "navHomeButt";
  const vRemoveCartItemButt = "removeCartItemButt";

  const router = useRouter();

  const [navConfirmOrder, setNavConfirmOrder] = useState(false);

  const searchParams = useSearchParams();

  const cartItemId = searchParams.get("cartProdId") || null;
  const cartItemSize = searchParams.get("cartProdSize") || null;
  const cartItemColor = searchParams.get("cartProdColor") || null;

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

  const handleNavConfirmOrder = (orderId) => {
    try {
      router.push(
        `/confirmOrderUpSm/${encodeURIComponent(orderId)}/${encodeURIComponent(
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

  function CustExpandMoreIcon(props) {
    return (
      <SvgIcon {...props}>
        <KeyboardArrowDownOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustLockOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <LockOutlinedIcon />
      </SvgIcon>
    );
  }

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

  const dispatch = useDispatch();

  const allCart = useSelector((state) => state.cart);

  const oneItemCart =
    useSelector((state) =>
      state.cart.products.find(
        (product) => product.prodId === parseInt(cartItemId)
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

    const NoticeAdrLiv = ({
      errAdrLivPrenom,
      errAdrLivNom,
      errAdrLivAdresse1,
      errAdrLivVille,
      errAdrLivNumerotel,
      errAdrLivEmail,
    }) => {
      let errAdrLiv = "test";

      if (errAdrLivPrenom) {
        errAdrLiv = errAdrLivPrenom;
      } else if (errAdrLivNom) {
        errAdrLiv = errAdrLivNom;
      } else if (errAdrLivAdresse1) {
        errAdrLiv = errAdrLivAdresse1;
      } else if (errAdrLivVille) {
        errAdrLiv = errAdrLivVille;
      } else if (errAdrLivEmail) {
        errAdrLiv = errAdrLivEmail;
      } else if (errAdrLivNumerotel) {
        errAdrLiv = errAdrLivNumerotel;
      }

      return (
        <Box
          sx={{
            WebkitTextSizeAdjust: "100%",
            color: "#191919",
            fontSize: "0.875rem",
          }}
        >
          <Box
            sx={{
              color: "#dd1e31",
              textAlign: "center!important",
              marginBottom: "1rem!important",
              marginTop: "1rem!important",
              WebkitTextSizeAdjust: "100%",
              fontSize: "0.875rem",
            }}
          >
            &nbsp;{errAdrLiv}
          </Box>
        </Box>
      );
    };

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

    //const mtLiv = 10;
    const mtLiv = 0;

    const cartMtLiv = parseFloat(Math.round(mtLiv * 100) / 100).toFixed(2);

    const getTotalPrice = () => {
      if (cartItemId) {
        return cart?.prodQtee * cart?.prodPrix;
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

    const HandlesCartItem = ({
      cartItemProdId,
      cartItemProdImage,
      cartItemProdDesc,
      cartItemProdQtee,
      cartItemProdPrix,
      cartItemProdEtat,
      cartItemProdSize,
      cartItemProdColor,
    }) => {
      let CartItemPrice = parseFloat(
        Math.round(cartItemProdPrix * 100) / 100
      ).toFixed(2);
      return (
        <Box
          sx={{
            "@media (min-width: 576px)": {
              borderBottom: "1px solid #e5e5e5",
              marginBottom: "1.5rem",
            },
          }}
        >
          <Box>
            <Box>
              <Box
                sx={{
                  padding: 0,
                  marginLeft: 0,
                  marginRight: 0,

                  "@media (min-width: 576px)": {
                    maxWidth: "540px",
                  },

                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "1rem",
                    marginLeft: 0,
                    marginRight: 0,
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "130px",
                      paddingLeft: 0,
                      paddingRight: 0,

                      "@media (min-width: 576px)": {
                        flex: "0 0 25%",
                      },

                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        height: "160px",
                        width: "95px",
                      }}
                    >
                      <Image
                        src={cartItemProdImage}
                        alt="Image"
                        sizes="95px"
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
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: "1rem!important",
                      }}
                    >
                      <Box
                        tabIndex="-1"
                        component="h3"
                        sx={{
                          fontSize: "inherit",
                          fontWeight: 400,
                          margin: "initial",
                          lineHeight: "20px",
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
                            }}
                          >
                            {cartItemProdDesc}
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
                    <Box>
                      <Box
                        sx={{
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Box>
                          <Box
                            sx={{
                              color: "#111820",
                              fontSize: "1rem",
                              fontWeight: 700,
                              marginTop: "0.5rem",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#111820",
                                fontSize: "1rem",
                                fontWeight: 700,
                              }}
                            >
                              <Box component="span">
                                {CartItemPrice}&nbsp;dhs
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          // marginBottom: "1rem",
                          marginBottom: "0,25rem",
                          width: "100%",
                          display: "inline-block!important",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#767676",
                          }}
                        >
                          <Box component="span">
                            État : &nbsp;{cartItemProdEtat}
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          // marginBottom: "1rem",
                          marginBottom: "0,25rem",
                          width: "100%",
                          display: "inline-block!important",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#767676",
                          }}
                        >
                          <Box component="span">
                            Taille : &nbsp;{cartItemProdSize}
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          marginBottom: "1rem",
                          //marginBottom: "0,5rem",
                          width: "100%",
                          display: "inline-block!important",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#767676",
                          }}
                        >
                          <Box component="span">
                            Couleur : &nbsp;{cartItemProdColor}
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          marginBottom: "1rem",
                          width: "100%",
                          display: "inline-block!important",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#767676",
                          }}
                        >
                          <Box component="span">
                            Quantitée : &nbsp;{cartItemProdQtee}
                          </Box>
                        </Box>

                        <CheckoutLinkUpSm
                          buttonName={vRemoveCartItemButt}
                          cartItemId={cartItemProdId}
                          cartItemSize={cartItemProdSize}
                          cartItemColor={cartItemProdColor}
                        >
                          Supprimer
                        </CheckoutLinkUpSm>
                      </Box>
                    </Box>

                    <Box>
                      <Box>
                        <Box
                          sx={{
                            marginBottom: "0.5rem",
                          }}
                        >
                          <Box
                            role="none"
                            sx={{
                              marginLeft: 0,
                            }}
                          >
                            <Box
                              sx={{
                                clip: "rect(1px,1px,1px,1px)",
                                border: 0,
                                height: "1px",
                                overflow: "hidden",
                                padding: 0,
                                position: "absolute",
                                whiteSpace: "nowrap",
                                width: "1px",
                                marginBottom: "8px",
                              }}
                            ></Box>
                            <Box>
                              <Box
                                sx={{
                                  "&:only-child": {
                                    marginTop: 0,
                                  },
                                }}
                              >
                                <Box>
                                  <Box
                                    sx={{
                                      marginBottom: "0.5rem",
                                      display: "flex",
                                      margin: "16px 0",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: "100%",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          marginLeft: "0!important",
                                          marginRight: "auto",
                                        }}
                                      >
                                        <Box>
                                          <Box>
                                            <Box>
                                              <Box
                                                component="h4"
                                                sx={{
                                                  color: "#111820",
                                                  fontWeight: 700,
                                                  marginBottom: "0.125rem",
                                                  marginTop: 0,
                                                }}
                                              >
                                                Livraison
                                              </Box>
                                              <Box></Box>
                                            </Box>
                                          </Box>
                                          <Box>
                                            <Box
                                              sx={{
                                                paddingRight: "1rem",
                                              }}
                                            >
                                              <Box>
                                                <Box>
                                                  <Box
                                                    sx={{
                                                      paddingBottom: "1px",
                                                    }}
                                                  >
                                                    <Box></Box>
                                                    <Box component="span">
                                                      Délai de livraison
                                                      estimé&nbsp;:
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
                        </Box>
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
      <Box
        sx={{
          margin: "0 auto!important",
          maxWidth: "980px",
          minWidth: "780px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "#fff",
          WebkitTextSizeAdjust: "100%",
          color: "#191919",
          fontSize: "0.875rem",
        }}
      >
        <Box
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          <Box
            component="header"
            role="banner"
            sx={{
              paddingTop: "10px",
            }}
          >
            <Box
              component="table"
              role="presentation"
              sx={{
                borderCollapse: "collapse",
                borderSpacing: 0,
                width: "100%",
                marginTop: 0,
                background: "none !important",
              }}
            >
              <Box component="tbody">
                <Box component="tr">
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  >
                    <Box>
                      <CheckoutLinkUpSm buttonName={vNavHomeButt}>
                        <Image
                          src="/logopic.svg"
                          alt="logo"
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          width={150}
                          height={35}
                        />
                      </CheckoutLinkUpSm>
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
                  <Box
                    component="td"
                    sx={{
                      width: "1%",
                      verticalAlign: "bottom",
                      padding: 0,
                    }}
                  ></Box>
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
            }}
          >
            <Box
              component="h1"
              sx={{
                fontSize: "1.5rem",
                marginLeft: "175px",
                paddingTop: 0,
                position: "absolute",
                top: "5px",
              }}
            >
              Finalisation de l'achat
            </Box>
            <Box
              role="main"
              tabIndex="-1"
              sx={{
                outline: "0 none",
              }}
            >
              <Box
                sx={{
                  maxWidth: "968px",
                  padding: 0,
                  marginLeft: 0,
                  marginRight: 0,

                  "@media min-width: 576px)": {
                    maxWidth: "540px",
                  },

                  width: "100%",
                }}
              >
                <Box>
                  <Box
                    component="form"
                    name="addresse-livraison-form"
                    onSubmit={handleSubmit(onSubmitAdrLiv)}
                    sx={{
                      marginLeft: 0,
                      marginRight: 0,
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        paddingLeft: 0,
                        paddingRight: "1rem!important",
                        flex: "0 0 58.3333333333%",
                        maxWidth: "58.3333333333%",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <Box
                        component="section"
                        sx={{
                          marginBottom: "1rem",
                          padding: 0,
                          "@media (min-width: 576px)": {
                            border: "1px solid #e5e5e5",
                          },

                          "&:last-child": {
                            borderBottom: "none",
                            marginBottom: 0,
                          },

                          backgroundColor: "#fff",
                          background: "#fff",
                          position: "relative",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            padding: "1rem",
                            fontSize: "medium",
                            display: "inline-block",
                            fontWeight: 700,
                          }}
                        >
                          <Box
                            component="h3"
                            sx={{
                              margin: 0,
                            }}
                          >
                            Vérifier les articles et la livraison
                          </Box>
                        </Box>

                        <>
                          {oneItemCart ? (
                            <HandlesCartItem
                              cartItemProdId={cart?.prodId}
                              cartItemProdImage={cart?.prodImage}
                              cartItemProdDesc={cart?.prodDesc}
                              cartItemProdQtee={cart?.prodQtee}
                              cartItemProdPrix={cart?.prodPrix}
                              cartItemProdEtat={cart?.prodEtat}
                              cartItemProdSize={cart?.prodSize}
                              cartItemProdColor={cart?.prodColor}
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
                                      cartItemProdEtat={cartitem?.prodEtat}
                                      cartItemProdSize={cartitem?.prodSize}
                                      cartItemProdColor={cartitem?.prodColor}
                                    />
                                  ))}
                                </Box>
                              ) : null}
                            </>
                          )}
                        </>
                      </Box>

                      {cart && notEmptyCart && (
                        <Box
                          component="section"
                          sx={{
                            marginTop: "1rem",
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginBottom: "1rem",
                            background: "#fff",
                            border: "1px solid #e5e5e5",
                            position: "relative",
                            paddingLeft: 0,
                            paddingRight: 0,
                          }}
                        >
                          <Box></Box>
                          <Box>
                            <Box
                              component="span"
                              sx={{
                                paddingLeft: "1rem",
                                fontSize: "medium",
                                display: "inline-block",
                                fontWeight: 700,
                              }}
                            >
                              <Box component="h3">
                                <Box component="span">
                                  <Box component="span">
                                    <Box component="span">
                                      Adresse de livraison
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Box
                                sx={{
                                  transition: "height 0ms ease-in-out 0s",
                                  height: "512px",
                                  overflow: "visible",
                                }}
                              >
                                <Box
                                  sx={{
                                    borderTop: "1px solid #e5e5e5",
                                    marginTop: "1rem",
                                    overflow: "visible",
                                  }}
                                >
                                  <Box></Box>
                                  <Box
                                    sx={{
                                      background: "#fff",
                                      marginTop: "1rem",
                                      padding: 0,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "block!important",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          background: "#fff",
                                          marginTop: "1rem",
                                          padding: 0,
                                          paddingLeft: "1rem",
                                          paddingRight: "1rem",
                                        }}
                                      >
                                        <Box
                                          component="section"
                                          sx={{
                                            border: 0,
                                            marginBottom: 0,
                                            padding: 0,
                                            background: "#fff",
                                            position: "relative",
                                          }}
                                        >
                                          <Box>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "0.5rem",
                                                padding: "0 0.5rem",
                                                tableLayout: "fixed",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Prénom
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="prenom-label"
                                                      id="prenom"
                                                      type="text"
                                                      placeholder="Prénom"
                                                      {...register("prenom")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",

                                                        borderColor:
                                                          errors.prenom
                                                            ? "#e0103a"
                                                            : "#8f8f8f",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",
                                                        color: errors.prenom
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
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
                                                          boxShadow:
                                                            errors.prenom
                                                              ? "none"
                                                              : "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                        },
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
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
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
                                                      transform:
                                                        "scale(.75) translateY(3px)",
                                                      pointerEvents: "none",
                                                      transition:
                                                        "transform .3s ease,bottom .3s ease",
                                                      fontSize: "0.875rem",
                                                      backgroundColor:
                                                        "transparent",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Nom
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="nom-label"
                                                      id="nom"
                                                      type="text"
                                                      placeholder="Nom"
                                                      {...register("nom")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",
                                                        borderColor: errors.nom
                                                          ? "#e0103a"
                                                          : "#8f8f8f",
                                                        color: errors.nom
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
                                                        "&:focus": {
                                                          outline: errors.nom
                                                            ? "none"
                                                            : null,
                                                          backgroundColor:
                                                            errors.nom
                                                              ? "none"
                                                              : "#F7FEFF",
                                                          borderColor:
                                                            errors.nom
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
                                            </Box>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "0.5rem",
                                                padding: "0 0.5rem",
                                                tableLayout: "fixed",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
                                                      transform:
                                                        "scale(.75) translateY(3px)",
                                                      pointerEvents: "none",
                                                      transition:
                                                        "transform .3s ease,bottom .3s ease",
                                                      fontSize: "0.875rem",
                                                      backgroundColor:
                                                        "transparent",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Adresse
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="adresse1-label"
                                                      id="adresse1"
                                                      type="text"
                                                      placeholder="Adresse"
                                                      {...register("adresse1")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",

                                                        borderColor:
                                                          errors.adresse1
                                                            ? "#e0103a"
                                                            : "#8f8f8f",

                                                        color: errors.adresse1
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",

                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
                                                        "&:focus": {
                                                          outline:
                                                            errors.adresse1
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
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Adresse (Facultative)
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="adresse2-label"
                                                      id="adresse2"
                                                      type="text"
                                                      placeholder="Adresse (suite)"
                                                      {...register("adresse2")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
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
                                                        color: errors.adresse2
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
                                                        "&:focus": {
                                                          outline:
                                                            errors.adresse2
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
                                            </Box>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "0.5rem",
                                                padding: "0 0.5rem",
                                                tableLayout: "fixed",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Ville
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="ville-label"
                                                      id="ville"
                                                      type="text"
                                                      placeholder="Ville"
                                                      {...register("ville")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",
                                                        borderColor:
                                                          errors.ville
                                                            ? "#e0103a"
                                                            : "#8f8f8f",
                                                        color: errors.ville
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
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
                                                          boxShadow:
                                                            errors.ville
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
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    maxWidth: "279px",
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  <Box
                                                    component="span"
                                                    sx={{
                                                      display: "inline-block",
                                                      marginTop: "1rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="label"
                                                      htmlFor="region"
                                                      sx={{
                                                        WebkitTransform:
                                                          "scale(.75) translateY(3px)",
                                                        transform:
                                                          "scale(.75) translateY(3px)",
                                                        pointerEvents: "none",
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
                                                        textOverflow:
                                                          "ellipsis",
                                                        top: 0,
                                                        transformOrigin: "left",
                                                        whiteSpace: "nowrap",
                                                        width:
                                                          "calc(100% - 40px)",
                                                        zIndex: 1,
                                                        "&:focus": {
                                                          backgroundColor:
                                                            "#F7FEFF",
                                                          borderColor:
                                                            "#007185",
                                                          boxShadow:
                                                            "0 0 0 3px #C8F3FA,0 1px 2px rgba(15,17,17,.15) inset",
                                                        },
                                                      }}
                                                    >
                                                      Région
                                                    </Box>
                                                    <Box
                                                      component="span"
                                                      sx={{
                                                        marginRight: 0,
                                                        display: "inline-block",
                                                        color: "#191919",
                                                        fontSize: "0.875rem",
                                                        position: "relative",
                                                      }}
                                                    >
                                                      <Box
                                                        component="select"
                                                        id="region"
                                                        {...register("region")}
                                                        sx={{
                                                          fontWeight: 400,
                                                          height: "3rem",
                                                          width:
                                                            "100%!important",
                                                          lineHeight: "60px",
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
                                                          padding:
                                                            "0 32px 0 16px",
                                                          verticalAlign:
                                                            "middle",
                                                          fontSize: "0.875rem",
                                                          "&:focus": {
                                                            outline:
                                                              errors.region
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
                                                          right: "8px",
                                                          top: 0,
                                                          top: "4px",
                                                          display:
                                                            "inline-block",
                                                          fill: "currentColor",
                                                          stroke:
                                                            "currentColor",
                                                          strokeWidth: 0,
                                                          verticalAlign:
                                                            "middle",
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
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Code Postal
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-describedby="codepostal-label"
                                                      id="codepostal"
                                                      type="text"
                                                      placeholder="Code postale"
                                                      {...register(
                                                        "codepostal"
                                                      )}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
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
                                                        color: errors.codepostal
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
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
                                            </Box>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "0.5rem",
                                                padding: "0 0.5rem",
                                                tableLayout: "fixed",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      color: "#3665f3",
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Adresse email
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      autoCapitalize="none"
                                                      autoComplete="email"
                                                      aria-describedby="email-label"
                                                      id="email"
                                                      type="email"
                                                      placeholder="Adresse email"
                                                      {...register("email")}
                                                      sx={{
                                                        width: "100%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",
                                                        borderColor:
                                                          errors.email
                                                            ? "#e0103a"
                                                            : "#8f8f8f",
                                                        color: errors.email
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
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
                                                          boxShadow:
                                                            errors.email
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
                                                  padding: 0,
                                                  width: "100%",
                                                  display: "table-cell",
                                                  marginTop: "0.1rem",
                                                  verticalAlign: "top",
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
                                                      color: "#3665f3",
                                                      WebkitTransform:
                                                        "scale(.75) translateY(3px)",
                                                      transform:
                                                        "scale(.75) translateY(3px)",
                                                      pointerEvents: "none",
                                                      transition:
                                                        "transform .3s ease,bottom .3s ease",
                                                      fontSize: "0.875rem",
                                                      backgroundColor:
                                                        "transparent",
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
                                                      width:
                                                        "calc(100% - 40px)",
                                                      zIndex: 1,
                                                    }}
                                                  >
                                                    Numéro de téléphone
                                                  </Box>
                                                  <Box
                                                    sx={{
                                                      color: "#191919",
                                                      fontSize: "0.875rem",
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <Box
                                                      component="input"
                                                      aria-required="true"
                                                      aria-invalid="false"
                                                      aria-describedby="numerotel-label"
                                                      id="numerotel"
                                                      name="numerotel"
                                                      autoComplete="tel-national"
                                                      data-validations="REQUIRED_FIELD PHONE_NUMBER"
                                                      data-required="true"
                                                      maxLength="15"
                                                      type="tel"
                                                      placeholder="Numéro Téléphone"
                                                      {...register("numerotel")}
                                                      sx={{
                                                        minWidth: "240px",
                                                        width: "45%",
                                                        height: "48px",
                                                        WebkitAppearance:
                                                          "none",
                                                        MozAppearance: "none",
                                                        appearance: "none",
                                                        backgroundColor:
                                                          "#f7f7f7",
                                                        borderColor:
                                                          errors.numerotel
                                                            ? "#e0103a"
                                                            : "#8f8f8f",
                                                        color: errors.numerotel
                                                          ? "#e0103a"
                                                          : "#191919",
                                                        borderRadius: "8px",
                                                        borderStyle: "solid",
                                                        borderWidth: "1px",
                                                        boxSizing: "border-box",
                                                        fontSize: "1em",
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        padding: "0 16px",
                                                        verticalAlign: "middle",
                                                        paddingBottom: "5px",
                                                        paddingTop: "23px",
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
                                        </Box>
                                        <Box
                                          sx={{
                                            marginBottom: "1rem",
                                            marginLeft: "0.25rem",
                                            paddingLeft: 0,
                                            display: "table",
                                            padding: "1rem 0",
                                            position: "relative",
                                            tableLayout: "fixed",
                                            width: "100%",
                                          }}
                                        >
                                          <Box>
                                            <Box
                                              sx={{
                                                display: "inline",
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
                                                  marginRight: "1rem",
                                                  minWidth: "128px",
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
                                                  borderRadius: "20px",
                                                  boxSizing: "border-box",
                                                  display: "inline-block",
                                                  fontFamily: "inherit",
                                                  fontSize: "0.875rem",
                                                  margin: 0,
                                                  minHeight: "40px",
                                                  padding: "9.5px 20px",
                                                  textAlign: "center",
                                                  textDecoration: "none",
                                                  verticalAlign: "bottom",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                Confirmer
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
                      )}

                      <Box
                        component="section"
                        sx={{
                          padding: 0,
                          marginBottom: "1rem",
                          background: "#fff",
                          border: "1px solid #e5e5e5",
                          position: "relative",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            transition: "height 0ms ease-in-out 0s",
                            height: "187px",
                            overflow: "visible",
                          }}
                        >
                          <Box
                            sx={{
                              overflow: "visible",
                            }}
                          >
                            <Box></Box>
                            <Box
                              sx={{
                                padding: "0.5rem 1rem",
                                borderBottom: "1px solid #e5e5e5",
                              }}
                            >
                              <Box
                                sx={{
                                  alignItems: "center",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    paddingBottom: "0.25rem",
                                    paddingTop: "0.25rem",
                                    display: "block!important",
                                    fontSize: "medium",
                                    fontWeight: 700,
                                  }}
                                >
                                  <Box component="h3">
                                    <Box component="span">Mode de Paiement</Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box>
                              <Box>
                                <Box
                                  component="span"
                                  sx={{
                                    paddingBottom: "1rem",
                                    fontSize: "medium",
                                    display: "inline-block",
                                    fontWeight: 700,

                                    padding: "1rem",
                                  }}
                                >
                                  <Box>Paiement à la livraison</Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        position: "relative",
                        flex: "0 0 41.6666666667%",
                        maxWidth: "41.6666666667%",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          position: "sticky",
                          position: "-webkit-sticky",
                          top: "1rem",
                        }}
                      >
                        <Box
                          component="section"
                          sx={{
                            marginBottom: "1rem",
                            background: "#fff",
                            border: "1px solid #e5e5e5",
                            padding: "1rem",
                            position: "relative",
                          }}
                        >
                          <Box>
                            <Box
                              component="span"
                              sx={{
                                clip: "rect(1px,1px,1px,1px)",
                                border: 0,
                                height: "1px",
                                overflow: "hidden",
                                padding: 0,
                                position: "absolute",
                                whiteSpace: "nowrap",
                                width: "1px",
                              }}
                            >
                              Résumé de panier
                            </Box>
                            <Box>
                              <Box
                                component="table"
                                sx={{
                                  width: "100%",
                                  borderCollapse: "collapse",
                                  marginBottom: "0.5rem",
                                  paddingBottom: "0.5rem",
                                  display: "table",
                                  textIndent: "initial",
                                  borderSpacing: "2px",
                                  borderColor: "gray",
                                }}
                              >
                                <Box component="thead">
                                  <Box
                                    component="tr"
                                    sx={{
                                      display: "none",
                                    }}
                                  >
                                    <Box component="th">label</Box>
                                    <Box component="th">valeurv</Box>
                                  </Box>
                                </Box>
                                <Box component="tbody">
                                  <Box component="tr">
                                    <Box
                                      component="td"
                                      sx={{
                                        width: "11.25rem",
                                        paddingBottom: "0.25rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          textAlign: "left",
                                          color: "#191919",
                                          fontSize: "0.875rem",
                                          fontWeight: 500,
                                        }}
                                      >
                                        Articles&nbsp;({getItemsCount()})
                                      </Box>
                                    </Box>
                                    <Box
                                      component="td"
                                      sx={{
                                        minWidth: 0,
                                        whiteSpace: "nowrap",
                                        paddingBottom: "0.25rem",
                                        textAlign: "right",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          whiteSpace: "nowrap",
                                          textAlign: "right",
                                          color: "#191919",
                                          fontSize: "0.875rem",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <Box component="span">
                                          {TotalCartPrice}&nbsp;Dhs
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  {cartMtLiv > 0 && (
                                    <Box component="tr">
                                      <Box
                                        component="td"
                                        sx={{
                                          width: "11.25rem",
                                          borderBottom: "1px solid #e5e5e5",
                                          paddingBottom: "1rem",
                                          textAlign: "left",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            textAlign: "left",
                                            WebkitTextSizeAdjust: "100%",
                                            color: "#191919",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                          }}
                                        >
                                          Livraison
                                        </Box>
                                      </Box>
                                      <Box
                                        component="td"
                                        sx={{
                                          minWidth: 0,
                                          whiteSpace: "nowrap",
                                          borderBottom: "1px solid #e5e5e5",
                                          paddingBottom: "1rem",
                                          textAlign: "right",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            whiteSpace: "nowrap",
                                            textAlign: "right",
                                            color: "#191919",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                          }}
                                        >
                                          <Box component="span">
                                            {cartMtLiv}&nbsp;Dhs
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  )}
                                  <Box component="tr">
                                    <Box
                                      component="td"
                                      sx={{
                                        width: "11.25rem",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        paddingTop: "1rem",
                                        paddingBottom: "0.25rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <Box
                                        component="h2"
                                        sx={{
                                          "&:last-child": {
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                          },
                                        }}
                                      >
                                        Total de la commande
                                      </Box>
                                    </Box>
                                    <Box
                                      component="td"
                                      sx={{
                                        minWidth: 0,
                                        whiteSpace: "nowrap",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        paddingTop: "1rem",
                                        paddingBottom: "0.25rem",
                                        textAlign: "right",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          whiteSpace: "nowrap",
                                          "&:last-child": {
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                          },
                                          textAlign: "right",
                                          color: "#191919",
                                        }}
                                      >
                                        <Box component="span">
                                          {carttotalCommande}&nbsp;Dhs
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
                              marginBottom: "1rem",
                              marginTop: "0.25rem",
                              WebkitTextSizeAdjust: "100%",
                              color: "#191919",
                              fontSize: "0.875rem",
                            }}
                          >
                            <Box>
                              <Box
                                type="hidden"
                                name="confirm-and-pay-input"
                                sx={{
                                  appearance: "none",
                                  backgroundColor: "initial",
                                  cursor: "default",
                                  display: "none !important",
                                  padding: "initial",
                                  border: "initial",
                                }}
                              ></Box>

                              {cart && notEmptyCart ? (
                                <Box>
                                  <Box
                                    aria-disabled="true"
                                    type="submit"
                                    data-test-id="CONFIRM_AND_PAY_BUTTON"
                                    component="button"
                                    disabled={
                                      addOrdersIsLoading ||
                                      updateOrderIsLoading ||
                                      isSubmitting ||
                                      navConfirmOrder
                                    }
                                    sx={{
                                      backgroundColor:
                                        addOrdersIsLoading ||
                                        updateOrderIsLoading ||
                                        isSubmitting ||
                                        navConfirmOrder
                                          ? "#e7e9ec"
                                          : "#767676",
                                      marginLeft: 0,
                                      marginRight: 0,
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
                                      alignItems: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "100%",
                                      borderRadius: "24px",
                                      fontSize: "1rem",
                                      minHeight: "48px",
                                      padding: "13px 20px",
                                      fontWeight: 700,
                                      border: "1px solid",
                                      boxSizing: "border-box",
                                      fontFamily: "inherit",
                                      margin: 0,
                                      minWidth: "88px",
                                      textAlign: "center",
                                      textDecoration: "none",
                                      verticalAlign: "bottom",
                                      cursor: "pointer",
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
                                        }}
                                      ></CustLockOutlinedIcon>
                                      Confirmer votre commande
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

                                  {(errors.prenom?.message ||
                                    errors.nom?.message ||
                                    errors.adresse1?.message ||
                                    errors.ville?.message ||
                                    errors.numerotel?.message ||
                                    errors.email?.message) && (
                                    <NoticeAdrLiv
                                      errAdrLivPrenom={errors.prenom?.message}
                                      errAdrLivNom={errors.nom?.message}
                                      errAdrLivAdresse1={
                                        errors.adresse1?.message
                                      }
                                      errAdrLivVille={errors.ville?.message}
                                      errAdrLivNumerotel={
                                        errors.numerotel?.message
                                      }
                                      errAdrLivEmail={errors.email?.message}
                                    />
                                  )}
                                </Box>
                              ) : (
                                <Box
                                  aria-disabled="true"
                                  component="button"
                                  onClick={handleNavHome}
                                  sx={{
                                    backgroundColor: "#767676",
                                    marginLeft: 0,
                                    marginRight: 0,
                                    borderColor: "#c7c7c7",
                                    color: "#fff",
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    borderRadius: "24px",
                                    fontSize: "1rem",
                                    minHeight: "48px",
                                    padding: "13px 20px",
                                    fontWeight: 700,
                                    border: "1px solid",
                                    boxSizing: "border-box",
                                    fontFamily: "inherit",
                                    margin: 0,
                                    minWidth: "88px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    verticalAlign: "bottom",
                                    cursor: "pointer",
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
                                      }}
                                    ></CustLockOutlinedIcon>
                                    Revenir à la page
                                    principale&nbsp;&nbsp;&nbsp;&nbsp;
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

export default HandlesCheckoutUpSm;
