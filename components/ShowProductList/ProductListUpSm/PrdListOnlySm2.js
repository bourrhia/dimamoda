import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ShowCatTitleByCat from "../ProductListAllDevices/ShowCatTitleByCat";
import ProdLinkUpsm from "./ProdLinkUpSm";

export const PrdListSmMod1 = ({
  imgmrv,
  category,
  catTitle,
  searchTerm,
  otherSearchTerm,
  nbrProd,
}) => {
  const vImgClickSm1 = "imgClickSm1";

  const renderedImg = imgmrv.map((image) => (
    <Box
      component="li"
      key={image.productId}
      sx={{
        marginRight: "16px",
        display: "inline-block",
        flexShrink: 0,
        listStyle: "none",
        scrollSnapAlign: "start",
        whiteSpace: "initial",
        boxSizing: "border-box",

        "@media screen and (min-width: 600px)": {
          width: "calc(100% / (3))",
        },

        "@media screen and (min-width: 768px)": {
          width: "calc(100% / (4))",
        },

        "@media screen and (min-width: 960px)": {
          width: "calc(100% / (5))",
        },

        "@media screen and (min-width: 1083px)": {
          width: "calc(100% / (6))",
        },
      }}
    >
      <Box
        sx={{
          display: "block",
          marginLeft: "3px",
          marginTop: "3px",
          padding: "1px",

          cursor: "pointer",
          color: "#111820",

          ":link": {
            color: "#111820",
          },

          ":hover": {
            textDecoration: "underline",
          },

          ":WebkitAnyLink": {
            cursor: "pointer",
          },

          listStyle: "none",
          whiteSpace: "initial",
        }}
      >
        <ProdLinkUpsm buttonName={vImgClickSm1} productNum={image.productId}>
          <Box
            sx={{
              paddingTop: "100%",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",

              "&::after": {
                backgroundColor: "rgba(0,0,0,0.02)",
                bottom: 0,
                content: '""',
                display: "block",
                left: 0,
                pointerEvents: "none",
                position: "absolute",
                right: 0,
                top: 0,
              },
            }}
          >
            <Image
              src={image.imgJpg}
              alt="Image"
              sizes="(min-width: 1083px) 16vw, (min-width: 960px) 20vw, (min-width: 768px) 25vw,(min-width: 600px) 33vw"
              fill
              style={{
                objectFit: "contain",
                padding: "10px 10px 10px 10px",
              }}
            />
          </Box>
          <Typography variant="subtitle2" gutterBottom component="div">
            <Box
              sx={{
                maxHeight: "2.25rem",
                marginBottom: 0,
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                MozBoxOrient: "vertical",
                MozLineClamp: 2,
                display: "-webkit-box",
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginTop: "16px",
                lineHeight: "18px",
                color: "#111820",
                fontWeight: 500,
              }}
            >
              {image.descPrd}
            </Box>
          </Typography>
          <Box>
            <Box
              component="span"
              sx={{
                fontSize: "1rem",
                display: "block",
                color: "#111820",
                fontWeight: 700,
              }}
            >
              {image.prixAct}&nbsp;{image.prixSymbol}
            </Box>
            {image.red && (
              <Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "0.75rem",
                    marginTop: "6px",
                    color: "#707070",
                  }}
                >
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
                  >
                    Prix de vente initial :
                  </Box>
                  <Box
                    component="del"
                    sx={{
                      textDecoration: "line-through",
                    }}
                  >
                    {image.prixIni}&nbsp;{image.prixSymbol}
                  </Box>
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "0.75rem",
                    marginTop: "6px",
                    color: "#707070",
                    marginLeft: "10px",
                  }}
                >
                  <Box
                    component="strong"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {image.red}&nbsp;% de réduction
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </ProdLinkUpsm>
      </Box>
    </Box>
  ));

  return (
    <>
      <Box>
        <ShowCatTitleByCat
          category={category}
          catTitle={catTitle}
          searchTerm={searchTerm}
          otherSearchTerm={otherSearchTerm}
          nbrProd={nbrProd}
        />
      </Box>
      <Box>
        <Box>
          <Box
            sx={{
              overflow: "visible",
              marginTop: 0,
              marginBottom: 0,

              "@media screen and (min-width: 601px)": {
                margin: "16px 0 32px",
              },
              position: "relative",
            }}
          >
            <Box
              sx={{
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "hidden",
                position: "relative",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    ":hover": {
                      borderColor: "rgba(0,0,0,0.4)",
                    },

                    overflowX: "auto",
                    overflowY: "hidden",
                    paddingBottom: "10px",
                    scrollBehavior: "smooth",
                    scrollSnapType: "x proximity",
                    transition:
                      "border-color .5s,scrollbar-color .5s,transform .45s ease-in-out",
                    display: "flex",

                    margin: 0,
                    position: "relative",
                    transform: "translate3d(0,0,0)",
                    width: "100%",
                    willChange: "transform",

                    " :-webkit-scrollbar": {
                      height: "5px",
                    },
                    " :-webkit-scrollbar-thumb": {
                      borderColor: "inherit",
                      borderRadius: "4px",
                      borderRightStyle: "inset",
                      borderRightWidth: "calc(100vw + 100vh)",
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
    </>
  );
};

export default PrdListSmMod1;
