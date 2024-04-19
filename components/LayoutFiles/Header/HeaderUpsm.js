import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import HeaderButtons from "./HeaderButtons";
import FuzzySearch from "./FuzzySearch";
import CartItemsCount from "../../Cart/CartItemsCount";

function HeaderUpsm() {
  const vHandleNavHomeButt = "handleNavHomeButt";
  const vUserSessionButt = "userSessionButt";

  return (
    <>
      <Box
        component="table"
        role="presentation"
        sx={{
          borderCollapse: "collapse",
          borderSpacing: 0,
          width: "100%",
          marginTop: 0,
          background: "none !important",
          borderColor: "grey",
          textAlign: "left",
        }}
      >
        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                width: "1%",
                verticalAlign: "middle",
                padding: 0,
                minWidth: "3px",
                display: "table-cell",
                textAlign: "left",
                paddingRight: "80px",
              }}
            >
              <Box
                component="h1"
                sx={{
                  display: "block",
                  margin: 0,
                }}
              >
                <HeaderButtons buttonName={vHandleNavHomeButt}>
                  <Box
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: 0,
                      width: "150px",
                      height: "35px",
                    }}
                  >
                    <Image
                      src="/logopic.svg"
                      alt="logo"
                      sizes="150px"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </HeaderButtons>
              </Box>
            </Box>

            <Box
              component="td"
              sx={{
                width: "99%",
                verticalAlign: "middle",
                padding: 0,
                display: "table-cell",
              }}
            >
              <FuzzySearch>
                <Box
                  sx={{
                    "@keyframes animate-search-icon": {
                      "0%": {
                        opacity: 0,
                      },

                      "50%": {
                        opacity: ".1",
                      },

                      "75%": {
                        opacity: ".5",
                      },

                      "100%": {
                        opacity: 1,
                      },
                    },
                    position: "absolute",
                    left: "12px",
                    width: "24px",
                    height: "24px",
                    top: "7px",

                    fill: "#767676",
                    verticalAlign: "middle",
                    animationName: "animate-search-icon",
                    animationDuration: ".15s",
                  }}
                >
                  <SearchIcon
                    sx={{
                      fill: "#767676",
                      pointerEvents: "none",
                      strokeWidth: 0,
                      verticalAlign: "middle",
                    }}
                    aria-hidden="true"
                    focusable="false"
                  ></SearchIcon>
                </Box>
              </FuzzySearch>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        role="navigation"
        aria-label="Compte"
        sx={{
          display: { xs: "none", sm: "block" },
          boxShadow: "none",
          backgroundColor: "#fff",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          height: "30px",
          boxSizing: "initial",
          display: "block",
          whiteSpace: "nowrap",
          lineHeight: 1,
          fontSize: "14px",
          webkitTextSizeAdjust: "100%",
          textAlign: "left",
        }}
      >
        <Box
          component="ul"
          sx={{
            margin: 0,
            padding: 0,
            listStyle: "none outside none",
            marginTop: "2px",
            textAlign: "left",
            height: "100%",
          }}
        >
          <Box
            component="li"
            sx={{
              "&>:first-of-type": {
                background: 0,
              },

              display: "inline-block",
              listStyle: "none",
              fontSize: "12px",
              margin: 0,
              textAlign: "-webkit-match-parent",
              whiteSpace: "nowrap",
              height: "100%",
            }}
          >
            <HeaderButtons buttonName={vUserSessionButt}></HeaderButtons>
          </Box>
        </Box>
        <Box
          component="ul"
          sx={{
            position: "absolute",
            top: "1px",
            right: 0,
            zIndex: "99999",
            zoom: 1,
            margin: 0,
            padding: 0,
            listStyle: "none outside none",
            alignItems: "center",
            whiteSpace: "nowrap",
            textAlign: "left",
            height: "100%",
            display: "-webkit-flex",
            display: "-ms-flexbox",
            display: "flex",
          }}
        >
          <Box
            component="li"
            sx={{
              listStyle: "none",
              marginRight: 0,
              boxSizing: "border-box",
              verticalAlign: "middle",
              position: "relative",
              whiteSpace: "nowrap",
              margin: "0 3px",
              flex: "0 0 auto",
              justifyContent: "flex-end",
              display: "flex",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <Box
                sx={{
                  display: "inline",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              listStyle: "none",
              marginLeft: 0,
              display: "inline-block",
              verticalAlign: "middle",
              position: "relative",
              whiteSpace: "nowrap",
              margin: "0 3px",
              textAlign: "-webkit-match-parent",
              color: "#333",
              padding: 0,
              flex: "0 0 auto",
              justifyContent: "flex-end",
              display: "flex",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <Box
                sx={{
                  display: "-webkit-flex",
                  display: "-ms-flexbox",
                  display: "flex",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    padding: 0,
                    color: "#111820 !important",
                    cursor: "pointer",
                    borderWidth: "1px 1px 0",
                    position: "relative",
                    fontSize: "12px",
                    border: "1px solid transparent",
                    textDecoration: "none !important",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: 0,
                  }}
                >
                  <CartItemsCount />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeaderUpsm;
