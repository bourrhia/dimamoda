import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ProdLinkMobile from "./ProdLinkMobile";
import ShowCategory from "../ProductListAllDevices/ShowCategory";

export const AllPrdtsxs1 = ({ imgmrv, catTitle }) => {
  const vRenderImgXsButt = "renderedImgXsButt";

  const renderedImg = imgmrv.map((image) => (
    <Box
      key={image.productId}
      sx={{
        width: "100%",
        padding: "8px 0",
        borderBottom: "1px solid #e5e5e5",

        position: "relative",
        fontWeight: 400,
        background: "#fff",
        listStyle: "none",
        WebkitTransition: "all .2s ease-out",
        transition: "all .2s ease-out",
        WebkitTransitionProperty: "margin,padding,border",
        TransitionProperty: "margin,padding,border",

        display: "list-item",
        textAlign: "-webkit-match-parent",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",

          "&::before,&::after": {
            content: '""',
            display: "table",
            lineHeight: 0,
          },

          marginLeft: "16px!important",
        }}
      >
        <ProdLinkMobile
          buttonName={vRenderImgXsButt}
          productNum={image.productId}
        >
          <Box
            sx={{
              color: "#111820",
              display: "inline-block",
              width: "100%",
              background: "#fff",
              textDecoration: "none!important",
              cursor: "pointer",

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                width: "142px",
                float: "left",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",

                  "&::before": {
                    content: '""',
                    display: "block",
                    paddingTop: "100%",
                  },
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  textAlign: "center",
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  verticalAlign: "middle",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    textAlign: "center",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    verticalAlign: "middle",
                    display: "inline-block",
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={image.imgJpg}
                    alt="Image"
                    fill
                    sizes="142px"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "calc(100% - 142px)",
                fontSize: "12px",
                float: "left",
                padding: "0 0 0 12px",
                color: "#707070",

                "&::before,&::after": {
                  content: '""',
                  display: "table",
                  lineHeight: 0,
                },

                paddingTop: "28px",
              }}
            >
              <Box
                component="h3"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "54px",
                  WebkitLineClamp: 3,
                  display: "-webkit-inline-box",
                  width: "100%",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  margin: 0,
                  color: "#111820",
                  wordWrap: "break-word",
                  WebkitBoxOrient: "vertical",
                  MozBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {image.descPrd}
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  marginTop: "0px",

                  "&::before,&::after": {
                    content: '""',
                    display: "table",
                    lineHeight: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    whiteSpace: "normal",
                    lineHeight: "18px",
                    float: "left",
                    clear: "left",
                    width: "auto",
                    display: "block",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                      color: "#111820",
                      whiteSpace: "normal",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#111820",
                      }}
                    >
                      {image.prixAct}&nbsp;{image.prixSymbol}
                    </Box>
                  </Box>
                </Box>
                {image.red && (
                  <Box
                    sx={{
                      whiteSpace: "normal",
                      lineHeight: "18px",
                      float: "left",
                      clear: "left",
                      width: "auto",
                      display: "block",
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        maxWidth: "100%",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                        fontSize: ".875rem",
                        fontWeight: "400",
                        color: "#767676",
                        marginBottom: "5px",
                        boxSizing: "inherit",
                        fontStretch: "normal",
                      }}
                    >
                      <Box
                        component="span"
                        aria-hidden="true"
                        sx={{
                          whiteSpace: "nowrap",
                          fontSize: ".875rem",
                          fontWeight: "400",
                          color: "#767676",
                          fontStretch: "normal",
                          boxSizing: "inherit",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            textDecoration: "line-through",
                            boxSizing: "inherit",
                            whiteSpace: "nowrap",
                            fontSize: ".875rem",
                            fontWeight: 400,
                            color: "#767676",
                            fontStretch: "normal",
                          }}
                        >
                          {image.prixIni}&nbsp;{image.prixSymbol}
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            boxSizing: "inherit",
                            whiteSpace: "nowrap",
                            fontSize: ".875rem",
                            fontWeight: 400,
                            color: "#767676",
                            fontStretch: "normal",
                          }}
                        >
                          &nbsp;|
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontWeight: "bold",
                            color: "#333",
                            textTransform: "uppercase",
                            boxSizing: "inherit",
                            whiteSpace: "nowrap",
                            fontSize: ".875rem",
                            fontStretch: "normal",
                          }}
                        >
                          {image.red}&nbsp;%
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </ProdLinkMobile>
      </Box>
    </Box>
  ));

  return (
    <Box
      sx={{
        borderTop: 0,
        background: "#fff",
        width: "100%",
        margin: "0 auto",
        padding: "0 8px",
      }}
    >
      <Box
        sx={{
          "&::before,&::after": {
            content: '""',
            display: "table",
            lineHeight: 0,
          },
        }}
      >
        <Box
          sx={{
            "&::before,&::after": {
              content: '""',
              display: "table",
              lineHeight: 0,
            },
          }}
        >
          <Box
            component="hr"
            sx={{
              marginTop: "8px!important",
              backgroundColor: "transparent",
              display: "block",
              height: "1px",
              borderWidth: 0,
              borderTop: "1px solid #e7e7e7",
              lineHeight: "19px",
              marginBottom: "14px",
            }}
          ></Box>
          <Box
            sx={{
              margin: "0 -8px",
              padding: 0,
            }}
          >
            <ShowCategory catTitle={catTitle} />
          </Box>
          <Box
            component="ul"
            sx={{
              margin: "0 -8px",
              padding: 0,

              "&::before,&::after": {
                content: '""',
                display: "table",
                lineHeight: 0,
              },
            }}
          >
            {renderedImg}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllPrdtsxs1;
