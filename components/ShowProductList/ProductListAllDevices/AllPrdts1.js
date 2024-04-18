import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
//import ProdLinkAllDevices from "../ProductListUpSm/ProdLinkAllDevices";
import ProdLinkAllDevices from "./ProdLinkAllDevices";
import { Suspense } from "react";
import ShowLoading from "../../Loading/ShowLoading";

export const Allprds1 = ({ imgmrv }) => {
  const vAllPrdtsButt = "allPrdtsButt";

  const vDealButt = "dealButt";
  const vPriceButt = "priceButt";
  const vDescButt = "descButt";

  const RenderProduct = ({ image }) => {
    return (
      <>
        <Box
          sx={{
            // paddingBottom: "10px",
            height: "auto",
            //height: "478px",

            width: "100%",

            "@media screen and (min-width: 600px)": {
              width: "calc(100% / (2))",
            },

            "@media screen and (min-width: 768px)": {
              width: "calc(100% / (3))",
            },

            "@media screen and (min-width: 960px)": {
              width: "calc(100% / (4))",
            },

            "@media screen and (min-width: 1083px)": {
              width: "calc(100% / (4))",
            },

            "@media screen and (min-width: 1363px)": {
              width: "calc(100% / (5))",
            },

            "@media screen and (min-width: 1643px)": {
              width: "calc(100% / (5))",
            },

            "@media screen and (min-width: 1923px)": {
              width: "calc(100% / (6))",
            },

            "@media screen and (min-width: 2203px)": {
              width: "calc(100% / (7))",
            },

            "@media screen and (min-width: 2483px)": {
              width: "calc(100% / (8))",
            },

            "@media screen and (min-width: 2763px)": {
              width: "calc(100% / (9))",
            },
            "@media screen and (min-width: 3043px)": {
              width: "calc(100% / (10))",
            },

            "@media screen and (min-width: 600px) and (max-width: 767px)": {
              "&:nth-child(2n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 768px) and (max-width: 959px)": {
              "&:nth-child(3n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 960px) and (max-width: 1082px)": {
              "&:nth-child(4n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 1083px) and (max-width: 1362px)": {
              "&:nth-child(4n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 1363px) and (max-width: 1642px)": {
              "&:nth-child(5n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 1643px) and (max-width: 1922px)": {
              "&:nth-child(5n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 1923px) and (max-width: 2202px)": {
              "&:nth-child(6n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 2203px) and (max-width: 2482px)": {
              "&:nth-child(7n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 2483px) and (max-width: 2762px)": {
              "&:nth-child(8n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 2763px) and (max-width: 3042px)": {
              "&:nth-child(9n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            "@media screen and (min-width: 3043px)": {
              "&:nth-child(10n+1)": {
                borderLeft: "1px solid #ddd",
              },
            },

            borderRight: "solid 1px #D5DBDB",
            borderBottom: "solid 1px #D5DBDB",

            position: "relative",
            padding: "18px",
            flexDirection: "column",
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          {/* <Suspense fallback={<ShowLoading />}> */}
          <ProdLinkAllDevices
            buttonName={vAllPrdtsButt}
            productNum={image.productId}
          >
            <Box
              sx={{
                "@media screen and (min-width: 600px)": {
                  maxWidth: "320px",
                },

                width: "100%!important",
                height: "100%!important",
                margin: "0 auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  height: "100%",
                }}
              >
                <Box
                  //component="a"
                  sx={
                    {
                      /*   textDecoration: "none!important",
                      color: "#007185",
                      cursor: "pointer",

                      ":link": {
                        textDecoration: "none",
                        color: "#007185",
                      },

                      ":visited": {
                        textDecoration: "none",
                        color: "#007185",
                      },
                      ":-webkit-any-link": {
                        cursor: "pointer",
                      },*/
                    }
                  }
                >
                  <Box
                    sx={{
                      marginBottom: "8px!important",
                      width: "100%",

                      "&::before,&::after": {
                        content: '""',
                        display: "table",
                        lineHeight: 0,
                        fontSize: 0,
                      },

                      "&::after": {
                        clear: "both",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "226px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative",

                        "&::after": {
                          content: '""',
                          display: "block",
                          paddingBottom: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          margin: "auto",
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                          maxWidth: "100%",
                          maxHeight: "100%",
                          verticalAlign: "top",
                          border: 0,
                        }}
                      >
                        <Box
                          sx={{
                            position: "block",
                            width: "100%",
                            height: "100%",
                            //
                            position: "relative",
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={image.imgJpg}
                            alt="Image"
                            fill
                            // sizes="100vw"
                            // sizes="130px"
                            sizes="(min-width: 3043px) 10vw, (min-width: 2763px) 11vw, ((min-width: 2483px) 12vw,(min-width: 2203px) 14vw,
                                   (min-width: 1923px) 16vw, (min-width: 1643px) 20vw, (min-width: 1363px) 20vw,(min-width: 1083px) 25vw,(min-width: 960px) 25vw, 
                                   (min-width: 768px) 33vw,(min-width: 600px) 50vw"
                            //  priority={true}
                            style={{
                              objectFit: "contain", // cover, contain, none
                              //objectPosition: "50% 50%",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  // component="a"
                  sx={{
                    color: "#C7511F!important",
                    cursor: "pointer",

                    ":hover": {
                      color: "#C7511F!important",
                      cursor: "pointer",
                      outline: 0,
                    },

                    ":active": {
                      outline: 0,
                    },
                    ":-webkit-any-link": {
                      cursor: "pointer",
                    },

                    fontSize: "12px!important",
                    lineHeight: "16px!important",
                    fontWeight: "400!important",
                    fontStyle: "normal!important",
                    textTransform: "none!important",
                    textDecoration: "none!important",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "4px",
                    }}
                  >
                    {image.red && (
                      <Box
                        sx={{
                          color: "rgb(255, 255, 255)",
                          background: "rgb(204, 12, 57)",
                          borderRadius: "2px",
                          padding: "4px 6px",
                          marginRight: "6px",
                          position: "relative",
                        }}
                      >
                        {image.red}%&nbsp;off
                      </Box>
                    )}
                    {image.red && (
                      <Box
                        sx={{
                          color: "rgb(204, 12, 57)",
                          background: "rgb(255, 255, 255)",
                          position: "relative",
                          fontWeight: 700,
                          lineHeight: "12px",
                          fontSize: "12px!important",
                          flex: "1 1",
                        }}
                      >
                        Bon deal
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      visibility: "hidden",
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "4px",
                      color: "#0F1111!important",
                      fontSize: "12px!important",
                      lineHeight: "16px!important",
                      fontWeight: "400!important",
                      fontStyle: "normal!important",
                      textTransform: "none!important",
                    }}
                  >
                    <Box
                      sx={{
                        color: "rgb(255, 255, 255)",
                        background: "rgb(204, 12, 57)",

                        borderRadius: "2px",
                        padding: "4px 6px",
                        marginRight: "6px",
                        position: "relative",

                        visibility: "hidden",
                        fontSize: "12px!important",
                        lineHeight: "16px!important",
                      }}
                    >
                      {image.red}%&nbsp;off
                    </Box>
                    <Box
                      sx={{
                        color: "rgb(204, 12, 57)",
                        background: "rgb(255, 255, 255)",
                        position: "relative",
                        fontWeight: 700,
                        lineHeight: "12px",
                        fontSize: "12px!important",
                        flex: "1 1",

                        visibility: "hidden",

                        fontStyle: "normal!important",
                        textTransform: "none!important",
                      }}
                    >
                      Bon deal
                    </Box>
                  </Box>
                </Box>

                <Box
                  component="span"
                  sx={{
                    fontSize: "12px!important",
                    lineHeight: "16px!important",
                  }}
                >
                  <Box
                    component="span"
                    role="text"
                    sx={{
                      fontSize: "17px",
                      color: "#0F1111",
                      textDecoration: "none",
                      position: "relative",
                      lineHeight: "normal",
                    }}
                  >
                    <Box component="span" aria-hidden="false">
                      <Box
                        component="span"
                        sx={{
                          fontSize: "17px",
                          color: "#0F1111",
                          lineHeight: "normal",
                          //
                          fontWeight: "bold",
                        }}
                      >
                        {image.prixAct}
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          position: "relative",
                          top: "-0.3em",
                          fontSize: "11px",
                          //
                          fontWeight: "bold",
                        }}
                      >
                        {image.prixSymbol}
                      </Box>
                    </Box>
                  </Box>

                  {(image.prixIni || image.red) && (
                    <Box>
                      <Box
                        sx={{
                          marginBottom: "4px!important",
                          width: "100%",
                          fontSize: "12px!important",
                          lineHeight: "16px!important",

                          "&::before,&::after": {
                            content: '""',
                            display: "table",
                            lineHeight: 0,
                            fontSize: 0,
                          },

                          "&::after": {
                            clear: "both",
                          },
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            color: "#565959!important",
                            fontSize: "12px!important",
                            lineHeight: "16px!important",
                          }}
                        >
                          Ancien prix :
                          <Box
                            component="span"
                            sx={{
                              display: "inline-block",
                              textDecoration: "inherit",
                              fontSize: "12px",
                              color: "#565959",
                              position: "relative",
                              lineHeight: "normal",

                              "&::after": {
                                content: '""',
                                borderTop: "1px solid",
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                left: 0,
                              },
                            }}
                          >
                            <Box component="span" aria-hidden="false">
                              <Box
                                component="span"
                                sx={{
                                  fontSize: "12px",
                                  color: "#565959",
                                  lineHeight: "normal",
                                }}
                              >
                                &nbsp;{image.prixIni}&nbsp;
                              </Box>
                              <Box
                                component="span"
                                sx={{
                                  fontSize: "12px",
                                  color: "#565959",
                                  lineHeight: "normal",
                                }}
                              >
                                &nbsp;{image.prixSymbol}&nbsp;
                              </Box>
                            </Box>
                          </Box>
                          &nbsp;{image.red}%&nbsp;off
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box
                  //component="a"
                  sx={{
                    color: "#0F1111!important",
                    fontWeight: "400!important",
                    fontStyle: "normal!important",
                    textTransform: "none!important",
                    textDecoration: "none!important",

                    ":-webkit-any-link": {
                      cursor: "pointer",
                    },

                    fontSize: "14px",
                    lineHeight: "20px",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    component="div"
                    sx={{ textDecoration: "none!important" }}
                  >
                    <Box
                      sx={{
                        fontSize: "1em",
                        // fontSize: "12px",
                        textOverflow: "ellipsis",
                        maxHeight: "2.8em",
                        overflow: "hidden",
                        lineHeight: "1.4",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        fontWeight: "400!important",
                        fontStyle: "normal!important",
                        textTransform: "none!important",
                        textDecoration: "none!important",
                      }}
                    >
                      description prdt description prdt description prdt
                      description prdt description prdt description prdt
                      description prdt description prdt description prdt
                      description prdt
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ProdLinkAllDevices>
          {/*  </Suspense> */}
        </Box>
      </>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",

        "&::before,&::after": {
          content: '""',
          display: "table",
          lineHeight: 0,
          fontSize: 0,
        },

        "&::after": {
          clear: "both",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        {imgmrv.map((prd) => (
          <RenderProduct key={prd.productId} i image={prd} />
        ))}
      </Box>
    </Box>
  );
};

export default Allprds1;
