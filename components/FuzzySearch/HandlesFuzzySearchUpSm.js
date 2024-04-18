"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetPrdtsByTermQuery } from "../../redux/features/api/apiSlice";
import ShowLoading from "../Loading/ShowLoading";

export const HandlesFuzzySearchUpSm = ({ allSearchProducts }) => {
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

  return (
    <Box
      sx={{
        marginTop: "14px",
        maxWidth: "1490px",
        margin: "4px auto 10px",
        padding: "0 16px",
        position: "relative",
        color: "#191919",
        fontSize: ".875rem",
        WebkitTextSizeAdjust: "100%",
      }}
    >
      <Box
        role="main"
        sx={{
          "@media only screen and (min-width: 768px)": {
            marginLeft: "16px",
            float: "left",
            width: "calc(100% - 221px)",
          },

          "@media only screen and (max-width: 768px)": {
            width: "100%",
          },

          marginBottom: "16px",
          outline: 0,
          transition: "margin-left .35s ease-out",
          color: "#191919",
          fontSize: ".875rem",

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
            borderTop: "1px solid #e5e5e5",
            float: "left",
            background: "#fff",
            width: "100%",
            margin: "0 auto",
            color: "#191919",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              color: "#191919",
              fontSize: ".875rem",

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
                color: "#191919",
                fontSize: ".875rem",

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
                  "@media only screen and (min-width: 768px)": {
                    margin: 0,
                  },

                  padding: 0,

                  color: "#191919",
                  fontSize: ".875rem",

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
                {searchProducts?.map((product, i) => {
                  const itemPrixAct = parseFloat(
                    Math.round(product.prixAct * 100) / 100
                  ).toFixed(2);

                  const itemPrixInit = parseFloat(
                    Math.round(product.prixIni * 100) / 100
                  ).toFixed(2);

                  return (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        width: "100%",
                        padding: "8px 0",
                        borderBottom: "1px solid #e5e5e5",
                        position: "relative",
                        fontWeight: 400,
                        background: "#fff",
                        listStyle: "none",
                        transition: "all .2s ease-out",
                        transitionProperty: "margin,padding,border",
                        color: "#191919",
                        fontSize: ".875rem",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: "100%",

                          color: "#191919",
                          fontSize: ".875rem",

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
                            "@media only screen and (min-width: 960px)": {
                              width: "225px",
                            },

                            "@media only screen and (min-width: 600px)": {
                              width: "178px",
                            },

                            "@media only screen and (min-width: 480px)": {
                              width: "29%",
                            },

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
                            }}
                          >
                            <Box
                              component="a"
                              tabIndex="-1"
                              aria-hidden="true"
                              onClick={() =>
                                handleNavProduct(product.productId)
                              }
                              onTouchEnd={() =>
                                handleNavProduct(product.productId)
                              }
                              sx={{
                                color: "#3665f3",
                                textDecoration: "none",
                                cursor: "pointer",

                                "&:link": {
                                  color: "#3665f3",
                                },

                                "&:link": {
                                  textDecoration: "none",
                                },

                                ":-webkit-any-link": {
                                  cursor: "pointer",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  alignItems: "center",
                                  borderRadius: "8px",
                                  display: "flex",
                                  justifyContent: "center",
                                  overflow: "hidden",

                                  "&::after": {
                                    background: "rgba(0,0,0,0.05)",
                                    bottom: 0,
                                    content: '""',
                                    display: "block",
                                    left: 0,
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                  },
                                }}
                              >
                                <Image
                                  src={product.imgJpg}
                                  alt="Image from fuzzy search"
                                  sizes="(min-width: 960px) 225px, (min-width:  600px)  178px, (min-width:  480px) 29%"
                                  fill
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            "@media only screen and (min-width: 960px)": {
                              width: "calc(100% - 225px)",
                            },

                            "@media only screen and (min-width: 600px)": {
                              width: "calc(100% - 178px)",
                              padding: "0 0 0 16px",
                            },

                            "@media only screen and (min-width: 480px)": {
                              width: "71%",
                            },
                            float: "left",
                            color: "#707070",
                            fontSize: "14px",

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
                              color: "#191919",
                              display: "inline-block",
                              width: "100%",
                              background: "#fff",
                              textDecoration: "none",
                              cursor: "pointer",

                              "&:link": {
                                textDecoration: "none",
                              },

                              ":-webkit-any-link": {
                                cursor: "pointer",
                              },

                              fontSize: "14px",
                            }}
                          >
                            <Box
                              sx={{
                                color: "#82187c",

                                "@media only screen and (min-width: 600px)": {
                                  fontSize: "16px",
                                  maxWidth: "800px",
                                },

                                WebkitLineClamp: 3,
                                display: "-webkit-inline-box",
                                width: "100%",

                                fontWeight: "400",
                                lineHeight: "21px",
                                margin: 0,
                                wordWrap: "break-word",
                                WebkitBoxOrient: "vertical",
                                MozBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <Box
                                component="span"
                                role="heading"
                                sx={{
                                  color: "#707070",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "21px",
                                }}
                              >
                                {product.descPrd}
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              fontSize: "14px",
                              color: "#707070",
                              lineHeight: 1.3,
                              minHeight: "16px",
                              marginTop: 0,
                              display: "block",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Box component="span"></Box> {product.etatprd}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              marginTop: "20px",
                              color: "#707070",

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
                                "@media only screen and (min-width: 960px)": {
                                  maxWidth: "40%",
                                },

                                "@media only screen and (min-width: 480px)": {
                                  maxWidth: "50%",
                                },
                                lineHeight: "20px",
                                float: "left",
                                clear: "left",
                                width: "auto",
                                display: "block",
                                color: "#707070",
                              }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  "@media only screen and (min-width: 960px)": {
                                    fontSize: "24px",
                                  },

                                  "@media only screen and (min-width: 600px)": {
                                    fontSize: "18px",
                                  },
                                  lineHeight: "24px",

                                  fontWeight: 400,

                                  "@media only screen and (min-width: 768px)": {
                                    fontWeight: "bold",
                                  },

                                  "@media only screen and (min-width: 600px)": {
                                    position: "relative",
                                    top: "1px",
                                  },

                                  color: "#191919",
                                }}
                              >
                                {itemPrixAct}&nbsp;{product.prixSymbol}
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                whiteSpace: "normal",
                                "@media only screen and (min-width: 960px)": {
                                  maxWidth: "40%",
                                },

                                "@media only screen and (min-width: 480px)": {
                                  maxWidth: "50%",
                                },
                                lineHeight: "20px",
                                float: "left",
                                clear: "left",
                                width: "auto",
                                display: "block",
                                color: "#707070",
                                fontSize: "14px",
                              }}
                            >
                              {product.red && (
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
                                      {itemPrixInit}&nbsp;{product.prixSymbol}
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
                                      <Box component="span">{product.red}</Box>
                                      <Box component="span">
                                        % de réduction)
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              )}
                            </Box>
                            <Box
                              sx={{
                                whiteSpace: "normal",
                                "@media only screen and (min-width: 960px)": {
                                  maxWidth: "40%",
                                },

                                "@media only screen and (min-width: 480px)": {
                                  maxWidth: "50%",
                                },
                                lineHeight: "20px",
                                float: "left",
                                clear: "left",
                                width: "auto",
                                display: "block",
                                color: "#707070",
                                fontSize: "14px",
                              }}
                            >
                              <Box component="span">5,90 Dhs (Livraison)</Box>
                            </Box>
                            <Box
                              sx={{
                                whiteSpace: "normal",
                                "@media only screen and (min-width: 960px)": {
                                  maxWidth: "40%",
                                },

                                "@media only screen and (min-width: 480px)": {
                                  maxWidth: "50%",
                                },
                                lineHeight: "20px",
                                float: "left",
                                clear: "left",
                                width: "auto",
                                display: "block",
                                color: "#707070",
                                fontSize: "14px",
                              }}
                            >
                              <Box component="span">Retours gratuits</Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HandlesFuzzySearchUpSm;
