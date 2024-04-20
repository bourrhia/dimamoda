"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetPrdtsByTermQuery } from "../../redux/features/api/apiSlice";
import ShowLoading from "../Loading/ShowLoading";
import FuzzySearchTermTitle from "../../components/LayoutFiles/Header/FuzzySearchTermTitle";

export const HandlesFuzzySearchXs = ({ allSearchProducts }) => {
  const router = useRouter();

  const {
    data: searchProducts,
    isLoading: searchProductsLoading,
    isSuccess: searchProductsSuccess,
    isError: searchProductsIsError,
    error: searchProductsError,
  } = useGetPrdtsByTermQuery(allSearchProducts);

  const [navProduct, setNavProduct] = useState(false);

  const handleNavProduct = async (productNum) => {
    try {
      router.prefetch(`/product/productById/${encodeURIComponent(productNum)}`);
      router.push(`/product/productById/${encodeURIComponent(productNum)}`);
      setNavProduct(true);
    } catch (error) {
    } finally {
      setNavProduct(true);
    }
  };

  const renderedImg = searchProducts?.map((product, i) => {
    const itemPrixAct = parseFloat(
      Math.round(product.prixAct * 100) / 100
    ).toFixed(2);

    const itemPrixInit = parseFloat(
      Math.round(product.prixIni * 100) / 100
    ).toFixed(2);

    return (
      <Box
        key={i}
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

            "&::after": {
              clear: "both",
            },
          }}
        >
          <Box
            component="a"
            onClick={() => handleNavProduct(product.productId)}
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
                    src={product.imgJpg}
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
                "&::after": {
                  clear: "both",
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
                {product.descPrd}
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

                  "&::after": {
                    clear: "both",
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
                      {itemPrixAct}&nbsp;{product.prixSymbol}
                    </Box>
                  </Box>
                </Box>
                {product.red && (
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
                          {itemPrixInit}&nbsp;{product.prixSymbol}
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
                          {product.red}&nbsp;%
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <>
      <FuzzySearchTermTitle searchTerm={allSearchProducts} />
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

            "&::after": {
              clear: "both",
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

              "&::after": {
                clear: "both",
              },
            }}
          >
            {navProduct && <ShowLoading />}
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
    </>
  );
};

export default HandlesFuzzySearchXs;
