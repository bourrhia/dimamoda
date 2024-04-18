import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ShowCatTitle from "../ProductListAllDevices/ShowCatTitle";
import ProdLinkMobile from "./ProdLinkMobile";

export const PrdListXs2 = ({ imgmrv }) => {
  const filteredImg = imgmrv.filter((image, i) => i < 3);

  const vCatTitle = "Meilleures ventes";
  const vRenderedImgXsButt = "renderedImgXsButt";
  const vVoirePlusXsButt = "showMoreXsButt";

  const renderedImg = filteredImg.map((image) => (
    <Box
      key={image.productId}
      sx={{
        marginBottom: "1.3rem",
      }}
    >
      <ProdLinkMobile
        buttonName={vRenderedImgXsButt}
        productNum={image.productId}
      >
        <Box
          sx={{
            cursor: "pointer",
            textDecoration: "none!important",

            ":link": {
              textDecoration: "none",
              color: "#007185",
            },

            ":-webkit-any-link": {
              cursor: "pointer",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",

              "&::after, &::before": {
                display: "table",
                content: '""',
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
                width: "40%",
                marginRight: "5%",

                float: "left",
                minHeight: "0.1rem",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  height: "160px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    margin: "auto",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    verticalAlign: "top",
                    border: 0,

                    height: "160px",

                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={image.imgJpg}
                    alt="Image"
                    fill
                    sizes="120px"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginRight: 0,
                float: "right",
                width: "55%",
                minHeight: "0.1rem",
                overflow: "visible",
                height: "140px",
                padding: 0,
                paddingTop: "15px",
                paddingBottom: "15px",
                margin: 0,
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontSize: "12px!important",
                  lineHeight: "16px!important",
                  paddingBottom: 0,
                  WebkitLineClamp: 2,
                  maxHeight: "48px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  marginBottom: "0!important",
                  color: "#0F1111!important",
                  fontWeight: 700,
                  textRendering: "optimizeLegibility",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "14px!important",
                    lineHeight: "20px!important",
                    paddingBottom: 0,
                    color: "#0F1111!important",
                    fontWeight: "400!important",
                    fontStyle: "normal!important",
                    textTransform: "none!important",
                    textDecoration: "none!important",
                  }}
                >
                  {image.descPrd}
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: "0!important",
                  marginBottom: "0!important",
                }}
              >
                <Box
                  sx={{
                    WebkitBoxAlign: "center",
                    MsFlexAlign: "center",
                    alignItems: "center",
                    marginBottom: "4px",
                    display: "-webkit-box",
                    display: "-ms-flexbox",
                    display: "flex",
                    width: "100%",

                    "&::after, &::before": {
                      display: "table",
                      content: '""',
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
                      backgroundColor: "#CC0C39",
                      color: "#ffffff",
                      borderRadius: "2px",
                      fontWeight: 400,
                      lineHeight: "12px",
                      marginRight: "6px",
                      padding: "4px 6px",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: ".75rem!important",
                        fontWeight: 700,
                        lineHeight: "normal!important",
                      }}
                    >
                      {image.prixAct}&nbsp;{image.prixSymbol}&nbsp;
                    </Box>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#CC0C39",
                      WebkitBoxFlex: 1,
                      msFlex: 1,
                      flex: 1,
                      fontWeight: 700,
                      lineHeight: "12px",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: ".75rem!important",
                        fontWeight: 700,
                        lineHeight: "normal!important",
                      }}
                    >
                      vente flash
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginBottom: "0!important",
                  width: "100%",

                  "&::after, &::before": {
                    display: "table",
                    content: '""',
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
                    marginBottom: 0,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "1rem",
                      color: "#0F1111",
                      textDecoration: "none",
                      position: "relative",
                      lineHeight: "normal",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        MsUserSelect: "none",
                        userSelect: "none",
                        position: "absolute!important",
                        left: "0rem!important",
                        bottom: "-0.1rem!important",
                        zIndex: "-1!important",
                        opacity: 0,
                        fontSize: "1rem",
                        color: "#0F1111",
                        lineHeight: "normal",
                      }}
                    >
                      {image.prixAct}&nbsp;{image.prixSymbol}
                    </Box>
                    <Box component="span" aria-hidden="true" sx={{}}>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "1rem",
                          color: "#0F1111",
                          lineHeight: "normal",
                        }}
                      >
                        {image.prixAct}&nbsp;{image.prixSymbol}
                      </Box>
                    </Box>
                  </Box>

                  {image.red && (
                    <Box
                      sx={{
                        marginBottom: "0.4rem!important",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          color: "#565959!important",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: "inline-block",
                            textDecoration: "inherit",
                            color: "#565959",
                            position: "relative",

                            "&::after": {
                              borderTop: "0.1rem solid",
                              position: "absolute",
                              content: '""',
                              right: 0,
                              top: "50%",
                              left: 0,
                            },
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              WebkitUserSelect: "none",
                              MozUserSelect: "none",
                              MsUserSelect: "none",
                              userSelect: "none",
                              position: "absolute!important",
                              left: "0rem!important",
                              bottom: "-0.1rem!important",
                              zIndex: "-1!important",
                              opacity: 0,
                            }}
                          >
                            {image.prixIni}&nbsp;{image.prixSymbol}
                          </Box>
                          <Box
                            component="span"
                            aria-hidden="true"
                            sx={{
                              color: "#565959",
                              fontWeight: 300,

                              fontSize: ".75rem",
                            }}
                          >
                            {image.prixIni}&nbsp;{image.prixSymbol}
                          </Box>
                        </Box>
                        <Box
                          component="span"
                          aria-hidden="true"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 300,
                            paddingLeft: "0.4rem",
                            paddingRight: "0.4rem",
                            color: "#0F1111",
                          }}
                        >
                          -
                        </Box>
                        <Box
                          component="span"
                          aria-hidden="true"
                          sx={{
                            fontSize: ".75rem",
                            color: "#0F1111",
                            textDecoration: "none",
                            position: "relative",
                            lineHeight: "normal",
                            fontWeight: "400!important",
                            fontStyle: "normal!important",
                            textTransform: "none!important",
                          }}
                        >
                          <Box
                            component="span"
                            aria-hidden="true"
                            sx={{
                              WebkitUserSelect: "none",
                              MozUserSelect: "none",
                              MsUserSelect: "none",
                              userSelect: "none",
                              position: "absolute!important",
                              left: "0rem!important",
                              bottom: "-0.1rem!important",
                              zIndex: "-1!important",
                              opacity: 0,
                            }}
                          >
                            {image.red}&nbsp;%
                          </Box>
                          <Box
                            component="span"
                            aria-hidden="true"
                            sx={{
                              lineHeight: "normal",

                              color: "#565959",
                              fontWeight: 300,

                              fontSize: ".75rem",
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
          </Box>
        </Box>
      </ProdLinkMobile>
    </Box>
  ));

  return (
    <Box>
      <Box
        sx={{
          marginTop: "5px",
          marginBottom: "5px",
          backgroundColor: "#FFF",
          overflow: "auto",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            padding: 0,
            paddingBottom: "10px",
          }}
        >
          <Box
            component="h2"
            sx={{
              paddingBottom: 0,
              fontSize: "20px",
              lineHeight: 1.3,
              textRendering: "optimizeLegibility",
              padding: 0,
              margin: 0,
            }}
          >
            <Box
              component="span"
              sx={{
                lineHeight: "1.3em !important",
                maxHeight: "2.6em",
                display: "block",
                wordBreak: "normal",
                position: "relative",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                component="span"
                sx={{
                  position: "absolute!important",
                  left: "0rem!important",
                  bottom: "-0.1rem!important",
                  zIndex: "-1!important",
                  opacity: 0,
                  display: "inline-block",
                  width: "100%",
                  whiteSpace: "normal",
                }}
              >
                <ShowCatTitle catTitle={vCatTitle} />
              </Box>

              <Box
                component="span"
                sx={{
                  height: "auto",
                  display: "inline-block",
                  width: "100%",
                  whiteSpace: "normal",
                }}
              >
                <ShowCatTitle catTitle={vCatTitle} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: 0,
            position: "relative",
          }}
        >
          {renderedImg}
        </Box>
        <Box
          sx={{
            paddingTop: "1.3rem",
            fontSize: "15px",
            color: "#111",
            fontWeight: "300",
            lineHeight: "1.35",
          }}
        >
          <Box>
            <ProdLinkMobile buttonName={vVoirePlusXsButt}>
              <Box
                sx={{
                  cursor: "pointer",
                  color: "#007185",
                  textDecoration: "none!important",

                  ":link": {
                    textDecoration: "none",
                    color: "#007185",
                  },

                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    lineHeight: "1.3em !important",
                    maxHeight: "1.3em",
                    display: "block",
                    wordBreak: "normal",
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "absolute!important",
                      left: "0rem!important",
                      bottom: "-0.1rem!important",
                      zIndex: "-1!important",
                      opacity: 0,
                      display: "inline-block",
                      width: "100%",
                      whiteSpace: "normal",
                    }}
                  >
                    Voir plus
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      height: "auto",
                      display: "inline-block",
                      width: "100%",
                      whiteSpace: "normal",
                    }}
                  >
                    Voir plus
                  </Box>
                </Box>
              </Box>
            </ProdLinkMobile>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrdListXs2;
