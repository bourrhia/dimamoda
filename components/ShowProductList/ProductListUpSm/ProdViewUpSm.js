import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SvgIcon from "@mui/material/SvgIcon";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import HandlesCartItemUpSm from "./HandlesCartItemUpSm";

export const ProdViewUpSm = ({ selectedprd }) => {
  const prodId = selectedprd[0]?.productId;
  const prodImage = selectedprd[0]?.imgJpg;
  const prodDesc = selectedprd[0]?.descPrd;
  const prodPrix = selectedprd[0]?.prixAct;
  const prodEtat = selectedprd[0]?.etatprd;
  const prodQteeDisp = selectedprd[0]?.qteedisp || 0;
  const status = "idle";

  const vDescPrd = selectedprd[0]?.descPrd;
  const vMarque = selectedprd[0]?.marque;
  const vEtatprd = selectedprd[0]?.etatprd;
  const vPrixSymbol = selectedprd[0]?.prixSymbol;
  const vRed = selectedprd[0]?.red;
  const vPromoprd1 = selectedprd[0]?.promoprd1;
  const vPromoprd2 = selectedprd[0]?.promoprd2;
  const vMatériau = selectedprd[0]?.matériau;
  const vCouleur = selectedprd[0]?.couleur;
  const vDimensions = selectedprd[0]?.dimensions;
  const vDescart1 = selectedprd[0]?.descart1;
  const vDescart2 = selectedprd[0]?.descart2;
  const vDescart3 = selectedprd[0]?.descart3;
  const vDescart4 = selectedprd[0]?.descart4;
  const vDescart5 = selectedprd[0]?.descart5;
  const vNumfab = selectedprd[0]?.numfab;
  const vFabricant = selectedprd[0]?.fabricant;
  const vPoids = selectedprd[0]?.poids;
  const vPaysorigibne = selectedprd[0]?.paysorigibne;
  const vDescdet = selectedprd[0]?.descdet;
  const vDetprd1 = selectedprd[0]?.detprd1;
  const vDetprd2 = selectedprd[0]?.detprd2;
  const vDetprd3 = selectedprd[0]?.detprd3;
  const vDetprd4 = selectedprd[0]?.detprd4;
  const vDetprd5 = selectedprd[0]?.detprd5;
  const vDetprd6 = selectedprd[0]?.detprd6;
  const vDetprd7 = selectedprd[0]?.detprd7;
  const vDetprd8 = selectedprd[0]?.detprd8;
  const vDetprd9 = selectedprd[0]?.detprd9;
  const vDetprd10 = selectedprd[0]?.detprd10;
  const vPcaract1 = selectedprd[0]?.pcaract1;
  const vPcaract2 = selectedprd[0]?.pcaract2;
  const vPcaract3 = selectedprd[0]?.pcaract3;
  const vPcaract4 = selectedprd[0]?.pcaract4;
  const vPcaract5 = selectedprd[0]?.pcaract5;
  const vPcaract6 = selectedprd[0]?.pcaract6;
  const vPcaract7 = selectedprd[0]?.pcaract7;
  const vPcaract8 = selectedprd[0]?.pcaract8;
  const vPcaract9 = selectedprd[0]?.pcaract9;
  const vPcaract10 = selectedprd[0]?.pcaract10;
  const vModèle = selectedprd[0]?.modèle;
  const vPuissance = selectedprd[0]?.puissance;
  const vContenance = selectedprd[0]?.contenance;
  const vTension = selectedprd[0]?.tension;

  const CartItemPrixAct = parseFloat(Math.round(prodPrix * 100) / 100).toFixed(
    2
  );

  const CartItemPrixInit = parseFloat(
    Math.round(selectedprd[0]?.prixIni * 100) / 100
  ).toFixed(2);

  function CustLocalShippingOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <LocalShippingOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustPaymentOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <PaymentOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustLoopIcon(props) {
    return (
      <SvgIcon {...props}>
        <LoopIcon />
      </SvgIcon>
    );
  }

  const renderedImg = selectedprd.map((image) => (
    <Box
      key={image.productId}
      component="li"
      sx={{
        display: "block!important",
        visibility: "visible!important",
        margin: 0,
        height: "100%",
        listStyle: "none",
        wordWrap: "break-word",
        color: "#0F1111",
      }}
    >
      <Box
        component="span"
        sx={{
          height: "100%",
          display: "block",
          color: "#0F1111",
          visibility: "visible!important",
          listStyle: "none",
          wordWrap: "break-word",
          textAlign: "-webkit-match-parent",
          borderCollapse: "collapse",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "table",
            width: "100%",
            height: "100%",
            color: "#0F1111",
            visibility: "visible!important",
            listStyle: "none",
            wordWrap: "break-word",
            textAlign: "-webkit-match-parent",
            borderCollapse: "collapse",
          }}
        >
          <Box
            sx={{
              height: "464px",
              display: "table-cell",
              verticalAlign: "middle",
              margin: 0,
              padding: 0,
              color: "#0F1111",
              visibility: "visible!important",
              listStyle: "none",
              wordWrap: "break-word",
              textAlign: "-webkit-match-parent",
              borderCollapse: "collapse",

              height: "550px",
            }}
          >
            <Box
              sx={{
                display: "block",
                maxWidth: "390px",
                width: "100%!important",
                height: "560px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={image.imgJpg}
                alt="Image"
                fill
                sizes="390px"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ));

  const rightCol = (
    <Box
      sx={{
        float: "right",
        width: "244px",
        marginLeft: "20px",
      }}
    >
      <Box>
        <Box
          sx={{
            filter: "inherit",
          }}
        >
          <Box>
            <Box>
              <Box
                sx={{
                  "&:last-child": {
                    marginBottom: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    marginBottom: 0,
                    display: "block",
                    marginTop: "0em",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        "&: only-child": {
                          borderRadius: "8px",
                        },

                        "&:first-of-type": {
                          marginTop: 0,
                        },

                        marginBottom: "0!important",
                        display: "block",
                        backgroundColor: "#fff",
                        border: "1px #D5D9D9 solid",
                      }}
                    >
                      <Box
                        sx={{
                          "&: only-child": {
                            borderRadius: "8px",
                          },

                          position: "relative",
                          padding: "14px 18px",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "0!important",
                            marginBottom: "0!important",
                          }}
                        >
                          <Box>
                            <Box>
                              <Box
                                sx={{
                                  marginBottom: "4px!important",
                                  color: "#0F1111",
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    fontSize: "28px",
                                    color: "#0F1111",
                                    verticalAlign: "middle!important",
                                    textDecoration: "none",
                                    position: "relative",
                                    lineHeight: "normal",
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      WebkitUserSelect: "none",
                                      MozUserSelect: "none",
                                      MsUserSelect: "none",
                                      userSelect: "none",
                                      position: "absolute!important",
                                      left: "0!important",
                                      bottom: "-1px!important",
                                      zIndex: "-1!important",
                                      opacity: 0,
                                      color: "#0F1111",
                                      lineHeight: "normal",

                                      fontSize: "28px",
                                    }}
                                  >
                                    {CartItemPrixAct}&nbsp;
                                    {vPrixSymbol}
                                  </Box>
                                  <Box component="span" aria-hidden="true">
                                    <Box
                                      component="span"
                                      sx={{
                                        fontWeight: 700,
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontStretch: "normal",
                                        lineHeight: "1.33",
                                        letterSpacing: "normal",
                                        color: "rgba(17,24,32,0.87) !important",
                                      }}
                                    >
                                      {CartItemPrixAct}&nbsp;
                                      {vPrixSymbol}
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>

                          <Box>
                            <Box
                              sx={{
                                padding: "0!important",
                                marginBottom: "0!important",
                              }}
                            >
                              <Box>
                                <Box>
                                  <Box>
                                    <Box
                                      sx={{
                                        marginBottom: "22px",
                                      }}
                                    >
                                      <Box>
                                        <Box
                                          sx={{
                                            marginBottom: "12px!important",
                                          }}
                                        ></Box>
                                        <Box
                                          sx={{
                                            marginBottom: "12px!important",
                                          }}
                                        >
                                          <Box component="span">
                                            Livraison à domicile
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                              <Box>
                                <Box
                                  sx={{
                                    marginBottom: "0!important",
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
                                        color: "#007600!important",
                                        textRendering: "optimizeLegibility",
                                        fontSize: "18px!important",
                                        lineHeight: "24px!important",
                                      }}
                                    >
                                      En stock.
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>

                              <HandlesCartItemUpSm
                                prodId={prodId}
                                prodImage={prodImage}
                                prodDesc={prodDesc}
                                prodPrix={prodPrix}
                                prodEtat={prodEtat}
                                prodQteeDisp={prodQteeDisp}
                                status={status}
                              ></HandlesCartItemUpSm>

                              <Box>
                                <Box
                                  component="section"
                                  sx={{
                                    fontSize: ".75rem",
                                    marginBottom: "8px",
                                    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                                    backgroundColor: "#fff",
                                    borderRadius: "4px",
                                    display: "block",
                                    color: "#282828",
                                  }}
                                >
                                  <Box
                                    component="hr"
                                    sx={{
                                      marginBottom: "12px!important",
                                      backgroundColor: "transparent",
                                      borderBottomWidth: 0,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderTop: "1px solid #e7e7e7",
                                      display: "block",
                                      height: "1px",
                                      lineHeight: "19px",
                                      marginTop: 0,
                                    }}
                                  ></Box>
                                  <Box
                                    component="h2"
                                    sx={{
                                      fontSize: ".875rem",
                                      fontWeight: 500,
                                      padding: "8px",
                                      margin: 0,
                                      color: "#282828",
                                      WebkitTextSizeAdjust: "100%",
                                      WebkitFontSmoothing: "antialiased",
                                    }}
                                  >
                                    Livraison, retours et paiements
                                  </Box>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      fontSize: ".75rem",
                                      color: "#282828",
                                      WebkitTextSizeAdjust: "100%",

                                      "&::before": {
                                        height: "1px",
                                        content: '""',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        position: "absolute",
                                        backgroundColor: "#ededed",
                                      },
                                    }}
                                  >
                                    <Box
                                      component="article"
                                      sx={{
                                        paddingBottom: "4px",
                                        paddingTop: "4px",
                                        position: "relative",
                                        display: "block",
                                        fontSize: ".75rem",
                                        color: "#282828",
                                      }}
                                    >
                                      <Box
                                        component="section"
                                        sx={{
                                          position: "relative",
                                          display: "block",
                                          fontSize: ".75rem",
                                          WebkitFontSmoothing: "antialiased",
                                          color: "#282828",
                                          WebkitTextSizeAdjust: "100%",
                                        }}
                                      >
                                        <Box>
                                          <Box
                                            component="article"
                                            sx={{
                                              paddingLeft: "8px",
                                              paddingBottom: "4px",
                                              paddingRight: "8px",
                                              paddingTop: "4px",
                                              display: "flex",
                                              fontSize: ".75rem",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              WebkitTextSizeAdjust: "100%",
                                            }}
                                          >
                                            <CustLocalShippingOutlinedIcon
                                              color="action"
                                              sx={{
                                                fontSize: 0,
                                                marginRight: "8px",
                                                padding: "4px",
                                                alignSelf: "baseline",
                                                flexShrink: 0,
                                                border: "1px solid #ededed",
                                                borderRadius: "4px",
                                                fill: "#282828",
                                                width: 40,
                                                height: 40,
                                              }}
                                            ></CustLocalShippingOutlinedIcon>
                                            <Box
                                              sx={{
                                                flexWrap: "wrap",
                                                alignContent: "space-between",
                                                flexGrow: 1,
                                                display: "flex",
                                                fontSize: ".75rem",
                                                color: "#282828",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  width: "100%",
                                                  display: "flex",
                                                  fontSize: ".75rem",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  color: "#282828",
                                                  WebkitTextSizeAdjust: "100%",
                                                }}
                                              >
                                                <Box
                                                  component="h4"
                                                  sx={{
                                                    fontSize: ".875rem",
                                                    fontWeight: 500,
                                                    paddingRight: "8px",
                                                    margin: 0,
                                                    padding: 0,
                                                    color: "#282828",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Livraison à domicile
                                                </Box>
                                                <Box
                                                  component="button"
                                                  type="button"
                                                  sx={{
                                                    fontSize: ".75rem",
                                                    marginLeft: "auto",
                                                    alignSelf: "flex-start",
                                                    cursor: "pointer",
                                                    color: "#264996",
                                                    WebkitAppearance: "button",
                                                    padding: 0,
                                                    textTransform: "none",
                                                    margin: 0,
                                                    overflow: "visible",
                                                    backgroundColor:
                                                      "transparent",
                                                    border: 0,
                                                  }}
                                                >
                                                  Détails
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                          <Box
                                            component="article"
                                            sx={{
                                              paddingLeft: "8px",
                                              paddingBottom: "4px",
                                              paddingRight: "8px",
                                              paddingTop: "4px",
                                              display: "flex",
                                              fontSize: ".75rem",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              color: "#282828",
                                              WebkitTextSizeAdjust: "100%",
                                            }}
                                          >
                                            <CustPaymentOutlinedIcon
                                              color="action"
                                              sx={{
                                                fontSize: 0,
                                                marginRight: "8px",
                                                padding: "4px",
                                                alignSelf: "baseline",
                                                flexShrink: 0,
                                                border: "1px solid #ededed",
                                                borderRadius: "4px",
                                                fill: "#282828",
                                                width: 40,
                                                height: 40,
                                              }}
                                            ></CustPaymentOutlinedIcon>
                                            <Box
                                              sx={{
                                                flexWrap: "wrap",
                                                alignContent: "space-between",
                                                flexGrow: 1,
                                                display: "flex",
                                                fontSize: ".75rem",
                                                color: "#282828",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  width: "100%",
                                                  display: "flex",
                                                  fontSize: ".75rem",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  color: "#282828",
                                                  WebkitTextSizeAdjust: "100%",
                                                }}
                                              >
                                                <Box
                                                  component="h4"
                                                  sx={{
                                                    fontSize: ".875rem",
                                                    fontWeight: 500,
                                                    paddingRight: "8px",
                                                    margin: 0,
                                                    padding: 0,
                                                    color: "#282828",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Paiements à la livraison
                                                </Box>
                                                <Box
                                                  component="button"
                                                  type="button"
                                                  sx={{
                                                    fontSize: ".75rem",
                                                    marginLeft: "auto",
                                                    alignSelf: "flex-start",
                                                    cursor: "pointer",
                                                    color: "#264996",
                                                    WebkitAppearance: "button",
                                                    padding: 0,
                                                    textTransform: "none",
                                                    margin: 0,
                                                    overflow: "visible",
                                                    backgroundColor:
                                                      "transparent",
                                                    border: 0,
                                                  }}
                                                >
                                                  Détails
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box
                                      component="article"
                                      sx={{
                                        padding: "8px",
                                        position: "relative",
                                        display: "flex",
                                        fontSize: ".75rem",
                                        WebkitFontSmoothing: "antialiased",
                                        color: "#282828",
                                        WebkitTextSizeAdjust: "100%",

                                        "&::before": {
                                          content: '""',
                                          height: "1px",
                                          top: 0,
                                          right: 0,
                                          left: 0,
                                          position: "absolute",
                                          backgroundColor: "#ededed",
                                        },
                                      }}
                                    >
                                      <CustLoopIcon
                                        color="action"
                                        sx={{
                                          fontSize: 0,
                                          marginRight: "8px",
                                          padding: "4px",
                                          alignSelf: "baseline",
                                          flexShrink: 0,
                                          border: "1px solid #ededed",
                                          borderRadius: "4px",
                                          fill: "#282828",
                                          width: 40,
                                          height: 40,
                                        }}
                                      ></CustLoopIcon>
                                      <Box
                                        sx={{
                                          flexDirection: "column",
                                          alignContent: "space-between",
                                          display: "flex",
                                          fontSize: ".75rem",
                                          WebkitFontSmoothing: "antialiased",
                                          color: "#282828",
                                          WebkitTextSizeAdjust: "100%",
                                        }}
                                      >
                                        <Box
                                          component="h3"
                                          sx={{
                                            fontSize: ".875rem",
                                            fontWeight: 500,
                                            width: "100%",
                                            margin: 0,
                                            padding: 0,
                                            WebkitFontSmoothing: "antialiased",
                                            color: "#282828",
                                            WebkitTextSizeAdjust: "100%",
                                          }}
                                        >
                                          Politique de retour
                                        </Box>
                                        <Box
                                          component="p"
                                          sx={{
                                            paddingTop: "4px",
                                            margin: 0,
                                            padding: 0,
                                            fontSize: ".75rem",
                                            color: "#282828",
                                            WebkitFontSmoothing: "antialiased",
                                            WebkitTextSizeAdjust: "100%",
                                          }}
                                        >
                                          Retours acceptés dans un délai de 15
                                          jours
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

  const leftCol = (
    <Box
      sx={{
        position: "sticky",
        position: "-webkit-sticky",
        top: "4px",
        height: "100%",
        width: "45.0%",
        float: "left",
      }}
    >
      <Box>
        <Box
          sx={{
            opacity: 1,
            marginBottom: 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                paddingLeft: "40px",
                position: "relative",
                padding: 0,

                "&::after,&::before": {
                  display: "table",
                  content: '""',
                  lineHeight: 0,
                  fontSize: 0,
                },

                "&::after": {
                  clear: "left",
                },
              }}
            >
              <Box
                sx={{
                  paddingLeft: "3.5%",
                  float: "left",
                  width: "100%",
                  textAlign: "center!important",
                  position: "relative",
                  overflow: "visible",
                  zoom: 1,
                  minHeight: "1px",
                }}
              >
                <Box
                  sx={{
                    opacity: 1,
                    display: "table!important",
                    tableLayout: "fixed",
                    zoom: 1,
                    borderCollapse: "collapse",
                    marginBottom: "12px!important",
                    width: "100%",
                    textAlign: "center!important",
                  }}
                >
                  <Box
                    sx={{
                      height: "464.286px",
                      maxHeight: "700px!important",
                      position: "relative",
                      textAlign: "center!important",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: "-1",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          margin: "auto",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "100%",
                          borderCollapse: "collapse",
                          textAlign: "center!important",

                          "&::after,&::before": {
                            display: "table",
                            content: '""',
                            lineHeight: 0,
                            fontSize: 0,
                          },

                          "&::after": {
                            clear: "left",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            paddingRight: 0,
                            width: "100%",
                            marginRight: 0,
                            float: "left",
                            minHeight: "1px",
                            overflow: "visible",
                            textAlign: "center!important",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#565959!important",
                            }}
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "none!important",
                        visibility: "hidden!important",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "none",
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          top: "200px",
                          left: 0,
                        }}
                      >
                        <Box
                          sx={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            borderColor: "#CC0C39",
                            position: "relative",
                            borderStyle: "solid",
                            borderWidth: "2px",
                            borderLeftWidth: "12px",
                            display: "block",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                            border: "1px #D5D9D9 solid",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#FFF",
                              padding: "14px 18px 18px",
                              borderRadius: "8px",
                              position: "relative",
                            }}
                          ></Box>
                          <Box
                            component="h4"
                            sx={{
                              paddingLeft: "26px",
                              paddingBottom: "10px",
                              fontWeight: 700,
                              fontSize: "18px",
                              lineHeight: "24px",
                              textRendering: "optimizeLegibility",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            Image indisponible
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            paddingLeft: 0,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "700!important",
                            }}
                          >
                            Image non disponible
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      component="ul"
                      sx={{
                        height: "100%",
                        display: "block",
                        marginLeft: 0,
                        color: "#0F1111",
                        padding: 0,
                        margin: "0 0 0 18px",

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
                      {renderedImg}
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

  const centerCol = (
    <Box
      sx={{
        marginLeft: "46.5%",
        marginRight: "270px",
      }}
    >
      <Box>
        <Box
          sx={{
            marginBottom: "0!important",
          }}
        >
          <Box
            component="h1"
            sx={{
              paddingBottom: 0,
              marginBottom: "0!important",
              textRendering: "optimizeLegibility",
              fontSize: "24px!important",
              lineHeight: "32px!important",
              fontWeight: 400,
              padding: 0,
              margin: 0,
            }}
          >
            <Box
              component="span"
              sx={{
                wordBreak: "break-word",
                textRendering: "optimizeLegibility",
                fontSize: "24px!important",
                lineHeight: "32px!important",
                fontWeight: 400,
              }}
            >
              {vDescPrd}
            </Box>
          </Box>
        </Box>
      </Box>
      {vMarque && (
        <Box>
          <Box
            sx={{
              marginBottom: "0!important",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#007185",
                fontSize: "14px",
                lineHeight: "20px",
                WebkitTextSizeAdjust: "100%",
              }}
            >
              Marque&nbsp;: {vMarque}
            </Box>
          </Box>
        </Box>
      )}
      {vEtatprd && (
        <Box>
          <Box
            sx={{
              marginBottom: "0!important",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
                WebkitTextSizeAdjust: "100%",
              }}
            >
              État&nbsp;: {selectedprd[0]?.etatprd}
            </Box>
          </Box>
        </Box>
      )}

      <Box
        component="hr"
        sx={{
          backgroundColor: "transparent",
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTop: "1px solid #e7e7e7",
          display: "block",
          height: "1px",
          lineHeight: "19px",
          marginBottom: "14px",
          marginTop: "14px",
        }}
      ></Box>
      <Box>
        <Box>
          <Box
            sx={{
              verticalAlign: "middle!important",
              marginBottom: "0!important",
            }}
          >
            <Box
              component="span"
              sx={{
                marginRight: "3px",
                fontSize: "28px",
                color: "#0F1111",
                verticalAlign: "middle!important",
                textDecoration: "none",
                position: "relative",
                lineHeight: "normal",
              }}
            >
              <Box
                component="span"
                sx={{
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                  position: "absolute!important",
                  left: "0!important",
                  bottom: "-1px!important",
                  zIndex: "-1!important",
                  opacity: 0,
                  fontSize: "28px",
                  color: "#0F1111",
                  lineHeight: "normal",
                }}
              >
                {CartItemPrixAct}&nbsp;{vPrixSymbol}
              </Box>

              <Box component="span" aria-hidden="true">
                <Box
                  component="span"
                  sx={{
                    fontWeight: 700,
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontStretch: "normal",
                    lineHeight: "1.33",
                    letterSpacing: "normal",
                    color: "rgba(17,24,32,0.87) !important",
                  }}
                >
                  {CartItemPrixAct}&nbsp;{vPrixSymbol}
                </Box>
              </Box>
            </Box>
            {vRed && (
              <Box
                sx={{
                  marginBottom: "8px",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingRight: "2px",
                    fontSize: "14px",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontWeight: "normal",
                    lineHeight: "normal",
                    color: "#333",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      textDecoration: "line-through",
                      fontSize: ".875rem",
                      margin: 0,
                      padding: 0,
                      border: 0,
                      fontWeight: "normal",
                      lineHeight: "normal",
                      color: "#333",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: ".875rem",
                        clip: "rect(1px,1px,1px,1px)",
                        overflow: "hidden",
                        border: "0 !important",
                        height: "1px !important",
                        padding: "0 !important",
                        position: "absolute !important",
                        whiteSpace: "nowrap !important",
                        width: "1px !important",
                        margin: 0,
                        fontWeight: "normal",
                      }}
                    >
                      Prix de vente initial&nbsp;:
                    </Box>
                    {CartItemPrixInit}&nbsp;{vPrixSymbol}
                    &nbsp;
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: ".875rem",
                      margin: 0,
                      padding: 0,
                      border: 0,
                      fontWeight: "normal",
                      lineHeight: "normal",
                      color: "#767676",
                    }}
                  >
                    <Box component="span"> &nbsp;(</Box>
                    <Box component="span">{vRed}</Box>
                    <Box component="span">% de réduction)</Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box component="span">
          {vPromoprd1 && (
            <Box
              sx={{
                padding: "5px 0px 5px 0px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  border: "none",
                  verticalAlign: "middle",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  minHeight: "20px",
                  fontWeight: "700!important",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "28px",
                    color: "#067D62",
                    borderRadius: 0,
                    padding: 0,
                    position: "relative",
                    fontWeight: "700!important",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "14px",
                      marginBottom: 0,
                      textAlign: "left",
                      lineHeight: "15px",
                      color: "#067D62",
                      fontWeight: "700!important",
                    }}
                  >
                    {vPromoprd1}
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {vPromoprd2 && (
            <Box
              sx={{
                padding: "5px 0px 5px 0px",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {vPromoprd2}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            marginTop: "8px!important",
            marginBottom: "8px!important",
          }}
        >
          <Box
            component="table"
            sx={{
              marginBottom: "4px!important",
              borderCollapse: "collapse",
              width: "100%",
              display: "table",
              textIndent: "initial",
              borderSpacing: "2px",
              borderColor: "grey",
            }}
          >
            <Box component="tbody">
              {vMatériau && (
                <Box
                  component="tr"
                  sx={{
                    marginBottom: "8px!important",
                    display: "table-row",
                    verticalAlign: "inherit",
                    borderColor: "inherit",
                  }}
                >
                  <Box
                    component="td"
                    sx={{
                      "&:first-child": {
                        paddingTop: 0,
                      },
                      "&:first-child": {
                        paddingLeft: 0,
                      },
                      width: "26.18%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                        fontWeight: "700!important",
                      }}
                    >
                      Matériau
                    </Box>
                  </Box>

                  <Box
                    component="td"
                    sx={{
                      "&:first-child": {
                        paddingTop: 0,
                      },
                      "&:last-child": {
                        paddingRight: 0,
                      },
                      width: "78.68%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                      }}
                    >
                      {vMatériau}
                    </Box>
                  </Box>
                </Box>
              )}
              {vMarque && (
                <Box
                  component="tr"
                  sx={{
                    marginBottom: "8px!important",
                    display: "table-row",
                    verticalAlign: "inherit",
                    borderColor: "inherit",

                    borderCollapse: "collapse",
                    textIndent: "initial",
                    borderSpacing: "2px",
                    color: "#0F1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="td"
                    sx={{
                      "&:first-child": {
                        paddingLeft: 0,
                      },

                      width: "26.18%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                        fontWeight: "700!important",
                      }}
                    >
                      Marque
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      "&:last-child": {
                        paddingRight: 0,
                      },
                      width: "78.68%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontizSe: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                      }}
                    >
                      {selectedprd[0]?.marque}
                    </Box>
                  </Box>
                </Box>
              )}
              {vCouleur && (
                <Box
                  component="tr"
                  sx={{
                    marginBottom: "8px!important",
                    display: "table-row",
                    verticalAlign: "inherit",
                    borderColor: "inherit",

                    borderCollapse: "collapse",
                    textIndent: "initial",
                    borderSpacing: "2px",
                    color: "#0F1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="td"
                    sx={{
                      "&:first-child": {
                        paddingLeft: 0,
                      },

                      width: "26.18%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                        fontWeight: "700!important",
                      }}
                    >
                      Couleur
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      "&:last-child": {
                        paddingRight: 0,
                      },

                      width: "78.68%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontizSe: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                      }}
                    >
                      {vCouleur}
                    </Box>
                  </Box>
                </Box>
              )}
              {vDimensions && (
                <Box
                  component="tr"
                  sx={{
                    marginBottom: "8px!important",
                    display: "table-row",
                    verticalAlign: "inherit",
                    borderColor: "inherit",

                    borderCollapse: "collapse",
                    textIndent: "initial",
                    borderSpacing: "2px",
                    color: "#0F1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="td"
                    sx={{
                      "&:last-child": {
                        paddingBottom: 0,
                      },

                      "&:first-child": {
                        paddingLeft: 0,
                      },

                      width: "26.18%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontizSe: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                        fontWeight: "700!important",
                      }}
                    >
                      Dimensions
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      "&:last-child": {
                        paddingRight: 0,
                      },

                      width: "78.68%",
                      float: "none!important",
                      marginRight: 0,
                      padding: "3px",
                      verticalAlign: "top",
                      display: "table-cell",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0F1111",
                      fontizSe: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",
                        lineHeight: "20px!important",
                      }}
                    >
                      {vDimensions}
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            marginBottom: "16px!important",
            marginTop: "8px!important",
          }}
        >
          <Box
            component="hr"
            sx={{
              backgroundColor: "transparent",
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTop: "1px solid #e7e7e7",
              display: "block",
              height: "1px",
              lineHeight: "19px",
              marginBottom: "14px",
              marginTop: 0,
            }}
          ></Box>
          <Box
            component="h1"
            sx={{
              fontSize: "16px!important",
              lineHeight: "24px!important",
              fontWeight: "700!important",
              paddingBottom: "4px",
              textRendering: "optimizeLegibility",
            }}
          >
            À propos de cet article
          </Box>
          <Box
            component="ul"
            sx={{
              padding: 0,
              margin: "0 0 0 18px",
              color: "#0F1111",
              marginBottom: "4px!important",
            }}
          >
            {vDescart1 && (
              <Box
                component="li"
                sx={{
                  wordWrap: "break-word",
                  margin: 0,
                  listStyle: "disc",
                  color: "#0F1111",

                  "::marker": {
                    unicodeBidi: "isolate",
                    fontVariantNumeric: "tabular-nums",
                    textTransform: "none",
                    textIndent: "0px !important",
                    textAlign: "start !important",
                    textAlignLast: "start !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  {vDescart1}
                </Box>
              </Box>
            )}
            {vDescart2 && (
              <Box
                component="li"
                sx={{
                  wordWrap: "break-word",
                  margin: 0,
                  listStyle: "disc",
                  color: "#0F1111",

                  "::marker": {
                    unicodeBidi: "isolate",
                    fontVariantNumeric: "tabular-nums",
                    textTransform: "none",
                    textIndent: "0px !important",
                    textAlign: "start !important",
                    textAlignLast: "start !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  {vDescart2}
                </Box>
              </Box>
            )}
            {vDescart3 && (
              <Box
                component="li"
                sx={{
                  wordWrap: "break-word",
                  margin: 0,
                  listStyle: "disc",
                  color: "#0F1111",

                  "::marker": {
                    unicodeBidi: "isolate",
                    fontVariantNumeric: "tabular-nums",
                    textTransform: "none",
                    textIndent: "0px !important",
                    textAlign: "start !important",
                    textAlignLast: "start !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  {vDescart3}
                </Box>
              </Box>
            )}
            {vDescart4 && (
              <Box
                component="li"
                sx={{
                  wordWrap: "break-word",
                  margin: 0,
                  listStyle: "disc",
                  color: "#0F1111",

                  "::marker": {
                    unicodeBidi: "isolate",
                    fontVariantNumeric: "tabular-nums",
                    textTransform: "none",
                    textIndent: "0px !important",
                    textAlign: "start !important",
                    textAlignLast: "start !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  {vDescart4}
                </Box>
              </Box>
            )}
            {vDescart5 && (
              <Box
                component="li"
                sx={{
                  wordWrap: "break-word",
                  margin: 0,
                  listStyle: "disc",
                  color: "#0F1111",

                  "::marker": {
                    unicodeBidi: "isolate",
                    fontVariantNumeric: "tabular-nums",
                    textTransform: "none",
                    textIndent: "0px !important",
                    textAlign: "start !important",
                    textAlignLast: "start !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  {vDescart5}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const detailProduit = (
    <Box>
      <Box
        sx={{
          "&:last-child": {
            marginBottom: "4.5px",
          },

          WebkitTextSizeAdjust: "100%",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#0F1111",
        }}
      >
        <Box
          component="hr"
          sx={{
            clear: "left",
            background: "0 0!important",
            borderTop: "1px solid #CCC!important",
            marginBottom: "-36px!important",
            height: "44px!important",
            border: 0,
            filter: "none",
            zIndex: 0,
            zoom: 1,
            display: "block",
            lineHeight: "19px",
            marginTop: 0,

            "&::after": {
              display: "block",
              width: "100%",
              height: "44px",
              background:
                "-webkit-linear-gradient(left,#fff,rgba(255,255,255,0),#fff)",
              filter: "none",
              zIndex: 1,
              content: '""',
            },
          }}
        ></Box>
        <Box
          component="h2"
          sx={{
            paddingBottom: "8px",
            marginBottom: "0!important",
          }}
        >
          Détails sur le produit
        </Box>
        <Box>
          <Box
            component="ul"
            sx={{
              margin: "0 0 1px 18px",
              color: "#0F1111",
              padding: 0,
              marginBottom: "0!important",
            }}
          >
            <Box
              component="li"
              sx={{
                listStyle: "none",
                marginBottom: "5.5px",
                wordWrap: "break-word",
                margin: 0,
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "700!important",
                    color: "#0F1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Dimensions du produit (L x l x h) &rlm; : &lrm;
                </Box>
                <Box component="span">{vDimensions}</Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                listStyle: "none",
                marginBottom: "5.5px",
                wordWrap: "break-word",
                margin: 0,
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "700!important",
                    color: "#0F1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Numéro de fabrication &rlm; : &lrm;
                </Box>
                <Box component="span">{vNumfab}</Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                listStyle: "none",
                marginBottom: "5.5px",
                wordWrap: "break-word",
                margin: 0,
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "700!important",
                    color: "#0F1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Fabricant &rlm; : &lrm;
                </Box>
                <Box component="span">{vFabricant}</Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                listStyle: "none",
                marginBottom: "5.5px",
                wordWrap: "break-word",
                margin: 0,
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "700!important",
                    color: "#0F1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Poids &rlm; : &lrm;
                </Box>
                <Box component="span">{vPoids}</Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                listStyle: "none",
                marginBottom: "5.5px",
                wordWrap: "break-word",
                margin: 0,
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "700!important",
                    color: "#0F1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Pays d'origibne &rlm; : &lrm;
                </Box>
                <Box component="span">{vPaysorigibne}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const descProduit = (
    <Box>
      <Box>
        <Box
          sx={{
            width: "100%",

            "&::after, &::before": {
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
          <Box>
            <Box
              sx={{
                background:
                  "-webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)",
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)",
                height: "44px",
                marginBottom: "-18px",
                zIndex: 0,
                zoom: 1,

                marginTop: "24px",

                "&::after": {
                  background:
                    "-webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)",
                  background:
                    "linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)",
                  backgroundColor: "transparent",
                  content: '""',
                  display: "block",
                  height: "44px",
                  width: "100%",
                  zIndex: 1,
                },
              }}
            ></Box>
          </Box>
          <Box
            component="h2"
            sx={{
              color: "#CC6600",
              fontSize: "medium",
              margin: "0 0 0.25em",
              fontWeight: 700,
              lineHeight: "32px",
              paddingBottom: "4px",
              textRendering: "optimizeLegibility",
              WebkitTextSizeAdjust: "100%",
            }}
          >
            Description du produit
          </Box>
          <Box
            sx={{
              color: "#333333",
              wordWrap: "break-word",
              fontSize: "small",
              lineHeight: "initial",
              margin: "0.5em 0px 0em 25px",
              marginBottom: "8px!important",
            }}
          >
            <Box
              component="p"
              sx={{
                margin: "0em 0 1em 1em",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#333333",
                  wordWrap: "break-word",
                  fontSize: "small",
                  lineHeight: "initial",
                }}
              >
                <Box component="span">
                  {vDescdet}
                  <br />
                </Box>
                Caracteristiques :<br />
                {vDetprd1 && (
                  <Box component="span">
                    -&nbsp;{vDetprd1} <br />
                  </Box>
                )}
                {vDetprd2 && (
                  <Box component="span">
                    -&nbsp;{vDetprd2} <br />
                  </Box>
                )}
                {vDetprd3 && (
                  <Box component="span">
                    -&nbsp;{vDetprd3} <br />
                  </Box>
                )}
                {vDetprd4 && (
                  <Box component="span">
                    -&nbsp;{vDetprd4} <br />
                  </Box>
                )}
                {vDetprd5 && (
                  <Box component="span">
                    -&nbsp;{vDetprd5} <br />
                  </Box>
                )}
                {vDetprd6 && (
                  <Box component="span">
                    -&nbsp;{vDetprd6} <br />
                  </Box>
                )}
                {vDetprd7 && (
                  <Box component="span">
                    -&nbsp;{vDetprd7} <br />
                  </Box>
                )}
                {vDetprd8 && (
                  <Box component="span">
                    -&nbsp;{vDetprd8} <br />
                  </Box>
                )}
                {vDetprd9 && (
                  <Box component="span">
                    -&nbsp;{vDetprd9} <br />
                  </Box>
                )}
                {vDetprd10 && (
                  <Box component="span">
                    -&nbsp;{vDetprd10} <br />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const ficheTecProduit = (
    <Box
      sx={{
        "@media screen and (max-width: 1200px)": {
          maxWidth: "950px",
        },

        marginLeft: "auto",

        marginRight: "auto",
        width: "100%",
        flexWrap: "wrap",
        flex: "0 1 auto",
        display: "flex",
        fontSize: ".875rem",
        color: "#282828",
        WebkitFontSmoothing: "antialiased",
        WebkitTextSizeAdjust: "100%",

        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          flexBasis: "75%",
          maxWidth: "75%",
          minWidth: "75%",
          width: "75%",
          paddingLeft: "8px",
          paddingRight: "8px",
          color: "#282828",
          fontSize: ".875rem",
        }}
      >
        <Box
          component="section"
          sx={{
            fontSize: "1rem",
            marginTop: "16px",
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: "4px",
            display: "block",
            color: "#282828",
          }}
        >
          <Box
            component="header"
            sx={{
              paddingBottom: "8px",
              paddingTop: "8px",
              borderBottom: "1px solid #ededed",
              display: "block",
              fontSize: "1rem",
              color: "#282828",
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: "1.25rem",
                fontWeight: 500,
                paddingLeft: "16px",
                paddingBottom: "4px",
                paddingRight: "16px",
                paddingTop: "4px",
                margin: 0,
                color: "#282828",
              }}
            >
              Fiche technique
            </Box>
          </Box>

          <Box
            sx={{
              padding: "8px",
              "@media screen and (max-width: 1200px)": {
                maxWidth: "950px",
              },

              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              flexWrap: "wrap",
              flex: "0 1 auto",
              display: "flex",
              fontSize: "1rem",
              color: "#282828",
            }}
          >
            <Box
              component="article"
              sx={{
                paddingBottom: "8px",
                paddingTop: "8px",
                flexBasis: "50%",
                maxWidth: "50%",
                minWidth: "50%",
                width: "50%",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "block",
                fontSize: "1rem",
                color: "#282828",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #ededed",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  color: "#282828",
                }}
              >
                <Box
                  component="h2"
                  sx={{
                    fontSize: ".875rem",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    padding: "16px",
                    borderBottom: "1px solid #ededed",
                    margin: 0,
                    color: "#282828",
                  }}
                >
                  Principales caractéristiques
                </Box>
                <Box
                  sx={{
                    padding: "16px",
                    fontSize: "1rem",
                    color: "#282828",
                  }}
                >
                  <Box
                    component="p"
                    sx={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      border: "0px",
                      fontStretch: "inherit",
                      lineHeight: "1.3em",
                      verticalAlign: "baseline",
                      color: "rgb(98, 98, 98)",
                    }}
                  ></Box>
                  <Box
                    component="ul"
                    sx={{
                      paddingLeft: "16px",
                      margin: 0,

                      fontSize: "1rem",
                      color: "#282828",
                    }}
                  >
                    {vPcaract1 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract1}
                      </Box>
                    )}
                    {vPcaract2 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract2}
                      </Box>
                    )}
                    {vPcaract3 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract3}
                      </Box>
                    )}
                    {vPcaract4 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract4}
                      </Box>
                    )}
                    {vPcaract5 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract5}
                      </Box>
                    )}
                    {vPcaract6 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract6}
                      </Box>
                    )}
                    {vPcaract7 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract7}
                      </Box>
                    )}
                    {vPcaract8 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract8}
                      </Box>
                    )}
                    {vPcaract9 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract9}
                      </Box>
                    )}
                    {vPcaract10 && (
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "1rem",
                          color: "#282828",

                          "::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                          },
                        }}
                      >
                        {vPcaract10}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              component="article"
              sx={{
                paddingBottom: "8px",
                paddingTop: "8px",
                flexBasis: "50%",
                maxWidth: "50%",
                minWidth: "50%",
                width: "50%",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "block",
                fontSize: "1rem",
                color: "#282828",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #ededed",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  color: "#282828",
                }}
              >
                <Box
                  component="h2"
                  sx={{
                    fontSize: ".875rem",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    padding: "16px",
                    borderBottom: "1px solid #ededed",
                    margin: 0,
                    color: "#282828",
                  }}
                >
                  Descriptif technique
                </Box>
                <Box
                  component="ul"
                  sx={{
                    marginBottom: "4px",
                    marginTop: "4px",
                    paddingLeft: "16px",
                    paddingBottom: "8px",
                    paddingRight: "16px",
                    paddingTop: "8px",
                    listStyle: "none",
                    fontSize: "1rem",
                    fontSize: "1rem",
                    color: "#282828",
                  }}
                >
                  {vModèle && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        Modèle&nbsp;
                      </Box>
                      :&nbsp;{vModèle}
                    </Box>
                  )}
                  {vNumfab && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        N° fabrication&nbsp;
                      </Box>
                      :&nbsp;{vNumfab}
                    </Box>
                  )}
                  {vPoids && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        Poids&nbsp;
                      </Box>
                      :&nbsp;{vPoids}
                    </Box>
                  )}
                  {vPuissance && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        Puissance&nbsp;
                      </Box>
                      :&nbsp;{vPuissance}
                    </Box>
                  )}
                  {vContenance && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        Contenance&nbsp;
                      </Box>
                      :&nbsp;{vContenance}
                    </Box>
                  )}
                  {vTension && (
                    <Box
                      component="li"
                      sx={{
                        paddingBottom: "4px",
                        margin: 0,
                        display: "list-item",
                        textAlign: "-webkit-match-parent",
                        paddingTop: "4px",
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "#282828",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#282828",
                        }}
                      >
                        Tension&nbsp;
                      </Box>
                      :&nbsp;{vTension}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        margin: "0 auto",
        minWidth: "1000px",
        maxWidth: "1500px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          marginTop: "20px",
          paddingTop: 0,
          minWidth: "996px",
          padding: "14px 18px 18px",
          margin: "0 auto",
        }}
      >
        <Box>
          {rightCol}
          {leftCol}
          {centerCol}
        </Box>
        {detailProduit}
        {descProduit}
        {ficheTecProduit}
      </Box>
    </Box>
  );
};

export default ProdViewUpSm;
