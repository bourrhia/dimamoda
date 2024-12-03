"use client";

import React from "react";
import Box from "@mui/material/Box";
import FooterButtons from "./FooterButtons";
import { useRouter } from "next/navigation";

function FouterXs() {
  const vTopOfPageButt = "topOfPageButt";
  const vHomePageButt = "homePageButt";

  const router = useRouter();

  const handleNeedHelp = () => {
    try {
      router.push("/footerXs/needHelp");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleAboutUs = () => {
    try {
      router.push("/footerXs/aboutUs");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handlePaiement = () => {
    try {
      router.push("/footerXs/paiement");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleDelivery = () => {
    try {
      router.push("/footerXs/delivery");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  const handleReturnRefund = () => {
    try {
      router.push("/footerXs/returnRefund");
    } catch (err) {
      console.error("An error occurred while navigating to need help : ", err);
    } finally {
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        display: "block",
        color: "#0F1111",
        fontSize: "1.5em",
        lineHeight: "1.35",
      }}
    >
      <Box
        sx={{
          background: "#0D141E",
          paddingBottom: "35px",
          position: "relative",
          width: "100%",
          minWidth: "200px",
          fontFamily: "inherit",
          fontSize: "12px",
          lineHeight: "1em",
          color: "#0F1111",
        }}
      >
        <FooterButtons buttonName={vTopOfPageButt}>
          <Box
            component="i"
            sx={{
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "transparent",
              borderTopWidth: 0,
              borderBottom: "5px solid #ccc",
              width: 0,
              height: 0,
              fontSize: 0,
              lineHeight: 0,
              display: "inline-block",
              WebkitBoxSizing: "border-box",
              textAlign: "center",
              fontFamily: "inherit",
            }}
          ></Box>
          <Box
            component="b"
            sx={{
              color: "#fff",
              fontWeight: 400,
              display: "block",
              fontSize: "11px",
              lineHeight: "30px",
              textTransform: "uppercase",
              MozBoxSizing: "border-box",
              WebkitBoxSizing: "border-box",
              textAlign: "center",

              ":-webkit-any-link": {
                cursor: "pointer",
              },

              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Haut de la page
          </Box>
        </FooterButtons>

        <Box
          component="ul"
          sx={{
            background: "#fff",
            overflow: "hidden",
            margin: 0,
            padding: "0 20px 25px 20px",
            backgroundColor: "#232F3E",
            border: 0,
            WebkitBorderRadius: 0,
            MozBorderRadius: 0,
            borderRadius: 0,
            MozBoxSizing: "border-box",
            WebkitBoxSizing: "border-box",
            color: "#0F1111",
            unicodeBidi: "isolate",
            fontFamily: "inherit",
            fontSize: "12px",
            lineHeight: "1em",
          }}
        >
          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              float: "right",
              clear: "right",
              paddingLeft: "4px",
              paddingRight: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              fontWeight: "bold",
            }}
          >
            <Box
              component="a"
              onClick={handlePaiement}
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                cursor: "pointer",
                wordWrap: "break-word",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },

                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Mode de paiement
              </Box>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              float: "right",
              clear: "right",
              paddingLeft: "4px",
              paddingRight: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              fontWeight: "bold",
            }}
          >
            <Box
              component="a"
              onClick={handleDelivery}
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                cursor: "pointer",
                wordWrap: "break-word",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },

                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Modalités de livraison
              </Box>
            </Box>
          </Box>

          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              paddingRight: "4px",
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0F1111",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              fontWeight: "bold",
            }}
          >
            <FooterButtons buttonName={vHomePageButt}>
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Acceuil
              </Box>
            </FooterButtons>
          </Box>
          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              paddingRight: "4px",
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0F1111",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",

              fontWeight: "bold",
            }}
          >
            <Box
              component="a"
              onClick={handleNeedHelp}
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                cursor: "pointer",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Besoin d'aide
              </Box>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              paddingRight: "4px",
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0F1111",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",

              fontWeight: "bold",
            }}
          >
            <Box
              component="a"
              onClick={handleAboutUs}
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                cursor: "pointer",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Qui sommes-nous
              </Box>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              paddingRight: "4px",
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0F1111",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              fontWeight: "bold",
            }}
          >
            <Box
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Commandez par tél :
              </Box>
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                <strong>06 61 44 91 63</strong>
              </Box>
            </Box>
          </Box>

          <Box
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: "50%",
              display: "block",
              marginBottom: 0,
              paddingRight: "4px",
              marginTop: "25px",
              borderBottom: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0F1111",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              fontWeight: "bold",
            }}
          >
            <Box
              component="a"
              onClick={handleReturnRefund}
              sx={{
                padding: 0,
                display: "block",
                color: "#111",
                fontSize: "15px",
                lineHeight: "16px",
                fontFamily: "inherit",
                textDecoration: "none",
                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                cursor: "pointer",
              }}
            >
              <Box
                component="span"
                sx={{
                  whiteSpace: "normal",
                  color: "#fff",
                  overflow: "inherit",
                  "&:not(:focus)": {
                    outline: "none",
                  },
                  display: "inline-block",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "16px",
                }}
              >
                Politique de Retours et de Remboursements
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FouterXs;
