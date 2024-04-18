import React from "react";
import Box from "@mui/material/Box";
//import Image from "next/image";
//import Typography from "@mui/material/Typography";
//import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
//import CircularProgress from "@mui/material/CircularProgress";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SvgIcon from "@mui/material/SvgIcon";
//import QteeSelectXs from "../ProductListAllDevices/QteeSelectXs";
import ProdLinkMobile from "./ProdLinkMobile";
//import { Suspense } from "react";
//import ShowLoading from "../../Loading/ShowLoading";
import ImageCartItemXs from "./ImageCartItemXs";
import HandlesCartItemXs from "./HandlesCartItemXs";

function CustChevronRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <ChevronRightIcon />
    </SvgIcon>
  );
}
export const ProdViewXs = ({ selectedprd }) => {
  //const vAchatImmédiatButt = "achatImmédiatButt";
  //const vAjouterPanierButt = "ajouterPanierButt";
  const vDescArticleButt = "descArticleButt";
  const vDescCompleteButt = "descCompleteButt";

  const vProductNum = selectedprd[0]?.productId;
  const vProdImage = selectedprd[0]?.imgJpg;
  const vDescPrd = selectedprd[0]?.descPrd;
  const vPrixAct = selectedprd[0]?.prixAct;
  //const vPrixSymbol = selectedprd[0]?.prixSymbol;
  const vProdEtat = selectedprd[0]?.etatprd;
  const vProdQteeDisp = selectedprd[0]?.qteedisp || 0;
  const vstatus = "idle";

  //let qteemax = selectedprd[0]?.qteedisp || 0;

  const info_article_1 = (
    <Box
      sx={{
        "&:not(:last-child)": {
          margin: "0 0 8px",
          display: "block",
        },

        wordBreak: "break-word",
      }}
    >
      <Box
        sx={{
          margin: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#707070",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#707070",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                État
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "8px",
            width: "58%",
            paddingRight: "5px",
            color: "#111820",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "calc(100% - 8px)",
              display: "inline-block",
              color: "#111820",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#111820",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                État correct - Reconditionné
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_article_2 = (
    <Box
      sx={{
        "&:not(:last-child)": {
          margin: "0 0 8px",
          display: "block",
        },

        wordBreak: "break-word",
      }}
    >
      <Box
        sx={{
          margin: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#707070",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#707070",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Marque
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "8px",
            width: "58%",
            paddingRight: "5px",
            color: "#111820",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "calc(100% - 8px)",
              display: "inline-block",
              color: "#111820",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#111820",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Marque1 - Marque2
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_article_3 = (
    <Box
      sx={{
        "&:not(:last-child)": {
          margin: "0 0 8px",
          display: "block",
        },

        wordBreak: "break-word",
      }}
    >
      <Box
        sx={{
          margin: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#707070",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#707070",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                N° article
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "8px",
            width: "58%",
            paddingRight: "5px",
            color: "#111820",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "calc(100% - 8px)",
              display: "inline-block",
              color: "#111820",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#111820",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                123456789023
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_article_4 = (
    <Box
      sx={{
        display: "flex",
        wordBreak: "break-word",
      }}
    >
      <Box
        sx={{
          margin: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#707070",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#707070",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Information specifique sur le type de produit
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "8px",
            width: "58%",
            paddingRight: "5px",
            color: "#111820",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "calc(100% - 8px)",
              display: "inline-block",
              color: "#111820",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#111820",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Type de produit
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_livraison = (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          marginTop: 0,
          marginLeft: 0,
          margin: "5px 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            //livraison
            width: "42%",
            color: "#767676",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#767676",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#767676",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Livraison
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "53%",
            marginLeft: "-2px",
            paddingRight: "5px",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "unset",
              display: "inline-block",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                à domicile
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_retours = (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          marginLeft: 0,
          margin: "5px 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#767676",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#767676",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#767676",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Retours
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "53%",
            marginLeft: "-2px",
            paddingRight: "5px",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "unset",
              display: "inline-block",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Acceptés dans un délai de 15 jours
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const info_paiements = (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          marginLeft: 0,
          marginBottom: 0,
          margin: "5px 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "42%",
            color: "#767676",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              color: "#767676",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#767676",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                Paiements
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "53%",
            marginLeft: "-2px",
            paddingRight: "5px",
            display: "inline-block",
            boxSizing: "border-box",
            wordBreak: "break-word",
            verticalAlign: "top",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              maxWidth: "unset",
              display: "inline-block",
              wordBreak: "break-word",
              fontSize: ".875rem",
            }}
          >
            <Box>
              <Box
                component="span"
                sx={{
                  color: "#707070",
                  wordBreak: "break-word",
                  fontSize: ".875rem",
                }}
              >
                à la livraison
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
        outline: 0,

        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        lineHeight: "20px",

        letterSpacing: "normal",
        WebkitFontSmoothing: "antialiased",
        MozFontSmoothing: "antialiased",
        MsFontSmoothing: "antialiased",
        fontSmoothing: "antialiased",

        WebkitTextSizeAdjust: "none",
        MozTextSizeAdjust: "none",
        MsTextSizeAdjust: "none",
        textSizeAdjust: "none",
        verticalAlign: "middle",
      }}
    >
      <HandlesCartItemXs
        prodId={vProductNum}
        prodImage={vProdImage}
        prodDesc={vDescPrd}
        prodPrix={vPrixAct}
        prodEtat={vProdEtat}
        status={vstatus}
        prodQteeDisp={vProdQteeDisp}
      >
        <ImageCartItemXs selectedprd={selectedprd} />
      </HandlesCartItemXs>

      <Box
        sx={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          lineHeight: "20px",

          letterSpacing: "normal",
          WebkitFontSmoothing: "antialiased",
          MozFontSmoothing: "antialiased",
          MsFontSmoothing: "antialiased",
          fontSmoothing: "antialiased",

          WebkitTextSizeAdjust: "none",
          MozTextSizeAdjust: "none",
          MsTextSizeAdjust: "none",
          textSizeAdjust: "none",
          verticalAlign: "middle",
        }}
      >
        <Box>
          <Box>
            <Box
              sx={{
                border: 0,
                margin: 0,
                padding: "20px 0",
                borderRadius: "2px",
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  margin: "0 16px",
                }}
              >
                <Box
                  sx={{
                    lineHeight: "1.154",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        "&:not(:last-child)": {
                          margin: "0 0 20px",
                        },
                        border: 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          height: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Box component="span">
                            <Box
                              component="span"
                              sx={{
                                fontSize: "1.25rem",
                                color: "#111820",
                                fontWeight: "700",
                                lineHeight: "1.25",
                                margin: 0,
                                display: "inline-block",
                              }}
                            >
                              À propos de cet article
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              margin: "8px 0",
                              wordBreak: "break-word",
                            }}
                          >
                            {info_article_1}
                            {info_article_2}
                            {info_article_3}
                            {info_article_4}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        border: 0,
                        "&:last-child": {
                          marginBottom: 0,
                        },

                        margin: "8px 0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          height: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <ProdLinkMobile
                            buttonName={vDescArticleButt}
                            productNum={vProductNum}
                          >
                            <Box
                              // component="a"
                              sx={{
                                alignItems: "center",
                                display: "flex",
                                color: "inherit",
                                textDecoration: "none",
                                backgroundColor: "transparent",
                                outline: 0,
                                cursor: "pointer",
                                ":WebkitAnyLink": {
                                  cursor: "pointer",
                                },
                                fontSize: ".875rem",
                              }}
                            >
                              <Box
                                component="span"
                                aria-hidden="true"
                                tabIndex="-1"
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    fontSize: "1.25rem",
                                    color: "#111820",
                                    fontWeight: 700,
                                    lineHeight: "1.25",
                                    margin: 0,
                                    display: "inline-block",
                                  }}
                                >
                                  Description de l'article
                                </Box>
                              </Box>
                              <CustChevronRightIcon
                                sx={{
                                  marginLeft: "auto",
                                  flexShrink: 0,
                                  fill: "#282828",
                                }}
                              />
                            </Box>
                          </ProdLinkMobile>

                          <Box
                            component="span"
                            sx={{
                              border: 0,
                              clip: "rect(1px,1px,1px,1px)",
                              height: "1px",
                              overflow: "hidden",
                              padding: 0,
                              position: "absolute",
                              whiteSpace: "nowrap",
                              width: "1px",
                            }}
                          ></Box>
                          <Box
                            sx={{
                              margin: "8px 0",
                              wordBreak: "break-word",
                            }}
                          >
                            <Box
                              sx={{
                                "&:not(:last-child)": {
                                  margin: "0 0 8px",
                                  display: "block",
                                },

                                wordBreak: "break-word",
                              }}
                            >
                              <Box
                                sx={{
                                  wordBreak: "break-word",
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    color: "var(--color-text-primary,#111820)",
                                    fontSize: ".875rem",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  Lecteur optique : Graveur DVD. Réseau :
                                  Integrated Realtek LOM + Clé USB Wifi. - 1 x
                                  HDMI. MonsieurCyberMan Reprend &amp; Répare
                                  Vos Vieux PC. 56350 Béganne - France. Les
                                  Fosses Rouges. Nos coordonnées.
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                              }}
                            >
                              <Box>
                                <ProdLinkMobile
                                  buttonName={vDescCompleteButt}
                                  productNum={vProductNum}
                                >
                                  <Box
                                    // component="a"
                                    // onClick={handleClick}
                                    //  onTouchEnd={handleTouchEnd}
                                    sx={{
                                      textDecoration: "underline",
                                      color: "#3665f3",
                                      cursor: "initial",
                                      wordBreak: "break-word",
                                    }}
                                  >
                                    <Box
                                      component="span"
                                      aria-hidden="true"
                                      tabIndex="-1"
                                      sx={{
                                        fontSize: ".875rem",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        aria-hidden="true"
                                        tabIndex="-1"
                                        sx={{
                                          color: "#3665f3",
                                          textDecoration: "underline",
                                          wordBreak: "break-word",
                                          fontSize: ".875rem",
                                        }}
                                      >
                                        Voir la description complète
                                      </Box>
                                    </Box>
                                  </Box>
                                </ProdLinkMobile>
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
      <Box>
        <Box>
          <Box>
            <Box>
              <Box>
                <Box
                  sx={{
                    margin: "0 16px",
                    paddingBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      margin: "30px 0 10px",
                      fontSize: ".875rem",
                      color: "var(--color-text-primary,#111820)",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "100%",
                      }}
                    >
                      <Box
                        component="h2"
                        sx={{
                          color: "#111820",
                          fontSize: "20px",
                          fontWeight: 700,
                          lineHeight: "28px",
                          margin: 0,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            color: "#111820",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "28px",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#111820",
                              fontSize: "20px",
                              fontWeight: 700,
                              lineHeight: "28px",
                            }}
                          >
                            Livraison, retours et paiements
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      "&:last-child": {
                        marginBottom: 0,
                        border: 0,
                      },

                      margin: "8px 0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Box>
                          {info_livraison}
                          {info_retours}
                          {info_paiements}
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

export default ProdViewXs;
