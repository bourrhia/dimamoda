"use client";

import React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

function FouterUpsm() {
  const router = useRouter();

  const handleNeedHelp = () => {
    try {
      router.push("/footerUpSm/needHelp");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleAboutUs = () => {
    try {
      router.push("/footerUpSm/aboutUs");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handlePaiement = () => {
    try {
      router.push("/footerUpSm/paiement");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleDelivery = () => {
    try {
      router.push("/footerUpSm/delivery");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleReturnRefund = () => {
    try {
      router.push("/footerUpSm/returnRefund");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  return (
    <Box
      sx={{
        borderTop: "1px solid #ccc",
        background: "#f7f7f7",
        BannerOutsideMargins: "12px",
        WebkitTextSizeAdjust: "100%",
        color: "#191919",
        fontSize: "0.875rem",
        BubbleShadow: "0 2px 7px #00000026, 0 5px 17px #0003",
      }}
    >
      <Box>
        <Box
          component="footer"
          id="footerid"
          role="contentinfo"
          sx={{
            background: "#0000",
            borderTop: 0,
            maxWidth: "1248px",
            margin: "10px 0 0",
            padding: "20px 10px 40px 10px",
            marginLeft: "32px",
            marginRight: "32px",
            lineHeight: 1,
            fontSize: "14px",
            color: "#333",
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              clear: "both",
              marginBottom: "20px",
              position: "relative",
              lineHeight: 1,
              fontSize: "14px",
              color: "#333",
              textAlign: "left",
              WebkitTextSizeAdjust: "100%",
            }}
          >
            <Box
              component="table"
              role="presentation"
              sx={{
                width: "100%",
                marginTop: "20px",
                borderSpacing: 0,
                borderCollapse: "collapse",
                display: "table",
                boxSizing: "border-box",
                textIndent: "initial",
                unicodeBidi: "isolate",
                borderColor: "gray",
                lineHeight: 1,
                fontSize: "14px",
                color: "#333",
                textAlign: "left",
              }}
            >
              <Box
                component="tbody"
                sx={{
                  display: "table-row-group",
                  verticalAlign: "middle",
                  unicodeBidi: "isolate",
                  borderColor: "inherit",
                  borderSpacing: 0,
                  borderCollapse: "collapse",
                  textIndent: "initial",
                  lineHeight: 1,
                  fontSize: "14px",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                <Box
                  component="tr"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box component="td">
                    <Box
                      component="h3"
                      sx={{
                        color: "#191919 !important",
                        fontSize: "0.75rem !important",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#191919 !important",
                          fontSize: "0.75rem !important",
                          display: "inline-block",
                          textDecoration: "none",
                          marginRight: "5px",

                          ":-webkit-any-link": {
                            cursor: "pointer",
                          },

                          fontWeight: "bold",
                        }}
                      >
                        Besoin d'aide ?
                      </Box>
                    </Box>
                    <Box
                      component="ul"
                      sx={{
                        padding: 0,
                        margin: 0,
                        marginBottom: "30px",
                        display: "block",
                        float: "unset",
                        height: "initial",
                        paddingRight: "10px",
                        listStyle: "none",
                        minWidth: "177px",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlinestart: "40px",
                        unicodeBidi: "isolate",
                      }}
                    >
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          onClick={handleNeedHelp}
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,

                            ":hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Contactez-nous
                        </Box>
                      </Box>
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,
                          }}
                        >
                          Commander par Tél :&nbsp;
                          <strong>06 61 44 91 63</strong>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      maxWidth: "235px",
                      verticalAlign: "top",
                      padding: "1px 0",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      component="h3"
                      sx={{
                        color: "#191919 !important",
                        fontSize: "0.75rem !important",
                        display: "block",
                        float: "unset",
                        height: "initial",
                        textAlign: "left",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#191919 !important",
                          fontSize: "0.75rem !important",
                          display: "inline-block",
                          textDecoration: "none",
                          marginRight: "5px",
                          ":-webkit-any-link": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        À propos
                      </Box>
                    </Box>
                    <Box
                      component="ul"
                      sx={{
                        padding: 0,
                        margin: 0,
                        marginBottom: "30px",
                        display: "block",
                        float: "unset",
                        height: "initial",
                        paddingRight: "10px",
                        listStyle: "none",
                        minWidth: "177px",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlinestart: "40px",
                        unicodeBidi: "isolate",
                      }}
                    >
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          onClick={handleAboutUs}
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,

                            ":hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Qui sommes-nous
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      maxWidth: "235px",
                      verticalAlign: "top",
                      padding: "1px 0",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      component="h3"
                      sx={{
                        color: "#191919 !important",
                        fontSize: "0.75rem !important",
                        display: "block",
                        float: "unset",
                        height: "initial",
                        textAlign: "left",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#191919 !important",
                          fontSize: "0.75rem !important",
                          display: "inline-block",
                          textDecoration: "none",
                          marginRight: "5px",
                          ":-webkit-any-link": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        Liens utiles
                      </Box>
                    </Box>
                    <Box
                      component="ul"
                      sx={{
                        padding: 0,
                        margin: 0,
                        marginBottom: "30px",
                        display: "block",
                        float: "unset",
                        height: "initial",
                        paddingRight: "10px",
                        listStyle: "none",
                        minWidth: "177px",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlinestart: "40px",
                        unicodeBidi: "isolate",
                      }}
                    >
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          onClick={handleDelivery}
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,

                            ":hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Modalités de livraison
                        </Box>
                      </Box>
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          onClick={handlePaiement}
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,

                            ":hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Mode de paiement
                        </Box>
                      </Box>
                      <Box
                        component="li"
                        sx={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none outside none",
                          marginBottom: "12px",
                          display: "list-item",
                          fontSize: "12px",
                          lineHeight: 1,
                          color: "#333",
                        }}
                      >
                        <Box
                          component="a"
                          onClick={handleReturnRefund}
                          sx={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#767676 !important",
                            textDecoration: "none",
                            marginRight: "5px",

                            ":-webkit-any-link": {
                              cursor: "pointer",
                            },

                            cursor: "pointer",
                            lineHeight: 1,

                            ":hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Politique de retours et de remboursements
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
}

export default FouterUpsm;
