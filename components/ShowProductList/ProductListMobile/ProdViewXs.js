import React from "react";
import Box from "@mui/material/Box";
import HandlesCartItemXs from "./HandlesCartItemXs";

export const ProdViewXs = ({ selectedprd }) => {
  const vDescDet = selectedprd[0]?.descdet;
  const vProdEtat = selectedprd[0]?.etatprd;
  const vProdMatériau = selectedprd[0]?.matériau;
  const vMarque = selectedprd[0]?.marque;
  const vPaysorigine = selectedprd[0]?.paysorigine;
  const vTailleDisp = selectedprd[0]?.tailleDisp;

  const detail_produit_1 = (
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
                Composition du matériau
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
                {vProdMatériau}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

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
                {vProdEtat}
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
                {vMarque}
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
                Pays d'origine
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
                {vPaysorigine}
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
                Tailles disponibles
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
                {vTailleDisp}
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
                Paiement
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
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        border: 0,
        color: "#191919",
        fontSize: ".875rem",
        MsTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
      }}
    >
      <HandlesCartItemXs selectedprd={selectedprd} />

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
                //
                padding: "10px 0",
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
                              Détails sur le produit
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              margin: "8px 0",
                              wordBreak: "break-word",
                            }}
                          >
                            {vProdMatériau && <>{detail_produit_1}</>}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
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
                            {vProdEtat && <>{info_article_1} </>}
                            {vMarque && <> {info_article_2} </>}
                            {vPaysorigine && <>{info_article_3} </>}
                            {vTailleDisp && <> {info_article_4}</>}
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
                          <Box
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
                          </Box>

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
                                  {vDescDet}
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
                      //
                      margin: "10px 0 10px",
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
